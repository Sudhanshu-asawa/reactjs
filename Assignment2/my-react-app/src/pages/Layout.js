import {Outlet, Link} from "react-router-dom";
import './Layout.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Layout = () => {
    return (
        <>
            <nav>
                <div className="a1">
                    <p>SHOPKART</p>
                </div>
                <ul className="menu">

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">AboutUs</Link></li>
                    <li><Link to="/CheckoutPage">CheckoutPage</Link></li>
                    <li><Link to="/ContactUS">ContactUS</Link></li>
                    <li><Link to="/ProductPage">ProductPage</Link></li>
                    <li><Link to="/CartPage"><ShoppingCartIcon/></Link></li>


                </ul>
            </nav>


            <Outlet/>
            <footer>
                <div className="footer">
                    <div>
                        <ul>
                            <p>Get to Know Us</p>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press Releases</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <p>Connect with Us</p>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <p>Make Money with Us</p>
                            <li>Sell on Amazon</li>
                            <li>Sell under Amazon Accelerator</li>
                            <li>Amazon Global Selling</li>
                            <li>Protect and Build Your Brand</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <p>Let Us Help You</p>
                            <li>COVID-19 and Amazon</li>
                            <li>Returns Centre</li>
                            <li>Amazon Global Selling</li>
                            <li>100% Purchase Protection</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 1996-2023, Shopcart.com, Inc. or its affiliates</p>
                </div>
            </footer>
        </>
    )
};

export default Layout;