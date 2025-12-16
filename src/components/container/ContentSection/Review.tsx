import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

interface ReviewCardProps {
    quote: string;
    name: string;
    title: string;
    customerImage: string; // Assuming this is a string path to the image
    stars?: number; // Optional, defaults to 5
}

const ReviewCard = ({
    quote,
    name,
    title,
    customerImage,
    stars = 5
}: ReviewCardProps) => {
    const starSVGs = Array(stars).fill(0).map((_, index) => (
        <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 fill-amber-300">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
    ));

    return (
        <div className="rounded-2xl bg-gradient-to-br from-orange-500 via-gray-700 to-gray-700 p-0.25 m-1">
            <div className="relative rounded-2xl grid content-center place-items-center bg-gray-50 dark:bg-gray-950 p-10 min-h-[350px]">
                <div className="flex space-x-0.5 mb-3 mx-auto">{starSVGs}</div>
                <p className="text-xl text-center px-5">
                    “{quote}”
                </p>
                <p className="text-xl mt-5">{name}</p>
                <p className="text-xl globaltextcolortheme mb-5">{title}</p>
                <img src="src/assets/images/quote-icon.svg" className="rounded-xl absolute -top-10 left-10" alt="quote" />
                <img src={customerImage} className="rounded-xl absolute -bottom-10" alt={`Review by ${name}`} />
            </div>
        </div>
    );
};

const reviewsData = [
    { id: 1, quote: "Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.", name: "John Lee", title: "Creative Director at Innovate Corp", image: "src/assets/images/customer-01.svg" },
    { id: 2, quote: "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.", name: "Sarah Tan", title: "Product Manager at Finovate", image: "src/assets/images/customer-02.svg" },
    { id: 3, quote: "The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.", name: "Emily Chen", title: "Marketing Head at Tech Solutions", image: "src/assets/images/customer-03.svg" },
];

const Review = () => {
    return (
        <section id="reviewsection" className="md:px-15 mb-20 px-2">
            <h2 className="text-center text-3xl mx-5 md:mx-20 2xl:mx-55">
                What Partners Say About Working With Us
            </h2>
            <p className="text-center text-gray-500 mx-5 md:mx-20 2xl:mx-55">
                Trusted voices. Real experiences. Proven results.
            </p>

            <div className="w-full relative md:[mask-image:_linear-gradient(to_right,transparent_0,_black_200px,_black_calc(100%-200px),transparent_100%)]">

                <Swiper

                    modules={[Pagination, Autoplay]}


                    centeredSlides={true}
                    loop={false}
                    speed={800}
                    spaceBetween={30}
                    slideToClickedSlide={true}

                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}

                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}

                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        990: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        1028: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                    }}

                    className="mt-10 pt-5 pb-10"
                >
                    {reviewsData.map(review => (
                        <SwiperSlide key={review.id} className="h-full mt-5">
                            <ReviewCard
                                quote={review.quote}
                                name={review.name}
                                title={review.title}
                                customerImage={review.image}
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    );
}

export default Review;