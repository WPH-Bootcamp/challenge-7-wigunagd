import React from "react";

type NavigationMenuItems = {
    ulClass: string;
    liClass: string;
    children?: React.ReactNode;
}

const NavigationMenu = ({ ulClass, liClass, children }: NavigationMenuItems) => {
    return (
        <ul className={ulClass}>
            <li className={liClass}>
                <a href="#about">About</a>
            </li>
            <li className={liClass}>
                <a href="#service">Service</a>
            </li>
            <li className={liClass}>
                <a href="#projects">Projects</a>
            </li>
            <li className={liClass}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li className={liClass}>
                <a href="#faq">FAQ</a>
            </li>

            {children}
        </ul>
    );
};

export default NavigationMenu