function ContactForm() {
  return (
    <div className="bg-[#0a0a0a] text-white p-10 flex justify-center">
      <form className="bg-[#0a0a0a] p-6 rounded-xl w-full max-w-lg flex flex-col gap-4">
        {/* First + Last Name */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 p-3 rounded-lg bg-transparent border border-gray-600 
                       focus:outline-none focus:border-white 
                       transition duration-300 hover:scale-105"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-3 rounded-lg bg-transparent border border-gray-600 
                       focus:outline-none focus:border-white 
                       transition duration-300 hover:scale-105"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg bg-transparent border border-gray-600 
                     focus:outline-none focus:border-white 
                     transition duration-300 hover:scale-105"
        />

        {/* Message */}
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-lg bg-transparent border border-gray-600 
                     focus:outline-none focus:border-white 
                     transition duration-300 hover:scale-105"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="bg-white text-black py-3 rounded-lg font-semibold 
                     hover:bg-gray-200 hover:scale-105 
                     transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
