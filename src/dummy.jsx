import React, { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("./blogsdata.json");
      console.log(response.data);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="flex justify-between p-20 bg-amber-200">
      <div className="">
        {loading ? (
          <h1>Loading...</h1>
        ) : blogs.length > 0 ? (
          blogs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 w-[500px] h-auto p-4 mb-4 rounded shadow text-red-600"
            >
              <img
                src={item.image}
                alt="img"
                className="h-[200px] w-full object-cover"
              />
              <div className="mt-5">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-700">{item.sub_title}</p>
                <div className="flex justify-between mt-5 items-center">
                  <button className="text-sm cursor-pointer border px-2 py-1 border-green-600 text-green-600">
                    Know More
                  </button>
                  <h4 className="text-lg font-semibold text-green-600">
                    - {item.author}
                  </h4>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>No blogs available</h1>
        )}
      </div>
      <div>
        <div className="flex gap-5">
          <button
            onClick={() => changeLanguage("en")}
            className="cursor-pointer border rounded bg-gray-500 text-white px-4 py-3"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("tm")}
            className="cursor-pointer border rounded bg-gray-500 text-white px-4 py-3"
          >
            தமிழ்
          </button>
          <button
            onClick={() => changeLanguage("ar")}
            className="cursor-pointer border rounded bg-gray-500 text-white px-4 py-3"
          >
            العربية
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
