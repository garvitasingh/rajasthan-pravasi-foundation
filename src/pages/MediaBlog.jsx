// import React, { useEffect, useState } from "react";
// import mandalaBg from "../assets/mandala.png";
// import sampleImg1 from "../assets/Frame 21.png";
// import sampleImg2 from "../assets/Frame 22.png";
// import sampleImg3 from "../assets/Frame 23.png";
// import { getBlogs } from "../api/blogApi";

// const IMAGE_BASE_URL = "http://31.97.231.85:2700";

// export default function MediaBlog() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const result = await getBlogs();
//         if (result.success && Array.isArray(result.data)) {
//           setBlogs(result.data);
//         } else {
//           setBlogs([]);
//         }
//       } catch (err) {
//         setError("Failed to load blogs. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   return (
//     <section className="w-full relative overflow-hidden">
//       {/* Gradient Background Wrapper */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
//         <h2 className="text-center sm:text-2xl md:text-3xl font-bold text-[#EF5C10] mb-12">
//           Media & Blogs
//         </h2>

//         {/* Blog Cards */}
//         <div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {loading ? (
//               <div className="col-span-full text-center text-gray-700 py-8">
//                 Loading blogs...
//               </div>
//             ) : error ? (
//               <div className="col-span-full text-center text-red-500 py-8">
//                 {error}
//               </div>
//             ) : blogs.length === 0 ? (
//               <div className="col-span-full text-center text-gray-700 py-8">
//                 No blogs available.
//               </div>
//             ) : (
//               blogs.map((blog, i) => (
//                 <div
//                   key={blog._id || i}
//                   className="bg-[#F7E9DE] md:w-[345px] h-[420px] shadow-md p-3 flex flex-col items-center"
//                   style={{
//                     borderTopLeftRadius: "30px",
//                     borderTopRightRadius: "2px",
//                     borderBottomRightRadius: "30px",
//                     borderBottomLeftRadius: "2px",
//                     boxShadow: "4px 4px 30px 10px rgba(0, 0, 0, 0.1)",
//                   }}
//                 >
//                   {/* Image */}
//                   <img
//                     src={
//                       blog.image?.startsWith("http")
//                         ? blog.image
//                         : blog.image
//                         ? `${IMAGE_BASE_URL}${blog.image}`
//                         : sampleImg1
//                     }
//                     alt={blog.title}
//                     className="w-full h-[200px] object-cover rounded-t-[20px] rounded-tr-[2px]"
//                   />

//                   {/* Content */}
//                   <div className="p-6">
//                     <h3 className="text-lg font-bold text-gray-900">
//                       {blog.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm font-semibold">
//                       {blog.subtitle}
//                     </p>
//                     <p className="text-gray-500 text-sm mt-2 line-clamp-3 leading-relaxed">
//                       {blog.about}
//                     </p>

//                     {/* Footer */}
//                     <div className="flex items-center justify-between mt-4">
//                       <button className="bg-[#EF5C10] text-white text-sm font-semibold px-4 py-1 rounded-full">
//                         READ
//                       </button>
//                       {/* <p className="text-gray-600 text-xs flex items-center">
//                         <span className="mr-1">📍</span> {blog.location}
//                       </p> */}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//           <div className="flex justify-center mt-12">
//             <button
//               className="bg-[#EF5A0F] text-white font-semibold px-6 py-2 rounded-[30px] shadow-md hover:shadow-lg"
//               style={{
//                 height: "58px",
//               }}
//             >
//               VIEW ALL
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import mandalaBg from "../assets/mandala.png";
import sampleImg1 from "../assets/Frame 21.png";
import { getBlogs } from "../api/blogApi";
import Loader from "../common/Loader"; 

const IMAGE_BASE_URL = "http://31.97.231.85:2700";

export default function MediaBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await getBlogs();
        if (result.success && Array.isArray(result.data)) {
          setBlogs(result.data);
        } else {
          setBlogs([]);
        }
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="w-full relative overflow-hidden">
      {/* Mandala Background - soft centered */}
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.img
          src={mandalaBg}
          alt="mandala"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-[700px] h-[700px] opacity-[0.07] blur-[1px]"
        />
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-12"
        >
          Media & Blogs
        </motion.h2>

        {/* Blog Grid */}
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {error ? (
              <div className="col-span-full text-center text-red-500 py-8">
                {error}
              </div>
            ) : blogs.length === 0 ? (
              <div className="col-span-full text-center text-gray-700 py-8">
                No blogs available.
              </div>
            ) : (
              blogs.map((blog, i) => (
                <motion.div
                  key={blog._id || i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    boxShadow: "0 10px 25px rgba(239,92,16,0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-white/80 backdrop-blur-sm border border-orange-100 shadow-lg rounded-[2px_30px_2px_30px] overflow-hidden transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={
                        blog.image?.startsWith("http")
                          ? blog.image
                          : blog.image
                          ? `${IMAGE_BASE_URL}${blog.image}`
                          : sampleImg1
                      }
                      alt={blog.title}
                      className="w-full h-[220px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Text */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-semibold">
                      {blog.subtitle}
                    </p>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-3 leading-relaxed">
                      {blog.about}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-5">
                      <motion.button
                        whileHover={{
                          scale: 1.08,
                          background:
                            "linear-gradient(to right, #EF5A0F, #FF7E5F)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#EF5A0F] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md transition-all"
                      >
                        READ
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mt-14"
        >
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(239,90,15,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative w-[165px] h-[58px] rounded-[8px_30px_8px_30px] bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold text-lg shadow-md overflow-hidden"
          >
            <span className="relative z-10">VIEW ALL</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
