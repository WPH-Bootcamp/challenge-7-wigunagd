type PortfolioType = {
  title: string;
  desc: string;
  imgsrc: string;
}

const portfolioList: PortfolioType[] = [
  {
    title: "Portfolio 01",
    desc: "Landing Page",
    imgsrc: "src/assets/images/portfolio-01.svg"
  }, {
    title: "Portfolio 02",
    desc: "Landing Page",
    imgsrc: "src/assets/images/portfolio-02.svg"
  }, {
    title: "Portfolio 03",
    desc: "Landing Page",
    imgsrc: "src/assets/images/portfolio-03.svg"
  },
];

const Portfolio = () => {
  return (
    <section id="portfoliosection" className="md:px-3 mb-20">
      <h2 className="text-center font-bold md:text-3xl text-2xl">
        From Vision to Launch! Projects We’re Proud Of
      </h2>
      <p className="text-center text-gray-500 mx-2 md:text-lg text-sm font-medium">
        Take a closer look at our recent work powering startups, enterprises, and everything in between.
      </p>

      <div className="flex flex-col md:flex-row w-full mx-auto p-4 space-y-4 md:space-y-0 md:space-x-4 px-5 md:px-20 2xl:px-35 my-5">
        
        {portfolioList.map((p) => (
        <div key={p.title} className="w-full md:w-1/3 grid content-cente">
          <img src={p.imgsrc} alt={p.title} className="w-full" />
          <p className="globaltextcolortheme text-sm md:text-md font-medium mt-5">{p.desc}</p>
          <p className="text-md md:text-xl font-bold">{p.title}</p>
        </div>
      ))}

      </div>

    </section>
  );
}

export default Portfolio;