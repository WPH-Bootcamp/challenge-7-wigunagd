const Hero = () => {
  return <section id="herosection" className="flex flex-wrap mt-25 md:mt-0 mb-10">
      <div className="w-full md:w-1/2 flex mb-5 sm:mt-0">
        <div className="max-w-3/4 my-auto mx-auto">
          <h1 className="text-4xl">
            Your Tech Partner for <br />
            <p className="globaltextcolortheme">Smarter Growth</p>
          </h1>
          <p>
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
          <div className="flex rounded-3xl bg-gradient-to-br from-red-300 to-orange-600 p-0.5 mt-5 w-[200px]">
            <a href="#contact" className="w-full text-center rounded-3xl py-2 px-10 text-white globalbackgroundtheme hover:bg-amber-300 p-0">Let's Talk</a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 justify-center">
        <img id="imgherolight" src="src/assets/images/heroimglight.svg" alt="Image Hero" className="w-full hidden" />
        <img id="imgherodark" src="src/assets/images/heroimgdark.svg" alt="Image Hero" className="w-full" />
      </div>
    </section>;
};

export default Hero;
