const Footer = () => {
    return <footer id="footersection" className="mb-20 text-center">
      <div className="grid bg-gray-50 border border-gray-300 dark:bg-gray-950 dark:border-gray-800 xlg:max-w-[1280px] mx-2 md:mx-12 lg:mx-auto 2xl:mx-auto py-5 rounded-xl">

        <div className="md:flex md:flex-row relative border-b-[1px] border-gray-200 dark:border-gray-800 mx-5 pb-10">

          <div className="flex font-black mb-5 md:absolute md:right-1">
            <a className="flex items-center justify-center" href="#"><img src="src/assets/images/logo-symbol.svg" alt="logo" />&nbsp;Your
              Logo</a>
          </div>
          <p className="text-3xl text-left md:max-w-[250px]">LET'S DISCUSS YOUR IDEAS</p>

        </div>

        <div className="md:grid md:grid-cols-2 md:pt-15 py-5 md:relative">

          <ul className="grid md:flex text-left ml-2">
            <li className="p-3">
              <a href="#about">About</a>
            </li>
            <li className="p-3">
              <a href="#service">Service</a>
            </li>
            <li className="p-3">
              <a href="#projects">Projects</a>
            </li>
            <li className="p-3">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="p-3">
              <a href="#faq">FAQ</a>
            </li>
          </ul>

          <ul className="flex ml-2 md:absolute md:right-3 md:bottom-3">

            <li className="p-3">
              <a href="#facebook" className="">
                <img src="src/assets/images/social-01-fb.svg" alt="facebook" className="border border-gray-300 rounded-full w-7 h-7 p-0.25 icon-tint" />
              </a>
            </li>

            <li className="p-3">
              <a href="#instagram" className="">
                <img src="src/assets/images/social-02-ig.svg" alt="instagram" className="border border-gray-300 rounded-full w-7 h-7 p-0.25 icon-tint" />
              </a>
            </li>


            <li className="p-3">
              <a href="#linkedin" className="">
                <img src="src/assets/images/social-03-linkedin.svg" alt="linkedin" className="border border-gray-300 rounded-full w-7 h-7 p-0.25 icon-tint" />
              </a>
            </li>


            <li className="p-3">
              <a href="#tiktok" className="">
                <img src="src/assets/images/social-04-tiktok.svg" alt="tiktok" className="border border-gray-300 rounded-full w-7 h-7 p-0.25 icon-tint" />
              </a>
            </li>

          </ul>
        </div>

      </div>
    </footer>;
}

export default Footer;