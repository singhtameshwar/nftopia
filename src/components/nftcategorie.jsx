import { ChevronRight, ChevronLeft, MoveUpRight } from "lucide-react";

export const NFTCATEGORIES = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-gradient-to-b from-black to-purple-900 text-white min-h-screen p-8">
        <div className="mb-6">
          <button className="bg-black text-purple-400 px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <span className="text-purple-500">✦</span> Top Categories
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left">
            Explore NFT Categories
            <br /> for Every Collector.
          </h1>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full font-medium">
              Digital Art
            </button>
            {["Collectibles", "Music", "Gaming", "Virtual Worlds"].map(
              (category) => (
                <button
                  key={category}
                  className="text-gray-400 px-4 py-2 rounded-full border border-gray-700"
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img: "/images/nftimg1.png",
              title: "Whispers of the Blockchain",
              badges: ["Digital Art", "2024 Trend"],
            },
            {
              img: "/images/nftimg2.png",
              title: "Fragments of Infinity",
              badges: [],
            },
            {
              img: "/images/nftimg3.png",
              title: "Prismatic Dreams",
              badges: [],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-purple-800 rounded-[40px] overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 sm:h-96 object-cover"
              />
              {item.badges.length > 0 && (
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
              <div className="absolute bottom-4 left-4 text-xl font-bold">
                {item.title.split(" ").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </div>
              <div className="absolute top-4 right-4">
                <button className="bg-purple-900 w-10 h-10 rounded-full flex justify-center items-center">
                  <span className="text-2xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 gap-4">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-400">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCATEGORIES;
