import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import blogData from "/blogsData.json";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentLang = i18n.language;
    const currentBlogs = blogData[currentLang] || [];
    setBlogs(currentBlogs);
    setLoading(false);
  }, [i18n.language]);

  return (
    <section className="flex flex-col gap-10 justify-center w-full items-center p-5 md:p-6 lg:p-10 bg-amber-200">
      <div>
        <div className="flex gap-5 sticky top-0 right-0">
          <button
            onClick={() => changeLanguage("en")}
            className="cursor-pointer hover:bg-red-600 transition-all duration-300 ease-linear hover:text-white uppercase border rounded text-gray-500 shadow-lg border-white bg-white px-4 py-3"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("tm")}
            className="cursor-pointer hover:bg-red-600 transition-all duration-300 ease-linear hover:text-white uppercase border rounded text-gray-500 shadow-lg border-white bg-white px-4 py-3"
          >
            தமிழ்
          </button>
          <button
            onClick={() => changeLanguage("ar")}
            className="cursor-pointer hover:bg-red-600 transition-all duration-300 ease-linear hover:text-white uppercase border rounded text-gray-500 shadow-lg border-white bg-white px-4 py-3"
          >
            العربية
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8">
        {loading ? (
          <h1>Loading...</h1>
        ) : blogs.length > 0 ? (
          blogs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 group h-auto p-4 mb-4 rounded shadow text-red-600"
            >
              <div className="h-[200px]">
                <img
                  src={item.image}
                  alt="img"
                  className="w-full h-full transition-all duration-300 ease-linear group-hover:scale-105 object-cover"
                />
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-700 mt-2">{item.sub_title}</p>
                <div className="flex justify-between mt-5 items-center">
                  <Link
                    to={`/blogs/${item.id}`}
                    className="px-4 rounded hover:bg-green-600 hover:text-white transition-all duration-300 ease-linear py-2 uppercase text-sm text-green-600 border border-green-600"
                  >
                    {item.btn_text}
                  </Link>

                  <h4 className="text-lg font-semibold text-green-600">
                    - {item.author}
                  </h4>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-xl font-semibold text-center">No blogs available</h3>
        )}
      </div>
    </section>
  );
};

export default Blogs;
