import { ChevronRight, ChevronLeft, MoveUpRight } from "lucide-react";

export const NFTCATEGORIES = () => {
  return (
    <div className="bg-gradient-to-b from-black to-purple-900 text-white min-h-screen p-8">
      <div className="mb-6 border border-gray-400 inline-block rounded-3xl">
        <button className="bg-black text-purple-400 px-3 py-1 rounded-full text-sm flex items-center gap-2">
          <span className="text-purple-500">✦</span> Top Categories
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 sm:gap-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left">
          Explore NFT Categories
          <br /> for Every Collector.
        </h1>
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full font-medium">
            Digital Art
          </button>
          <button className="text-gray-400 px-4 py-2 rounded-full border border-gray-700">
            Collectibles
          </button>
          <button className="text-gray-400 px-4 py-2 rounded-full border border-gray-700">
            Music
          </button>
          <button className="text-gray-400 px-4 py-2 rounded-full border border-gray-700">
            Gaming
          </button>
          <button className="text-gray-400 px-4 py-2 rounded-full border border-gray-700">
            Virtual Worlds
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative bg-purple-800 rounded-[40px] overflow-hidden">
          <img
            src="/images/nftimg1.png"
            alt="Whispers of the Blockchain"
            className="w-full h-72 sm:h-96 object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
              Digital Art
            </span>
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
              2024 Trend
            </span>
          </div>
          <div className="absolute bottom-4 left-4 text-xl font-bold">
            Whispers of the <br /> Blockchain
          </div>
          <div className="absolute bottom-4 right-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex justify-center items-center">
              <MoveUpRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="relative bg-purple-800 rounded-[40px] overflow-hidden">
          <img
            src="/images/nftimg2.png"
            alt="Fragments of Infinity"
            className="w-full h-72 sm:h-96 object-cover"
          />
          <div className="absolute bottom-4 left-4 text-xl font-bold">
            Fragments of <br /> Infinity
          </div>
          <div className="absolute top-4 right-4">
            <button className="bg-purple-900 w-10 h-10 rounded-full flex justify-center items-center">
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>

        <div className="relative h-72 sm:h-96 bg-purple-800 rounded-[40px] overflow-hidden">
          <img
            src="/images/nftimg3.png"
            alt="Prismatic Dreams"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-xl font-bold">
            Prismatic <br /> Dreams
          </div>
          <div className="absolute top-4 right-4">
            <button className="bg-purple-900 w-10 h-10 rounded-full flex justify-center items-center">
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 gap-4">
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-400">
          <ChevronLeft className="w-4 h-4 text-white"/>
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
          <ChevronRight className="w-4 h-4 text-white"/>
        </button>
      </div>
    </div>
  );
};

export default NFTCATEGORIES;
