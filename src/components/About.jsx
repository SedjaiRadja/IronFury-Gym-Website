import photo from "../assets/about-gym.jpg";
function About() {
  return (
    <div className="min-h-[80vh] sm:h-150 md:h-180 lg:h-200 xl:h-220 2xl:h-100 bg-[#0a0a0a] flex flex-col sm:flex-row items-start gap-0 p-5">
      <div className="flex-1 mt-5 mx-auto max-w-md sm:max-w-xl lg:ml-20">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-[2px] bg-red-500 mt-0"></div>
          <h3 className="text-white text-xl sm:text-3xl font-bold mt-0">
            About Us
          </h3>
        </div>

        <h1 className="text-white tracking-wide text-sm sm:text-6xl mb-1">
          We Help To Achieve
        </h1>
        <h1 className="text-red-500 mb-3 text-sm sm:text-6xl">
          Your Fitness Goals
        </h1>
        <p className="text-gray-300 tracking-wide text-sm sm:text-3xl">
          At <span className="text-red-500">IronFury Gym</span>, we don't just
          train bodies — we build strength, discipline, and confidence. Our
          mission is to help you push beyond your limits and become the
          strongest version of yourself. Whether you're a beginner or an
          experienced athlete, we provide the environment, equipment, and
          motivation you need to achieve real results. Join IronFury and turn
          your goals into power.
        </p>
        <ul className="text-gray-300 space-y-1 mt-5 text-sm sm:text-xl">
          <li className="flex items-center gap-2">
            <span className="text-red-500">✔</span> Top-quality gym equipment
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-500">✔</span> Certified professional
            coaches
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-500">✔</span> Outstanding training quality
          </li>
        </ul>
      </div>

      <div className="flex-1 mt-5 sm:mt-10 sm:flex sm:justify-end sm:mr-6 lg:mt-40 lg:mr-27">
        <img
          src={photo}
          className="w-full max-w-md sm:w-auto h-auto object-cover ml-auto sm:mx-0 lg:max-w-lg transition duration-300 hover:shadow-[0_0_50px_#f87171] rounded-xl"
        />
      </div>
    </div>
  );
}
export default About;
