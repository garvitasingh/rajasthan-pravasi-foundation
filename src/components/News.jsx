import mandala from "../assets/mandala.png";
import buildingImg from "../assets/building.png";
import tree from "../assets/tree_bg.png";

export default function NewsSection() {
  return (
    <section className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Animated Glow Background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-ping"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold text-[#EF5C10] relative inline-block">
            News & Updates
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-[3px] bg-orange-500 rounded-full animate-pulse"></span>
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border hover:border-orange-400"
            >
              {/* Image */}
              <img
                src={buildingImg}
                alt="News"
                className="w-full h-[220px] object-cover rounded-t-2xl"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  RAJASTHAN HIGH COURT...
                </h3>
                <p className="text-xs text-gray-500 mt-1 tracking-wide">
                  12 JULY, 2025
                </p>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-4">
                  Color theory influences user emotions and brand perception.
                  Data visualization helps users understand complex information.
                  Design thinking fosters innovation through user-centered
                  problem solving.
                </p>

                {/* Tag */}
                <div className="mt-5">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition">
                    CRIME
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 mt-16">
          {/* Back Button */}
          {/* <button className="w-[106px] h-[68px] bg-gradient-to-r from-gray-100 to-gray-200 rounded-tl-sm rounded-tr-[30px] rounded-bl-sm rounded-br-[30px] flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition">
            <h4 className="font-semibold text-lg text-gray-700 leading-none">
              BACK
            </h4>
          </button> */}

          {/* View Button */}
          <button className="w-[175px] h-[68px] bg-gradient-to-r from-orange-500 to-orange-600 rounded-[40px] flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:scale-105 transition">
            <h4 className="font-semibold text-lg leading-none">VIEW</h4>
          </button>

          {/* Next Button */}
          {/* <button className="w-[106px] h-[68px] bg-gradient-to-r from-gray-100 to-gray-200 rounded-tl-[30px] rounded-tr-sm rounded-bl-[30px] rounded-br-sm flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition">
            <h4 className="font-semibold text-lg text-gray-700 leading-none">
              NEXT
            </h4>
          </button> */}
        </div>
      </div>
    </section>
  );
}
