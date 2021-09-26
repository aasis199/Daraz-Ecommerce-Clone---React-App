import React from 'react'
import { Nav } from './NavbarStyle'


export default function Navbar() {
    return (
        <Nav>
            <div className="top_menu container-fluid d-none d-lg-block">
                <div className="container">
                    <ul>
                        <li><a href="a.html" className="active">SAVE MORE ON APP</a></li>
                        <li><a href="a.html">SELL ON DARAZ</a></li>
                        <li><a href="a.html">CUSTOMER CARE</a></li>
                        <li><a href="a.html">TRACK MY ORDER</a></li>
                        <li><a href="a.html">LOGIN</a></li>
                        <li><a href="a.html">SIGN UP</a></li>
                        <li><a href="a.html">भाषा परिवर्तन</a></li>
                    </ul>
                </div>
            </div>

            <div className="second-menu">
                    <div className="co ">
                        <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1eIwbmljTBKNjSZFuXXb0HFXa.png" className="logo" alt="tasbir"></img>
                    </div>
                        
                    <div className="co d-flex">
                        <input type="text" name="search" placeholder="Search in Daraz" className="search"></input>
                        <a href="#"><i className="fa fa-search"></i></a>
                        <a href="cart"><i className="fa fa-shopping-cart"></i></a>
                    </div>
                    
                    <div className="co d-none d-lg-block">
                        <img src="https://icms-image.slatic.net/images/ims-web/9a6f2bbd-0287-4e3e-acd7-497ac2d66cc7.gif" className="offer" alt="tasbir"></img>
                    </div>
                </div>
        </Nav>
    )
}
