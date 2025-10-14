import Footer from "../components/Footer";

export default function Activities() {
  return (
    <>
      <div className="min-h-[60vh] py-12 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#DB580F] mb-4">Activities of RPF</h1>
        <p className="text-gray-700 mb-4">
          Rajasthan Pravasi Foundation (RPF) is actively involved in various social, cultural, and community activities to connect and empower the Rajasthani diaspora worldwide.
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Community outreach programs</li>
          <li>Cultural festivals and events</li>
          <li>Support for Pravasi Rajasthani families</li>
          <li>Educational and youth initiatives</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}