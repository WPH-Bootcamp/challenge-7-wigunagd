import ButtonLink from '../../ui/Button/ButtonLink';

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
        <ButtonLink href='#formcontactsection'
          divClass='w-[200px] mt-5'>
          Let's Talk
        </ButtonLink>
      </div>
    </div>
    <div className="w-full md:w-1/2 justify-center">
      <img id="imgherolight" src="src/assets/images/heroimglight.svg" alt="Image Hero" className="w-full hidden" />
      <img id="imgherodark" src="src/assets/images/heroimgdark.svg" alt="Image Hero" className="w-full" />
    </div>
  </section>;
};

export default Hero;
