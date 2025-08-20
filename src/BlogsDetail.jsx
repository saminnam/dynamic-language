import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import i18n from "./i18n";
import blogData from "../blogsdata.json";

const BlogsDetail = () => {
  const { id } = useParams();
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const currentLang = i18n.language; 
    const currentBlogs = blogData[currentLang] || [];
    const blog = currentBlogs.find((blog) => blog.id === Number(id)); // Convert id properly
    setSelectedBlog(blog);
  }, [id, i18n.language]);

  if (!selectedBlog) return <h1>Blog Not Found</h1>;

  return (
    <section className="h-screen px-5">
      <div className="border border-gray-300 shadow-lg p-5 mt-10 w-[600px] mx-auto">
        <img
          src={selectedBlog.image}
          alt="img"
          className="w-full h-[300px] object-cover"
        />
        <div className="mt-10 flex flex-col gap-3">
          <h3 className="text-xl text-green-500">{selectedBlog.title}</h3>
          <p className="text-gray-500">{selectedBlog.sub_content}</p>
          <p className="text-gray-500">{selectedBlog.content}</p>
          <div className="flex justify-between mt-3">
            <Link to={"/blogs"} className="uppercase hover:bg-red-600 hover:text-white transition-all duration-300 ease-linear cursor-pointer border-red-600 border px-4 py-2 text-red-600 text-sm">Go Back</Link>
            <h4 className="text-red-500 text-end text-lg font-bold shadow-2xl">- {selectedBlog.author}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsDetail;
