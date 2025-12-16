const Portfolio = () => {
    return  <section id="portfoliosection" className="md:px-15 mb-20">
      <h2 className="text-center text-3xl mx-5 md:mx-20 2xl:mx-55">
        From Vision to Launch! Projects We’re Proud Of
      </h2>
      <p className="text-center text-gray-500 mx-5 md:mx-20 2xl:mx-55">
        Take a closer look at our recent work powering startups, enterprises, and everything in between.
      </p>

      <div className="flex flex-col md:flex-row w-full mx-auto p-4 space-y-4 md:space-y-0 md:space-x-4 px-5 md:px-20 2xl:px-35 my-5">
        <div className="w-full md:w-1/3 grid content-cente">
          <img src="src/assets/images/portfolio-01.svg" alt="portfolio-01" className="w-full" />
          <p className="globaltextcolortheme text-xs mt-5">Landing Page</p>
          <p>Portfolio 01</p>
        </div>

        <div className="w-full md:w-1/3 grid content-center">
          <img src="src/assets/images/portfolio-02.svg" alt="portfolio-02" className="w-full" />
          <p className="globaltextcolortheme text-xs mt-5">Landing Page</p>
          <p>Portfolio 02</p>
        </div>

        <div className="w-full md:w-1/3 grid content-center">
          <img src="src/assets/images/portfolio-03.svg" alt="portfolio-03" className="w-full" />
          <p className="globaltextcolortheme text-xs mt-5">Landing Page</p>
          <p>Portfolio 03</p>
        </div>
      </div>

    </section>;
}

export default Portfolio;