const Header = () => {
    return <header id="headersection" className="fixed w-full">
        <nav id="mynavbar" className="navbar flex flex-row p-5 transition-colors duration-250">
            <div className="logo basis-64 flex justify-center font-black">
                <a className="flex items-center justify-center" href="#"><img src="src/assets/images/logo-symbol.svg" alt="logo" />&nbsp;Your
                    Logo</a>
            </div>

            <input type="checkbox" id="menu-toggle" />

            <label htmlFor="menu-toggle" id="mobilemenutoggle" className="hamburger hamburgerlight text-black dark:text-white"></label>

            <ul className="menu basis-128 flex items-center bg-white dark:bg-black md:dark:bg-transparent md:bg-transparent">
                <li className="pl-10"><a href="#about">About</a></li>
                <li className="pl-10">
                    <a href="#service">Service</a>
                </li>
                <li className="pl-10">
                    <a href="#projects">Projects</a>
                </li>
                <li className="pl-10">
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li className="pl-10">
                    <a href="#faq">FAQ</a>
                </li>

                <li className="action-button-mobile">
                    <div className="action-button">
                        <div className="flex rounded-3xl bg-gradient-to-br from-red-200 to-orange-600 p-0.5 mx-7">
                            <a href="#contact" className="w-full text-center rounded-3xl text-white globalbackgroundtheme hover:bg-amber-300 py-1">Let's Talk</a>
                        </div>
                    </div>
                </li>
            </ul>

            <div className="action-button desktop-action basis-64 flex justify-center">
                <div className="flex rounded-3xl bg-gradient-to-br from-red-200 to-orange-600 p-0.5">
                    <a href="#" className="w-full text-center rounded-3xl py-2 px-15 text-white globalbackgroundtheme hover:bg-amber-300 p-0">Let's Talk</a>
                </div>
            </div>
        </nav>
    </header>;
}

export default Header;