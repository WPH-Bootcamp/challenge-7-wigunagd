import React from 'react';

interface ButtonProperties{
    href: string;
    children: React.ReactNode;
    divClass?: string;
    aClass?: string;
    className?: string;
}

const ButtonLink = ({href, divClass, aClass, children}: ButtonProperties) => {
    return (
        <div className={`rounded-3xl bg-gradient-to-br from-red-200 to-orange-600 p-0.5 ${divClass}`}>
            <a href={href} 
            className={`text-center rounded-3xl font-bold text-white globalbackgroundtheme hover:bg-amber-300 py-2 px-10 block ${aClass}`}>
                {children}
            </a>
        </div>
    );
};

export default ButtonLink;