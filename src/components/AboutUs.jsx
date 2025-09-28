import foun1 from "../assets/Frame 16.png"
import foun2 from "../assets/Frame 17.png"
import foun3 from "../assets/Frame 18.png"
import foun4 from "../assets/Frame 19.png"

const stats = [
  { value: "1,00,000+", label: "Pravasi Engaged Since 2015", color: "#EDA536" },
  { value: "9+ YEARS", label: "of Service in India", color: "#BA5C9E" },
  { value: "50+ Cities", label: "India & Dubai also", color: "#41C45C" },
  { value: "500+", label: "Active Whatsapp Group of Rajasthan Pravasi", color: "#06ACFF" },
  { value: "10,000+", label: "Volunteers", color: "#EA2774" },
];

const engagements = {
  images: [
    { 
      src: {foun: foun1},
      alt: "Connecting Rajasthanis",
      borderTopLeftRadius: "2px",
      borderTopRightRadius: "30px",
      borderBottomRightRadius: "2px",
      borderBottomLeftRadius: "30px",
    },
    { 
      src: {foun: foun2}, 
      alt: "Maati Ro Sandesh",
      borderTopLeftRadius: "30px",
      borderTopRightRadius: "2px",
      borderBottomRightRadius: "30px",
      borderBottomLeftRadius: "2px",
    },
    { 
      src: {foun: foun3}, 
      alt: "Digital Connect",
      borderTopLeftRadius: "30px",
      borderTopRightRadius: "2px",
      borderBottomRightRadius: "30px",
      borderBottomLeftRadius: "2px",
    },
    { 
      src: {foun: foun4},
      alt: "Cultural Programs",
      borderTopLeftRadius: "2px",
      borderTopRightRadius: "30px",
      borderBottomRightRadius: "2px",
      borderBottomLeftRadius: "30px",
    },
  ],
  contents: [
    {
      title: "Connecting Rajasthanis – Virtually and Beyond",
      description:
        "We engage with NRIs and Pravasi Rajasthani communities through virtual conferences, in-person meetings, and festival celebrations.",
    },
    {
      title: "Maati Ro Sandesh",
      description:
        "A collection of successful stories, documentaries, and achievements of Rajasthanis in all fields like business, sports, etc.",
    },
    {
      title: "Digital Connect for NRRs",
      description:
        "Through digital tools and monthly e-meets, we keep the global Pravasi Rajasthani community informed and united, sharing stories of progress and opportunities.",
    },
  ],
};

const AboutUs = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* About Us */}
      <section className="text-center max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
          About Us
        </h2>
        <p className="text-gray-800 leading-relaxed">
          Pravasi Rajasthan is a community-driven initiative aimed at helping
          Rajasthani families living across India. We understand the emotional
          and financial burden that comes with the loss of a loved one,
          especially when far from home. With a small monthly subscription, we
          ensure that your family receives financial support in case of an
          untimely passing.
        </p>
      </section>

      {/* Chapters Stats */}
      <section 
      className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl max-w-5xl mx-auto p-8 mb-12"
      style={{
        background: "linear-gradient(0.42deg, rgba(252, 238, 227, 0.1) 0.35%, rgba(230, 138, 87, 0.6) 50.94%, #DB580F 96.76%)"
      }}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">
          Rajasthan Pravasi Foundation Chapters
        </h3>
        <p className="text-center text-white/90 mb-8 max-w-3xl mx-auto">
          Rajasthan Pravasi Foundation Chapters serve as support centers for NRRs
          in key metro cities and regions in India and abroad. These chapters
          foster interaction with the Rajasthani diaspora and encourage their
          participation in Rajasthan’s socio-economic development.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
      {stats.map((item, index) => (
        <div
          key={index}
          className="rounded-lg p-4 h-[178px] flex flex-col items-center justify-center"
          style={{
            backgroundColor: item.color,  // ✅ Correct way
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "2px",
            borderBottomRightRadius: "30px",
            borderBottomLeftRadius: "2px",
            boxShadow: "4px 4px 30px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p className="text-2xl font-bold">{item.value}</p>
          <p className="text-sm">{item.label}</p>
        </div>
      ))}
    </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
      <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-10 text-center">
        Engagement With Diaspora
      </h3>

      <div className="grid grid-cols-[30%_70%] gap-8">
        {/* Left column: image grid */}
        <div className="grid grid-cols-2 gap-[2px]">
          {engagements.images.map((img, index) => (
            <>
            <img
              key={index}
              src={img.src.foun}
              alt={img.alt}
              className="h-40 object-cover rounded-xl"
              style={{
              borderTopLeftRadius: img.borderTopLeftRadius,
              borderTopRightRadius: img.borderTopRightRadius,
              borderBottomRightRadius: img.borderBottomRightRadius,
              borderBottomLeftRadius: img.borderBottomLeftRadius,
              // boxShadow: "4px 4px 30px 10px rgba(0, 0, 0, 0.1)",
          }}
            />
            </>
          ))}
        </div>

        {/* Right column: content only */}
        <div className="flex flex-col justify-center space-y-6">
          {engagements.contents.map((item, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-800 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;
