type ProcessType = {
  title: string;
  desc: string;
  lineColor: LineColorType;
}

const lineColors: string[] = [
  "bg-gradient-to-b from-transparent from-50% via-gray-300 to-gray-300 dark:via-gray-700 sparent dark:to-gray-700",
  "bg-gray-300 dark:bg-gray-700",
  "bg-gradient-to-b from-gray-300 via-gray-300 to-transparent to-50% dark:from-gray-700 dark:via-gray-700 dark:to-transparent"
] as const;

type LineColorType = (typeof lineColors)[number];

const processItems: ProcessType[] = [
  {
    title: 'Discovery & Consultation',
    desc: 'Understand Your Needs & Goals',
    lineColor: lineColors[0]
  },
  {
    title: 'Planning & Strategy',
    desc: 'Build a Clear, Scalable Roadmap',
    lineColor: lineColors[1]
  },
  {
    title: 'Design & Prototyping',
    desc: 'Craft UX That Converts',
    lineColor: lineColors[1]
  },
  {
    title: 'Development & Implementation',
    desc: 'Deliver With Speed & Precision',
    lineColor: lineColors[1]
  },
  {
    title: 'Testing & Optimization',
    desc: 'Ensure Quality at Every Step',
    lineColor: lineColors[1]
  },
  {
    title: 'Launch & Growth',
    desc: 'Scale, Measure & Improve Continuously',
    lineColor: lineColors[2]
  }
];

function leftitem(num: number, title: string, description: string, linecolor: string) {
  return (
    <div className="flex md:contents flex-row-reverse">
      <div className="relative p-4 my-6 border bg-gray-50 border-gray-300 dark:bg-gray-950 dark:border-gray-800 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto w-full">

        <h3 className="text-lg font-semibold lg:text-xl">{title}</h3>
        <p className="mt-2 text-gray-500">{description}</p>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 absolute top-2 right-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>

      </div>
      <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
        <div className="flex items-center justify-center w-6 h-full">
          <div className={`w-0.5 h-full ${linecolor}`}></div>
        </div>
        <div className="absolute w-10 h-10 -mt-3 -ml-2 grid content-center place-items-center text-white globalbackgroundtheme rounded-full top-1/2">{num}</div>
      </div>
    </div>
  );
}

function rightitem(num: number, title: string, description: string, linecolor: string) {
  return (
    <div className="flex md:contents">
      <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
        <div className="flex items-center justify-center w-6 h-full">
          <div className={`w-0.5 h-full ${linecolor}`}></div>
        </div>
        <div className="absolute w-10 h-10 -mt-5 -ml-2 grid content-center place-items-center text-white globalbackgroundtheme rounded-full top-1/2">{num}</div>
      </div>
      <div className="relative p-4 my-6 border bg-gray-50 border-gray-300 dark:bg-gray-950 dark:border-gray-800 rounded-xl col-start-6 col-end-10 mr-auto w-full">

        <h3 className="text-lg font-semibold lg:text-xl">{title}</h3>
        <p className="mt-2 text-gray-500">{description}</p>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 absolute top-2 right-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>

      </div>
    </div>
  );
}

const Process = () => {
  return <section id="processsection" className="2xl:px-45 xl:px-5 md:px-15 mb-20">
    <h2 className="text-center text-3xl my-5 mx-5">
      Our Process
    </h2>
    <p className="text-center text-gray-500 mx-2">
      Clear steps. Smart execution. Results you can count on.
    </p>

    <div className="p-4 mx-2">

      <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        {
          processItems.map(
            (p, i) => {
              const itemNum = i + 1;
              const isOdd = itemNum % 2 !== 0;

              return isOdd
                ? leftitem(itemNum, p.title, p.desc, p.lineColor)
                : rightitem(itemNum, p.title, p.desc, p.lineColor)
            }
          )
        }
      </div>

    </div>

  </section>;
}

export default Process;