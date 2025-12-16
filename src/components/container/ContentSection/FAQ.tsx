const FAQ = () => {
    const toggleAccordion = (id: number) => {
        const content = document.getElementById(`content-${id}`);
        const icon = document.getElementById(`icon-${id}`);
        if (content && icon) {
            content.classList.toggle('max-h-0');
            content.classList.toggle('max-h-screen');
            icon.classList.toggle('rotate-180');
        }
    };

    return (
        <section id="faqsection" className="mb-20">

            <div className="grid my-5 pb-5 mx-5 md:mx-20 2xl:mx-55 md:flex-row border-b border-gray-200 dark:border-gray-800">
                <div className="basis-full md:basis-2/3 flex">
                    <h2 className="text-3xl md:w-60 py-2 md:py-5">
                        Need Help? Start Here.
                    </h2>
                </div>
                <div className="basis-full md:basis-1/3 py-2 md:py-5 align-bottom flex flex-col md:justify-center md:items-end">
                    <p className="text-gray-500 p-0 text-sm md:text-right md:w-50">Everything you need to know — all in one place.</p>
                </div>
            </div>

            <div className="flex flex-col my-5 pb-5 mx-5 md:mx-20 2xl:mx-55 md:flex-row">

                <div className="basis-full md:basis-2/3 flex flex-col">

                    {/* accordion menu */}

                    <div className="border-b border-gray-200 dark:border-gray-800">
                        <button onClick={() => toggleAccordion(1)} className="w-full flex justify-between items-center py-5">
                            <span className="font-bold">What services do you offer?</span>
                            <span id="icon-1" className=" transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                            </span>
                        </button>
                        <div id="content-1" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                            <div className="pb-5 text-sm text-gray-500">
                                We provide custom web/app development, cloud solutions, UX/UI design, and more.
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-200 dark:border-gray-800">
                        <button onClick={() => toggleAccordion(2)} className="w-full flex justify-between items-center py-5">
                            <span className="font-bold">How do I know if this is right for my business?</span>
                            <span id="icon-2" className=" transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                            </span>
                        </button>
                        <div id="content-2" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                            <div className="pb-5 text-sm text-gray-500">
                                Book a free consult — we’ll assess your goals and recommend the right approach.
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-200 dark:border-gray-800">
                        <button onClick={() => toggleAccordion(3)} className="w-full flex justify-between items-center py-5">
                            <span className="font-bold">How much does a project cost?</span>
                            <span id="icon-3" className=" transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                            </span>
                        </button>
                        <div id="content-3" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                            <div className="pb-5 text-sm text-gray-500">
                                Every project is different. Let’s talk about your needs to get a tailored estimate.
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-200 dark:border-gray-800">
                        <button onClick={() => toggleAccordion(4)} className="w-full flex justify-between items-center py-5">
                            <span className="font-bold">How long does it take?</span>
                            <span id="icon-4" className=" transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                            </span>
                        </button>
                        <div id="content-4" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                            <div className="pb-5 text-sm text-gray-500">
                                Depends on scope — but we always prioritize quality and deadlines.
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-200 dark:border-gray-800">
                        <button onClick={() => toggleAccordion(5)} className="w-full flex justify-between items-center py-5">
                            <span className="font-bold">Can I start with a small project first?</span>
                            <span id="icon-5" className=" transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                </svg>
                            </span>
                        </button>
                        <div id="content-5" className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                            <div className="pb-5 text-sm text-gray-500">
                                Absolutely. We often begin with MVPs or pilot projects.
                            </div>
                        </div>
                    </div>

                    {/* accordion menu */}

                </div>

                <div className="basis-full md:basis-1/3 grid relative">
                    <div className="globalbackgroundtheme md:ml-5 rounded-2xl p-5 mt-2 md:max-w-[250px] md:absolute md:right-1">
                        <h3 className="text-3xl text-white">Let’s talk it through</h3>
                        <p className="text-white">book a free consultation with our team.</p>
                        <img src="src/assets/images/consultation-image.svg" className="my-4 w-full" alt="consultation-image" />
                        <div className="flex rounded-3xl bg-gradient-to-br from-white to-black dark:bg-gradient-to-br dark:from-white dark:to-white p-0.25">
                            <a href="#" className="w-full text-center rounded-3xl p-2 bg-black text-white dark:bg-white dark:text-black">Free Consultation</a>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default FAQ;