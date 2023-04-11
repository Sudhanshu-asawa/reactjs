import React, {useEffect, useState} from 'react';
import './HomePage.css';
import SimpleImageSlider from "react-simple-image-slider";
export default function App() {
    const sliderImages = [
        {
            url:"images/slider2.jpg",
        },
        {
            url:"images/slider1.jpg",
        },
        {
            url:"images/slider3.jpg",
        },
    ];

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Load cart items from local storage
        const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
        setCartItems(savedCartItems);

        fetch("/product.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    const handleAddToCart = (product) => {
        // Check if the product is already in the cart
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            // Increment the quantity if the product is already in the cart
            const updatedCartItems = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            // Add the product to the cart with a quantity of 1
            const newCartItem = { id: product.id, name: product.name, price: product.price, quantity: 1 };
            setCartItems([...cartItems, newCartItem]);
        }
    };

    // Save cart items to local storage whenever the cart items state changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
    return (
        <div className="home">
            <div className="banner">
                <SimpleImageSlider
                    width={1300}
                    height={250}
                    images={sliderImages}
                    showNavs={true}
                    slideDuration={0.5}
                    autoPlay={true}
                    autoPlayDelay={2.0}
                />
            </div>
            <div className="productlist">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <h3>{product.name}</h3>
                        <img id="img" src={product.image} alt={product.name} />
                        <p className="desc">{product.description}</p>
                        <p className="price">{product.price} Rs</p>
                        <button onClick={ () => {if(window.confirm("Are you sure to add product in cart "))
                        { handleAddToCart(product)};}}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <img className="home" src="images/home1.jpg"  />
            <img className="home" src="images/home2.jpg"  />

        </div>
    );
}
