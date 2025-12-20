type ResultType = {
    result: string;
    resultdesc: string;
}

const itemReslts: ResultType[] = [
    {
        result: "50+",
        resultdesc: "Projects Delivered"
    }, {
        result: "5+",
        resultdesc: "Years of Experience"
    }, {
        result: "10+",
        resultdesc: "Industry Awards Won"
    }, {
        result: "100%",
        resultdesc: "Client Satisfaction Rate"
    },
];

const Results = () => {
    return <section id="resultsection" className="py-[80px] md:h-[598px] h-[688px]">
        <h2 className="text-center font-bold md:text-3xl text-2xl">
            End-to-End IT Solutions That Drive Results
        </h2>
        <p className="text-center text-gray-500 mx-2 md:text-lg text-sm font-medium">
            From strategy to execution, we deliver solutions that grow your business.
        </p>

        <div className="flex flex-wrap grid-cols-2 justify-center my-10">

            {itemReslts.map((r) => (

                <div className="border bg-gray-50 border-gray-300 dark:bg-gray-950 dark:border-gray-800 m-2 md:w-[275px] md:h-[275px] w-[172.5px] h-[172.5px] rounded-full grid content-center place-items-center">
                    <p className="text-3xl globaltextcolortheme">{r.result}</p>
                    <p className="md:text-xl text-sm">{r.resultdesc}</p>
                </div>

            ))}
            
        </div>

    </section>;
}

export default Results;