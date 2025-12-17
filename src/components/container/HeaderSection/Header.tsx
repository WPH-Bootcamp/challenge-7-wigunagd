import ButtonLink from '../../ui/Button/ButtonLink';
import NavigationMenu from '../../ui/Navigation/NavigationMenu';
import Logo from '../../ui/Navigation/Logo';

const Header = () => {
    return <header id="headersection" className="fixed w-full">
        <nav id="mynavbar" className="navbar flex flex-row p-5 transition-colors duration-250">
            
            <Logo logoClass='logo basis-64 justify-center' />

            <input type="checkbox" id="menu-toggle" />

            <label htmlFor="menu-toggle" id="mobilemenutoggle" className="hamburger hamburgerlight text-black dark:text-white"></label>

            <NavigationMenu ulClass='menu basis-lg flex items-center bg-white dark:bg-black md:dark:bg-transparent md:bg-transparent' liClass='pl-10'>
                <li className="action-button-mobile">
                    <div className="action-button">
                        <ButtonLink href='#formcontactsection'
                            divClass='flex p-0.5 mx-7'
                            aClass='w-full'>
                            Let's Talk
                        </ButtonLink>
                    </div>
                </li>
            </NavigationMenu>

            <div className="action-button desktop-action basis-64 flex justify-center">
                <ButtonLink href='#formcontactsection'
                    divClass='w-[200px]'>
                    Let's Talk
                </ButtonLink>
            </div>
        </nav>
    </header>;
}

export default Header;

/* 
<div className="flex font-black mb-5 md:absolute md:right-1">

          <a className="flex items-center justify-center" href="#"><img src="src/assets/images/logo-symbol.svg" alt="logo" />&nbsp;Your
            Logo</a>
            
        </div>
*/
