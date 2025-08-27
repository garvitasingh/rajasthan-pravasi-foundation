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
              className="bg-white shadow-md p-3 flex flex-col items-center"
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
        <div className="flex justify-center gap-6 mt-16">
          <GradientButton
            width="106px"
            height="68px"
            borderRadius="2px 30px 2px 30px"
          >
            <h4 style={{ lineHeight: 1, fontWeight: 600, fontSize: "20px" }}>
              BACK
            </h4> 
          </GradientButton>
              <div style={{ width: "20px" }} />
          <GradientButton width="200px" height="68px" borderRadius="40px">
            <h4 style={{ lineHeight: 1, fontWeight: 600, fontSize: "20px" }}>
              VIEW
            </h4>
          </GradientButton>
              <div style={{ width: "20px" }} />
          <GradientButton
            width="106px"
            height="68px"
            borderRadius="30px 2px 30px 2px"
          >
            <h4 style={{ lineHeight: 1, fontWeight: 600, fontSize: "20px" }}>
              NEXT
            </h4>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
