import { photos } from "../../data/gymPhotos.js";
import About from "../../components/About.jsx";

function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] text-white p-5">
      <About />

      <div className="min-h-screen px-4 py-10">
        {/* Title */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-[2px] bg-red-500"></div>
          <h3 className="text-xl sm:text-3xl font-bold">Our Album</h3>
        </div>

        {/* Photos */}
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6
        "
        >
          {photos.map((icon, index) => {
            return (
              <div key={index} className="flex justify-center">
                <img
                  src={icon.photo}
                  className="
                  mt-15
                    w-full 
                    max-w-md 
                    h-80 
                    sm:h-72 
                    lg:h-64
                    object-cover 
                    rounded-2xl
                    hover:scale-105
                    hover:shadow-[0_0_20px_#f87171]
                    transition duration-300
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
