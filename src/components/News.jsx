import mandala from "../assets/mandala.png";
import buildingImg from "../assets/building.png";
import tree from "../assets/tree_bg.png"; // Import the missing tree image
import GradientButton from "./GradientButton";

export default function NewsSection() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Mandala Background */}
      <img
        src={mandala}
        alt="mandala"
        className="absolute top-1/2 left-1/2 w-[980px] h-[980px] -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center justify-between relative mb-12">
          {/* Left Tree */}
          <img
            src={tree}
            alt="Left Tree"
            className="hidden md:block w-[140px] md:w-[160px] lg:w-[180px] object-contain"
          />
          <h2
            className="text-center text-orange-500"
            style={{
              fontFamily: "Italianno, cursive",
              fontWeight: 400,
              fontSize: "60px",
            }}
          >
            News & Updates
          </h2>
          {/* Right Tree */}
          <img
            src={tree}
            alt="Right Tree"
            className="hidden md:block w-[140px] md:w-[160px] lg:w-[180px] object-contain"
          />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-[#FCEEE3] shadow-md p-3 flex flex-col items-center"
              style={{
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "2px",
                borderBottomRightRadius: "30px",
                borderBottomLeftRadius: "2px",
                boxShadow: "4px 4px 30px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Image */}
              <img
                src={buildingImg}
                alt="News"
                className="w-full h-[220px] object-cover rounded-t-[20px] rounded-tr-[2px]"
              />

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  RAJASTHAN HIGH COURT...
                </h3>
                <p className="text-sm text-gray-500 mt-1">12 JULY, 2025</p>

                <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                  Color theory influences user emotions and brand perception.
                  Data visualization helps users understand complex information.
                  Design thinking fosters innovation through user-centered
                  problem solving.
                </p>

                {/* Tag */}
                <div className="mt-5">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-6 py-3 rounded-full shadow-md">
                    CRIME
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-center items-center gap-6 mt-16">
  {/* Back Button */}
  <button
    className="w-[106px] h-[68px] bg-gray-200 rounded-tl-sm rounded-tr-[30px] rounded-bl-sm rounded-br-[30px] flex items-center justify-center"
  >
    <h4 className="font-semibold text-lg leading-none">BACK</h4>
  </button>

  {/* View Button */}
  <button
    className="w-[175px] h-[68px] bg-[#EF5C10] rounded-[40px] flex items-center justify-center text-white"
  >
    <h4 className="font-semibold text-lg leading-none">VIEW</h4>
  </button>

  {/* Next Button */}
  <button
    className="w-[106px] h-[68px] bg-gray-200 rounded-tl-[30px] rounded-tr-sm rounded-bl-[30px] rounded-br-sm flex items-center justify-center"
  >
    <h4 className="font-semibold text-lg leading-none">NEXT</h4>
  </button>
</div>

      </div>
    </section>
  );
}
