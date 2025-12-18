type CustomerLogoType = {
    id: string;
    logosrc: string;
}

const customerLogo : CustomerLogoType[] = [
    {
        id:'adobe',
        logosrc: 'src/assets/images/company-01-adobe.svg'
    },{
        id:'upwork',
        logosrc: 'src/assets/images/company-02-upwork.svg'
    },{
        id:'zoom',
        logosrc: 'src/assets/images/company-03-zoom.svg'
    },{
        id:'postman',
        logosrc: 'src/assets/images/company-04-postman.svg'
    },{
        id:'databricks',
        logosrc: 'src/assets/images/company-05-databricks.svg'
    },{
        id:'airbnb',
        logosrc: 'src/assets/images/company-06-airbnb.svg'
    },{
        id:'dropbox',
        logosrc: 'src/assets/images/company-07-dropbox.svg'
    },{
        id:'paypal',
        logosrc: 'src/assets/images/company-08-paypal.svg'
    },{
        id:'netflix',
        logosrc: 'src/assets/images/company-09-netflix.svg'
    }
];

const Customers = () => {
    return <section id="customersection" className="mb-20">
        <h2 className="text-center text-xl my-5 mx-2">
            Trusted by Global Innovators & Leading Brands
        </h2>

        <div className="customer-logo-marquee-container mask-[linear-gradient(to_right,transparent_0,black_400px,black_calc(100%-200px),transparent_100%)]">
            <div className="customer-logo-marquee-track grayscale">

                {customerLogo.map((social) => (
                    <img className="mx-5" src={social.logosrc} alt={social.id} />
                ))}

                {/* duplikat supaya scrolling terlihat infinite */}
                {customerLogo.map((social) => (
                    <img className="mx-5" src={social.logosrc} alt={social.id} />
                ))}
                
                {/* duplikat supaya scrolling terlihat infinite */}
                {customerLogo.map((social) => (
                    <img className="mx-5" src={social.logosrc} alt={social.id} />
                ))}

            </div>
        </div>
    </section>;
};

export default Customers;