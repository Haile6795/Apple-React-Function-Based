import React from "react";
import mac from "../commonResource/images/home/mac-laptop.jpg";


function First() {
    return (
        <section className="main-highlight-wrapper">
            <div className="container">
            <div className="row h-100 align-items-center justify-content-center text-center">
                <div className="col-12">
                <div className="model">16-inch model</div>

                <div className="product-title">MacBook Pro</div>

                <div className="brief-description">The best for the brightest.</div>

                <div className="links-wrapper">
                    <ul>
                    <li>
                        <a href="">Learn more</a>
                    </li>
                    <li>
                        <a href="">Buy</a>
                    </li>
                    </ul>
                </div>

                <div className="main-image-wrapper">
                    <img src={mac} />
                </div>
                </div>
            </div>
            </div>
        </section>
    )
};
export default First;