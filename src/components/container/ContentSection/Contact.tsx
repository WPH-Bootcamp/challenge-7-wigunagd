import FormContact from "../../ui/Input/FormContact";

const Contact = () => {
  return <section id="formcontactsection" className="md:px-15 mb-20 px-2">
    <h2 className="text-center font-bold md:text-3xl text-2xl">
      Ready to Start? Let’s Talk.
    </h2>
    <p className="text-center text-gray-500 mx-2 md:text-lg text-sm font-medium">
      Tell us what you need, and we’ll get back to you soon.
    </p>

    <div className="flex flex-col w-full md:max-w-[720px] mx-auto my-5 px-2">
      <FormContact />
    </div>
    
  </section>;
}

export default Contact; 