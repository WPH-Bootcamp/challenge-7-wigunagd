const Results = () => {
    return <section id="resultsection" className="md:px-15 mb-20">
        <h2 className="text-center text-3xl my-5 mx-2">
            End-to-End IT Solutions That Drive Results
        </h2>
        <p className="text-center text-gray-500 mx-2">
            From strategy to execution, we deliver solutions that grow your business.
        </p>

        <div className="flex flex-wrap justify-center my-10">
            <div className="border bg-gray-50 border-gray-300 dark:bg-gray-950 dark:border-gray-800 m-2 w-55 h-55 rounded-full grid content-center place-items-center">
                <p className="text-3xl globaltextcolortheme">50+</p>
                <p>Projects Delivered</p>
            </div>
            <div className="border bg-gray-50 border-gray-300 dark:bg-gray-950 dark:border-gray-800 m-2 w-55 h-55 rounded-full grid content-center place-items-center">
                <p className="text-3xl globaltextcolortheme">5+</p>
                <p>Years of Experience</p>
            </div>
            <div className="border bg-gray-50 border-gray-300 dark:bg-gray-950 dark:border-gray-800 m-2 w-55 h-55 rounded-full grid content-center place-items-center">
                <p className="text-3xl globaltextcolortheme">10+</p>
                <p>Industry Awards Won</p>
            </div>
            <div className="border bg-gray-50 border-gray-300 dark:bg-gray-950 dark:border-gray-800 m-2 w-55 h-55 rounded-full grid content-center place-items-center">
                <p className="text-3xl globaltextcolortheme">100%</p>
                <p>Client Satisfaction Rate</p>
            </div>
        </div>

    </section>;
}

export default Results;