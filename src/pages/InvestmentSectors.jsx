import Footer from "../components/Footer";

export default function InvestmentSectors() {
  return (
    <>
      <div className="min-h-[60vh] py-12 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#DB580F] mb-4">
          Explore Investment Sectors in Rajasthan
        </h1>
        <p className="text-gray-700 mb-4">
          Rajasthan offers diverse investment opportunities across sectors like tourism, minerals, agriculture, textiles, IT, renewable energy, and more. Discover how you can be a part of Rajasthan's growth story!
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Tourism & Hospitality</li>
          <li>Minerals & Mining</li>
          <li>Agriculture & Food Processing</li>
          <li>Textiles & Handicrafts</li>
          <li>Information Technology</li>
          <li>Renewable Energy</li>
          <li>Automobile & Engineering</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}