import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import Pagination from "./Pagination";
import { blogAuthor } from "../../utils/blogAuthor";
import { useNavigate } from "react-router";
const FeaturedArticles = ({ dummyData }) => {
  const [post, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // here 4 is items per page
    const totalPagesLength = Math.ceil(dummyData.length / 2);
    const totalPages = Array.from(
      { length: totalPagesLength },
      (_, index) => `${index + 1}`
    );
    setTotalPages(totalPages);
    setPosts(dummyData);
    setData(dummyData);
  }, []);
  useEffect(() => {
    console.log("post:::", post);
  }, [post]);

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8 text-white min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="text-5xl">Featured Articles</h1>
      </div>
      <div className="mt-12 grid gap-4">
        {post.map((items, key) => (
          <article
            className=" mt-4 shadow-lg min-h-[20rem] rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <div className="grid md:grid-cols-2 gap-3">
              <img
                src={items?.image}
                loading="lazy"
                alt={items.title}
                className="w-full h-[20rem] rounded-t-md"
              />
              <div className="space-y-2 flex flex-col justify-center gap-1 items-start p-1">
                <div className="px-3 rounded-2xl text-slate-950 bg-white w-fit font-medium">
                  #{items?.category}
                </div>
                <p className="text-3xl">
                  {items?.title ||
                    "10 Tips for Crafting the Perfect UX Portfolio"}
                </p>
                <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
                  <div class="flex items-center space-x-3">
                    <img
                      class="w-12 h-12 rounded-full object-cover"
                      src={items?.profile?.img}
                      alt=""
                    />{" "}
                    <div>
                      <span class="text-white text-sm">
                        {items?.profile?.name}
                      </span>
                      <span class="block text-white text-xs">
                        {items?.profile?.email}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-1 line-clamp-3">
                  {items?.desc}
                </p>
                <div className="flex justify-between items-center w-full">
                  <button
                    type="button"
                    onClick={() => {
                      navigate(`${items.link}`, { state: items });
                    }}
                    className="inline-flex gap-x-1 hover:ring-8 ring-black/40 active:scale-95 transition-all items-center border text-white px-8 py-2  font-medium"
                  >
                    Read more
                  </button>
                  {/* <div className="flex text-2xl space-x-3">
                    <FaFacebook />
                    <FaInstagram />
                    <IoIosMail />
                  </div> */}
                </div>
              </div>
              {/* <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                <div className="flex-none w-10 h-10 rounded-full">
                  <img
                    src={items.authorLogo}
                    className="w-full h-full rounded-full"
                    alt={items.authorName}
                  />
                </div>
                <div className="ml-3">
                  <span className="block text-gray-900">
                    {items.authorName}
                  </span>
                  <span className="block text-gray-400 text-sm">
                    {items.date}
                  </span>
                </div>
              </div> */}
              {/* <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-gray-900">{items.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
              </div> */}
            </div>
          </article>
        ))}
      </div>
      {/* <Pagination
        post={post}
        data={data}
        setPosts={setPosts}
        itemsPerPage={2}
        totalPages={totalPages}
      /> */}
    </section>
  );
};

export default FeaturedArticles;
