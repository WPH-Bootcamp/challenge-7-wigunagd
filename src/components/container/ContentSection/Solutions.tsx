type SolutionsType = {
  title: string;
  desc: string;
  imgsrc: string;
}

const solutionsList: SolutionsType[] = [
  {
    title: "Web Development",
    desc: "Build fast, scalable, and SEO-friendly websites.",
    imgsrc: "src/assets/images/solution-1-website.svg",
  }, {
    title: "Mobile App Development",
    desc: "Native & cross-platform apps tailored to user needs.",
    imgsrc: "src/assets/images/solution-2-mobile.svg",
  }, {
    title: "UI/UX Design",
    desc: "Delight users with intuitive and beautiful interfaces.",
    imgsrc: "src/assets/images/solution-3-uiuxdesign.svg",
  }, {
    title: "Cloud Solutions",
    desc: "Secure and flexible cloud infrastructure for your growth.",
    imgsrc: "src/assets/images/solution-4-cloud.svg",
  }, {
    title: "Software Development",
    desc: "Custom solutions built around your business logic.",
    imgsrc: "src/assets/images/solution-5-softwaredevelopment.svg",
  }, {
    title: "IT Infrastructure",
    desc: "Scale your backend with reliable tech foundations.",
    imgsrc: "src/assets/images/solution-6-idinfrastructure.svg",
  }, {
    title: "Cybersecurity Services",
    desc: "Stay protected with enterprise-grade security.",
    imgsrc: "src/assets/images/solution-7-cyberseurity.svg",
  }, {
    title: "QA Solutions",
    desc: "Ensure performance with rigorous testing frameworks.",
    imgsrc: "src/assets/images/solution-8-qa.svg",
  }, {
    title: "IT Consulting & Support",
    desc: "Make smarter tech decisions with expert guidance.",
    imgsrc: "src/assets/images/solution-9-itconsultant.svg",
  },
];

const Solutions = () => {
  return <section id="solutionsection" className="md:py-[80px] md:px-[80px] py-[40px] px-[16px]">
    <h2 className="text-center font-bold md:text-3xl text-2xl">
      Smart IT Solutions That Grow With You
    </h2>
    <p className="text-center text-gray-500 mx-2 md:text-lg text-sm font-medium">
      Tailored tech to boost efficiency, security, and results.
    </p>

    <div className="flex flex-wrap w-full my-20 justify-center">
      {solutionsList.map(
        (s) => (
          <div key={s.title} className="relative 
            w-full 
            md:w-sm 
            my-6 
            md:mx-7 
            border 
            rounded-xl 
            p-0.25 
            border-gray-300 
            dark:border-gray-800 
            bg-gray-100 
            dark:bg-gray-950
            hover:bg-gradient-to-br 
            hover:from-orange-300  
            hover:via-gray-700
            hover:to-gray-800">
            <div className="w-full rounded-xl p-5 bg-gray-50 dark:bg-gray-950 h-full">
              <img className="absolute left-3 -top-10 md:width-[80px] md:height-[80px] width-[64px] height-[64px]" src={s.imgsrc} alt={s.title} />
              <h3 className="text-md font-bold lg:text-xl m mt-6">{s.title}</h3>
              <p className="md:text-md text-sm mt-2 text-gray-500">{s.desc}</p>
            </div>
          </div>
        )
      )}
    </div>
    
  </section>;
}

export default Solutions