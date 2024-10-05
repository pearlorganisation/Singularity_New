import React, { useState, useEffect } from "react";
import { blogAuthor } from "../../utils/blogAuthor";
import { useNavigate } from "react-router";


const dummyData = [
    {
        category: `Technology`,
        title: "Generative AI in Labs: Singularity's Swift Model Development ",
        image:
            "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        profile: {
            img: blogAuthor.image,
            name: blogAuthor.name,
            email: blogAuthor.email,
        },
        desc: "Singularity introduces a groundbreaking solution to expedite the development of generative Ai and large language models (LLM) within the realm of laboratory management software. The transformative potential of generative Ai is becoming a reality, promising to revolutionize the way we operate in the laboratory setting. However, the enormity of these models and the continuous influx of data present challenges. Accelerating the progress of such large language models demands the elimination of complexity and barriers to entry within an optimally designed environment specifically crafted for Ai. With Singularity's specialized expertise and tailored architecture, empower your laboratory management software to navigate the complexities seamlessly, unlocking the full potential of generative Ai for enhanced efficiency in laboratory workflows.",
        link: "/sciences_ai/blogDetails1",
        date: "Jan 4 2022",
    },
    {
        category: `Technology`,
        title:
            "Streamline Your Laboratory's Ai Data Pipeline for Enhanced Efficiency",
        image:
            "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        profile: {
            img: blogAuthor.image,
            name: blogAuthor.name,
            email: blogAuthor.email,
        },
        desc: "Efficiently managing the vast array of data within a science laboratory is paramount for transforming your Ai strategy into a well-orchestrated pipeline of projects. From the initial proof of concept to full-scale production, the key lies in obtaining a comprehensive view of your laboratory's data and strategically converting it into a valuable asset through Ai. Embracing a novel perspective on pipeline lifecycle management is essential to seamlessly navigate the journey from data inception to strategic Ai implementation within the laboratory environment.",

        link: "/sciences_ai/blogDetails3",
        date: "Jan 4 2022",
    },
    {
        category: `Technology`,
        title:
            "Building a Modern Tax Ecosystem: Leveraging Blockchain Technology for a Streamlined Future",
        image:
            "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        profile: {
            img: blogAuthor.image,
            name: blogAuthor.name,
            email: blogAuthor.email,
        },
        desc: "The current tax reporting infrastructure suffers from several limitations due to its reliance on point-to-point integrations between various entities. Data transfer between banks, financial institutions, government agencies, and taxpayers is cumbersome and error-prone due to the use of multiple intermediaries. This increases the risk of data corruption or loss and makes it difficult to trace the origin and maintain the integrity of data throughout the reporting process. ",

        link: "/sciences_ai/blogDetails4",
        date: "07-08-2024",
    },
];
const Blogs = () => {
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
        <section className="min-h-screen relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8 grid place-items-center z-10">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10 -z-10"></div>
            <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8 text-white min-h-screen grid place-items-center">
                <div className="text-center">
                    <h1 className="text-5xl">Blogs</h1>
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
        </section>

    );
};




export default Blogs