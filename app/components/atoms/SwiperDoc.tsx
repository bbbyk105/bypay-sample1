import React from "react";

const SwiperDoc = () => {
  return (
    <div className="w-full bg-[#f4ebde] py-2 flex items-center justify-center">
      <div className="flex space-x-8 text-gray-600 text-sm">
        <p className="flex items-center">
          <span className="font-bold text-gray-800 mr-1">【重要】</span>
          <a href="/caution">商品の転売禁止について</a>
          <span className="ml-1">&gt;</span>
        </p>
      </div>
    </div>
  );
};

export default SwiperDoc;
