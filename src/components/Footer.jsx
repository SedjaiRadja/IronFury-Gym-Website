function Footer() {
  return (
    <>
      <div className="w-full h-[2px] bg-red-500"></div>
      <div className="p-5 bg-[#0a0a0a] flex flex-col md:flex-row justify-around gap-10 pt-10 pb-10 ">
        <div>
          <h1 className="sm:text-5xl mb-5 text-white text-2xl">Contact</h1>
          <h3 className="sm:text-2xl text-gray-400 text-xl">
            Bir El Djir,Oran ,Algeria
          </h3>
          <h4 className="sm:text-2xl text-gray-400 text-xl">
            +213.789.31.35.91
          </h4>
          <h4 className="sm:text-2xl text-gray-400 text-xl">
            gymironfury@gmail.com
          </h4>
        </div>
        <div>
          <h1 className="sm:text-5xl mb-5 text-white text-2xl">
            Work Schedule
          </h1>
          <h3 className="sm:text-2xl text-gray-400 text-xl">
            Saturday - Thursday 06:00 - 01:00
          </h3>
          <h3 className="sm:text-2xl text-gray-400 text-xl">
            Thursday 06:00 - 01:00
          </h3>
          <h3 className="sm:text-2xl text-gray-400 text-xl">
            Friday 06:00 - 12:00 / 14:00 - 01:00
          </h3>
        </div>
      </div>
      <div>
        <div className="w-full h-[2px] bg-red-500"></div>
        <div className="text-center text-2xl pt-4 pb-2 bg-[#0a0a0a] text-gray-400 text-sm">
          © 2026 Iron Fury Gym. All rights reserved.
        </div>
      </div>
    </>
  );
}
export default Footer;
