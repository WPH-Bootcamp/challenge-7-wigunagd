type LogoProps = {
    logoClass:string;
}

const Logo = ({logoClass}: LogoProps) => {

    return (
        <div className={`flex font-semibold ${logoClass}`}>
                <a className="flex items-center justify-center" href="#">
                    <img src="src/assets/images/logo-symbol.svg" alt="logo" />&nbsp;Your
                    Logo</a>
            </div>
    );

}

export default Logo;