const FormContact = () => {
    return <section id="formcontactsection" className="md:px-15 mb-20 px-2">
      <h2 className="text-center text-4xl mx-5 md:mx-20 2xl:mx-55">
        Ready to Start? Let’s Talk.
      </h2>
      <p className="text-center text-gray-500 mx-5 md:mx-20 2xl:mx-55">
        Tell us what you need, and we’ll get back to you soon.
      </p>

      <div className="flex flex-col w-full md:max-w-[600px] mx-auto my-5 px-2">
        <form id="messageform">
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="email" id="name" name="name" className="bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-800 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-500 dark:text-white focus:border-orange-600 outline-none focus:outline-orange-600" placeholder="Enter your name" />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" name="email" className="bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-800 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-500 dark:text-white focus:border-orange-600 outline-none focus:outline-orange-600" placeholder="Enter your email" />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
            <textarea id="message" name="message" rows={4} style={{ resize: "none" }} className="bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-gray-800 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-500 dark:text-white focus:border-orange-600 outline-none focus:outline-orange-600" placeholder="Enter your message"></textarea>
          </div>
          <div className="grid grid-col md:grid-flow-col md:grid-rows-3 overflow-y-auto mb-5">

            <div className="flex items-center my-2">
              <input type="checkbox" value="Web Development" id="web-development" className="appearance-none mychk w-4 h-4 border border-gray-600 rounded-sm 
                                    checked:bg-orange-500 checked:border-orange-500 
                                    checked:bg-center checked:bg-no-repeat checked:bg-contain mr-3" />
              <label htmlFor="web-development" className="text-gray-400 dark:text-gray-400 select-none text-sm">Web Development</label>
            </div>

            <div className="flex items-center my-2">
              <input type="checkbox" value="Mobile App Development" id="mobile-app-development" className="appearance-none mychk w-4 h-4 border border-gray-600 rounded-sm 
                                    checked:bg-orange-500 checked:border-orange-500 
                                    checked:bg-center checked:bg-no-repeat checked:bg-contain mr-3" />
              <label htmlFor="mobile-app-development" className="text-gray-400 dark:text-gray-400 select-none text-sm">Mobile App Development</label>
            </div>

            <div className="flex items-center my-2">
              <input type="checkbox" value="UI/UX Design" id="ui-ux-design" className="appearance-none mychk w-4 h-4 border border-gray-600 rounded-sm 
                                    checked:bg-orange-500 checked:border-orange-500 
                                    checked:bg-center checked:bg-no-repeat checked:bg-contain mr-3" />
              <label htmlFor="ui-ux-design" className="text-gray-400 dark:text-gray-400 select-none text-sm">UI/UX Design</label>
            </div>

            <div className="flex items-center my-2">
              <input type="checkbox" value="Cloud Solutions" id="cloud-solutions" className="appearance-none mychk w-4 h-4 border border-gray-600 rounded-sm 
                                    checked:bg-orange-500 checked:border-orange-500 
                                    checked:bg-center checked:bg-no-repeat checked:bg-contain mr-3" />
              <label htmlFor="cloud-solutions" className="text-gray-400 dark:text-gray-400 select-none text-sm">Cloud Solutions</label>
            </div>

            <div className="flex items-center my-2">
              <input type="checkbox" value="Software Development" id="software-development" className="appearance-none mychk w-4 h-4 border border-gray-600 rounded-sm 
                                    checked:bg-orange-500 checked:border-orange-500 
                                    checked:bg-center checked:bg-no-repeat checked:bg-contain mr-3" />
              <label htmlFor="software-development" className="text-gray-400 dark:text-gray-400 select-none text-sm">Software Development</label>
            </div>


            <div className="flex items-center my-2">
              <input type="checkbox" value="Other" id="other" className="appearance-none mychk w-4 h-4 border border-gray-600 rounded-sm 
                                    checked:bg-orange-500 checked:border-orange-500 
                                    checked:bg-center checked:bg-no-repeat checked:bg-contain mr-3" />
              <label htmlFor="other" className="text-gray-400 dark:text-gray-400 select-none text-sm">Other</label>
            </div>

          </div>

          <div className="flex rounded-3xl bg-gradient-to-br from-red-200 to-orange-600 p-0.5">
            <button type="submit" className="w-full text-center rounded-3xl p-2 text-white globalbackgroundtheme hover:bg-amber-300">Send</button>
          </div>
        </form>

      </div>


    </section>;
}

export default FormContact; 