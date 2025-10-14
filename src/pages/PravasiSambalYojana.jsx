 
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import logo from "../assets/logo2.png";
import topImage from "../assets/sambal_image_1.jpg"; 
import bottomImage from "../assets/sambal_image_2.jpg"; 

export default function PravasiSambalYojanaModern() {
	return (
		<>
			<main className="bg-[#FFF8F3]  text-gray-800 w-full overflow-hidden ">
			 
				<section className="relative w-full h-[60vh] md:h-[70vh]">
					<img
						src={topImage}
						alt="Rajasthan Pravasi Foundation"
						className="absolute inset-0 w-full h-full object-cover object-center"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#FFF8F3]" />
				</section>

				{/* ---------- Main Card ---------- */}
				<motion.section
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="max-w-4xl mx-auto -mt-32 bg-white rounded-3xl shadow-lg p-6 sm:p-10 relative z-10 border border-[#f2d4c4]"
				>
					{/* Logo + Title */}
					<div className="flex flex-col items-center mb-6">
						<img src={logo} alt="Logo" className="h-14 mb-3" />
						<h1 className="text-3xl sm:text-4xl font-bold text-[#1A365D] text-center leading-tight">
							प्रवासी संबल योजना
						</h1>
						<h2 className="text-lg sm:text-xl font-semibold text-[#DB2777] mt-1 text-center">
							(RAJASTHAN PRAVASI SAMBAL YOJANA)
						</h2>
					</div>

					{/* Description */}
					<div className="text-center space-y-2 text-[15px] sm:text-base leading-relaxed">
						<p>
							<span className="font-bold text-[#DB580F]">उद्देश्य:</span> हादसे और संकट
							की घड़ी में किसी अनहोनी पर प्रवासी राजस्थानियों को सहायता देना, उनके
							परिवार को आर्थिक एवं व्यवस्थागत सहायता प्रदान करना।
						</p>
						<p>
							<span className="font-bold text-[#DB580F]">
								योजना के अंतर्गत मिलने वाली सहायता:
							</span>{" "}
							किसी प्रवासी सदस्य की असामयिक मृत्यु पर परिवार को राहत एवं पुनर्वास सेवा
							के माध्यम से आर्थिक एवं व्यवस्थागत सहायता प्रदान की जाएगी। <br />
							ऐसे संकट में परिवार को प्रशासनिक या कानूनी सहयोग न हो तो उसमें भी मदद
							दी जाएगी।
						</p>
						<p className="text-[#DB2777] font-semibold mt-2">
							www.rajasthanpravasi.in
						</p>
					</div>

					{/* Divider */}
					<div className="my-6 border-t border-[#f3d9c8]" />

					{/* Eligibility Section */}
					<div className="space-y-5 text-[15px] sm:text-base">
						<div>
							<h3 className="font-bold text-[#DB580F] text-lg mb-1">
								पात्रता (ELIGIBILITY):
							</h3>
							<ol className="list-decimal ml-5 space-y-1">
								<li>राजस्थान का मूल निवासी होना आवश्यक है।</li>
								<li>कम से कम एक वर्ष से राज्य के बाहर प्रवासरत होना चाहिए।</li>
								<li>
									राजस्थान प्रवासी फाउंडेशन का सक्रिय सदस्य होना (सदस्यता शुल्क ₹500
									वार्षिक)।
								</li>
							</ol>
						</div>

						<div>
							<h3 className="font-bold text-[#DB580F] text-lg mb-1">
								अपात्रता (EXCLUSION):
							</h3>
							<p className="ml-5">
								आत्महत्या की स्थिति में योजना के अंतर्गत किसी भी प्रकार की सहायता नहीं
								दी जाएगी।
							</p>
						</div>

						<div>
							<h3 className="font-bold text-[#DB580F] text-lg mb-1">
								आवश्यक दस्तावेज़ (DOCUMENTS REQUIRED):
							</h3>
							<ol className="list-decimal ml-5 space-y-1">
								<li>
									मृत्यु से संबंधित अस्पताल/चिकित्सक से जुड़े दस्तावेज़ (मृत्यु प्रमाण
									पत्र, रिपोर्ट आदि)।
								</li>
								<li>पहचान प्रमाण (जैसे – आधार कार्ड)।</li>
								<li>राजस्थान प्रवासी फाउंडेशन की सदस्यता प्रमाण पत्र।</li>
							</ol>
						</div>

						<div>
							<h3 className="font-bold text-[#DB580F] text-lg mb-1">
								योजना का लाभ कैसे लें:
							</h3>
							<ol className="list-decimal ml-5 space-y-1">
								<li>
									मृत्यु की स्थिति में निकटतम समन्वय केंद्र / फाउंडेशन या हेल्पलाइन पर
									सूचित करें।
								</li>
								<li>
									दस्तावेज़ जमा करने के बाद पुनर्वास सेवा एवं संबंधित सहायता प्रदान की
									जाएगी।
								</li>
							</ol>
						</div>

						<div>
							<h3 className="font-bold text-[#DB580F] text-lg mb-1">
								विशेष टिप्पणी:
							</h3>
							<p className="ml-5">
								यह योजना “राजस्थान प्रवासी फाउंडेशन” द्वारा संचालित एक मानवीय पहल है,
								जो देश और विदेशों में बसे राजस्थानियों के साथ भावनात्मक जुड़ाव बनाए
								रखने का प्रयास करती है।
							</p>
						</div>
					</div>

				</motion.section>
                	<section className="relative w-full h-[60vh] md:h-[70vh]">
					<img
						src={bottomImage}
						alt="Rajasthan Pravasi Foundation"
						className="absolute inset-0 w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-[#FFF8F3]" />
				</section>

			 
			 
			</main>

			<Footer />
		</>
	);
}
