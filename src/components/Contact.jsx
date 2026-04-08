import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "./ContactForm";
function Contact() {
  return (
    <div className="bg-[#0a0a0a] min-h-[70vh] flex flex-col lg:flex-row lg:justify-around gap-10 p-5">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 pl-8">
        <div className="flex items-center gap-2 pt-10">
          <div className="w-10 h-[2px] bg-red-500"></div>
          <h1 className="text-white text-2xl sm:text-3xl font-bold">
            Contact Us
          </h1>
        </div>

        <div className="text-white mt-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl leading-relaxed">
            Do you have questions about specific courses,
            <span className="text-red-500"> the center, or the team?</span>
          </h1>
        </div>

        <div className="flex flex-col gap-4 text-white text-lg sm:text-xl mt-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-red-500 rounded-full">
              <MdEmail />
            </div>
            <p className="break-all">gymironfury@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-red-500 rounded-full">
              <FaLocationDot />
            </div>
            <p>Bir El Djir, Oran, Algeria</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-red-500 rounded-full">
              <FaPhone />
            </div>
            <p>+213 789 31 35 91</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="w-full lg:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
}
export default Contact;
