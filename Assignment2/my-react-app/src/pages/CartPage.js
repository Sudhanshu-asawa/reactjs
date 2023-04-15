import { useState, useEffect } from "react";
import './CartPage.css'
import { useNavigate } from "react-router-dom";



function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(items);
    }, []);

    const handleRemoveItem = (index) => {
        const newCart = [...cartItems];
        newCart.splice(index, 1);
        setCartItems(newCart);

        localStorage.setItem("cartItems", JSON.stringify(newCart));
    };

    const navigate = useNavigate();

    const handleIncrement = (index) => {
        const newCart = [...cartItems];
        newCart[index].quantity += 1;
        setCartItems(newCart);

        localStorage.setItem("cartItems", JSON.stringify(newCart));
    };

    const handleDecrement = (index) => {
        const newCart = [...cartItems];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;
            setCartItems(newCart);

            localStorage.setItem("cartItem", JSON.stringify(newCart));
        }
    };
    const subTotal = (item) => {
        return item.price * item.quantity;
    };
    const total = cartItems.reduce((acc, item) => {
        return acc + subTotal(item);
    }, 0);

    return (
        <div className="cart-page">
            <h2>Cart</h2>
            {cartItems.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>Rs{item.price}</td>
                            <td>
                                <button onClick={() => handleDecrement(index)}>-</button>
                                {item.quantity}
                                <button onClick={() => handleIncrement(index)}>+</button>
                            </td>
                            <td>Rs{subTotal(item)}</td>
                            <td>
                                <button onClick={() => handleRemoveItem(index)}>X</button>
                            </td>
                        </tr>
                    ))}
                    <tr className="total">
                        <td colSpan="3"></td>
                        <td>Total:</td>
                        <td>Rs{total}</td>
                    </tr>
                    <tr className="checkout">
                        <td colSpan="2"></td>
                        <td><button onClick={() => navigate("/CheckoutPage")} > CheckOut</button></td>
                    </tr>
                    </tbody>
                </table>
            ) : (
                <p>No items in cart.</p>
            )}
        </div>
    );
}

export default Cart;