import mandalaBg from "../assets/mandala.png";
import sampleImg from "../assets/building.png";

export default function FeaturedBusiness() {
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
        <section className="w-full py-16 md:py-24 relative overflow-hidden">
            <img
                src={mandalaBg}
                alt="mandala"
                className="absolute top-1/2 left-1/2 w-[980px] h-[980px] -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none"
            />

            {/* Gradient Background Wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                <h2
                    className="text-center mb-12 text-orange-500"
                    style={{
                        fontFamily: "Italianno, cursive",
                        fontWeight: 400,
                        fontSize: "60px",
                    }}
                >
                    Featured business
                </h2>

                {/* Business Cards */}
                <div
                    className="p-8"
                    style={{
                        background: "linear-gradient(90deg, #FFC92E 0%, #FF9AB1 35.54%, #F313F7 69.29%, #A328F9 100%)",
  borderTopLeftRadius: "50px",
                                    borderTopRightRadius: "2px",
                                    borderBottomRightRadius: "50px",
                                    borderBottomLeftRadius: "2px",                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {businesses.map((biz, i) => (
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
                                    src={biz.image}
                                    alt={biz.name}
                                    className="w-full h-[200px] object-cover rounded-t-[20px] rounded-tr-[2px]"
                                />

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900">{biz.name}</h3>
                                    <p className="text-gray-600 text-sm font-semibold">
                                        {biz.category}
                                    </p>
                                    <p className="text-gray-500 text-sm mt-2 line-clamp-3 leading-relaxed">
                                        {biz.description}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-4">
                                        <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                                            OPEN
                                        </button>
                                        <p className="text-gray-600 text-xs flex items-center">
                                            <span className="mr-1">📍</span> {biz.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-12">
                        <button className="bg-white text-black font-semibold px-6 py-2 rounded-[10px] shadow-md hover:shadow-lg"
                            style={{
        height: "58px",
                                borderRadius: "30px 2px 30px 2px",
                                boxShadow: "0px 0px 20px 10px rgba(249, 115, 22, 0.2)"
                            }}>
                            VIEW ALL BUSINESS
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 