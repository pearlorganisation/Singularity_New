import { useState, useEffect } from "react";

const Pagination = ({ post, data, setPosts, itemsPerPage, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    console.log("Running");
    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the items for the current page
    const currentItems = data.slice(startIndex, endIndex);
    setPosts(currentItems);
  }, [currentPage, totalPages]);
  // useEffect;

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 text-white md:px-8 w-full">
      <div className="hidden justify-between text-sm md:flex">
        <div>
          SHOWING {currentPage} OF {totalPages.length}
        </div>
        <div className="flex items-center gap-12" aria-label="Pagination">
          <a href="javascript:void(0)" className="hover:text-indigo-600">
            Previous
          </a>
          <ul className="flex items-center gap-1">
            {totalPages?.map((item, idx) => (
              <li key={item}>
                {item == "..." ? (
                  <div>{item}</div>
                ) : (
                  <button
                    onClick={() => {
                      setCurrentPage(idx + 1);
                    }}
                    type="button"
                    aria-current={currentPage == item ? "page" : false}
                    className={`px-3 py-2 rounded-lg duration-150 hover:text-slate-950 hover:bg-white ${
                      currentPage == item
                        ? "bg-white text-[#111827] font-medium"
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <button type="button" className="hover:text-indigo-600">
            Next
          </button>
        </div>
      </div>
      {/* On mobile version */}
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
        <button
          type="button"
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Previous
        </button>
        <div className="font-medium">SHOWING 1-10 OF 120</div>
        <a
          href="javascript:void(0)"
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default Pagination;
