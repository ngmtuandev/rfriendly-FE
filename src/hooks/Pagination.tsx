import React from "react";

const Pagination = ({
  totalPage,
  currentPage,
  onChangePage,
}: {
  totalPage: number;
  currentPage: number;
  onChangePage: (pageCur: number) => void;
}) => {
  const handleSetPage = (page: number) => {
    onChangePage(page);
  };

  return (
    <div
      style={{
        width: "100%",
        gap: 20,
        marginBottom: 20,
      }}
      className="flex justify-center items-center"
    >
      {Array.from(Array(totalPage).keys()).map((item, index) => {
        return (
          <div
            onClick={() => handleSetPage(item)}
            style={{ width: 40, height: 40, borderRadius: 5 }}
            className={`flex justify-center items-center cursor-pointer ${
              item === currentPage
                ? "bg-color-yellow-main text-white"
                : "border-[1px] border-gray-400"
            } `}
            key={index}
          >
            <span>{item + 1}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
