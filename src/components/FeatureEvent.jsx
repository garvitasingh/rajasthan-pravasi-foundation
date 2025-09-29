import mandalaBg from "../assets/mandala.png";
import sampleImg from "../assets/Frame 20.png";

export default function FeaturedEvent() {
  const businesses = [
    {
      name: "SHRI RIDDHI PROPERTIES",
      category: "REAL ESTATE AGENTS",
      description:
        "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
      location: "Gurgaon, Haryana",
      image: sampleImg,
    },
    {
      name: "SHRI RIDDHI PROPERTIES",
      category: "REAL ESTATE AGENTS",
      description:
        "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
      location: "Gurgaon, Haryana",
      image: sampleImg,
    },
    {
      name: "SHRI RIDDHI PROPERTIES",
      category: "REAL ESTATE AGENTS",
      description:
        "Color theory influences user emotions and brand perception. Data visualization helps users understand complex information. Design thinking fosters innovation through",
      location: "Gurgaon, Haryana",
      image: sampleImg,
    },
  ];

  return (
    <section className="w-full relative overflow-hidden">
      {/* Gradient Background Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <h2
          className="text-center mb-12 text-[#EF5C10] sm:text-2xl text-bold md:text-4xl"
        >
          Featured Events
        </h2>

        {/* Business Cards */}
        <div
          className="p-8"
          style={{
            background:
              "linear-gradient(0.42deg, rgba(252, 238, 227, 0.1) 0.35%, rgba(230, 138, 87, 0.6) 50.94%, #DB580F 96.76%)",
            borderTopLeftRadius: "50px",
            borderTopRightRadius: "50px",
            // borderBottomRightRadius: "50px",
            // borderBottomLeftRadius: "2px",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {businesses.map((biz, i) => (
              <div
                key={i}
                className="bg-white md:w-[345px] h-[440px] shadow-md p-3 flex flex-col items-center"
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
                  src={biz.image}
                  alt={biz.name}
                  className="w-full h-[200px] object-cover rounded-t-[20px] rounded-tr-[2px]"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {biz.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-semibold">
                    {biz.category}
                  </p>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-3 leading-relaxed">
                    {biz.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-4">
                    <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      READ
                    </button>
                    <p className="text-gray-800 text-xs flex items-center font-bold">
                      <span className="mr-1">📍</span> {biz.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button
              className="bg-[#EF5A0F] text-white font-semibold px-6 py-2 rounded-[30px] shadow-md hover:shadow-lg"
              style={{
                height: "58px",
                // borderRadius: "30px 2px 30px 2px",
                // boxShadow: "0px 0px 20px 10px rgba(249, 115, 22, 0.2)",
              }}
            >
              VIEW ALL ARTICLES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
