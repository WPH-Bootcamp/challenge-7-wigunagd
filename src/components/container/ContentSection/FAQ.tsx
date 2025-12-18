type AccordionType = {
    title: string;
    desc: string;
}

const accordionList: AccordionType[] = [
    {
        title: "What services do you offer?",
        desc: "We provide custom web/app development, cloud solutions, UX/UI design, and more."
    }, {
        title: "How do I know if this is right for my business?",
        desc: "Book a free consult — we'll assess your goals and recommend the right approach."
    }, {
        title: "How much does a project cost?",
        desc: "Every project is different. Let's talk about your needs to get a tailored estimate."
    }, {
        title: "How long does it take?",
        desc: "Depends on scope — but we always prioritize quality and deadlines."
    }, {
        title: "Can I start with a small project first?",
        desc: "Absolutely. We often begin with MVPs or pilot projects."
    }
];

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

                    {accordionList.map((a, i) => (
                        <div className="border-b border-gray-200 dark:border-gray-800">
                            <button onClick={() => toggleAccordion(i + 1)} className="w-full flex justify-between items-center py-5">
                                <span className="font-bold text-left">{a.title}</span>
                                <span id={`icon-${(i + 1)}`} className="transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                    </svg>
                                </span>
                            </button>
                            <div id={`content-${(i + 1)}`} className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                                <div className="pb-5 text-sm text-gray-500">
                                    {a.desc}
                                </div>
                            </div>
                        </div>
                    ))}

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