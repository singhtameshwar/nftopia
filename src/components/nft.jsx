import { Heart, Plus, Clock } from "lucide-react";

const nftData = [
  {
    id: 1,
    title: "Pixel Dreams",
    creator: "@Otte",
    price: "0.87",
    image: "/images/image1.png?height=400&width=300",
  },
  {
    id: 2,
    title: "Neon Infinity",
    creator: "@CamB6",
    price: "3.68",
    image: "/images/image2.png?height=400&width=300",
  },
  {
    id: 3,
    title: "CyberSoul",
    creator: "@HTom",
    price: "0.92",
    image: "/images/image3.png?height=400&width=300",
  },
];

export const NFT = () => {
  return (
    <div className="container mx-auto">
      <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 p-4 sm:p-8 text-white">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 bg-[#1E1B2E] px-3 py-1.5 rounded-full">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
            <span className="text-gray-300 text-sm">Our Collection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Top Trending NFT Collections
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            You Can't Miss.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nftData.map((nft) => (
            <div
              key={nft.id}
              className="card bg-[#1E1B2E] shadow-lg rounded-2xl overflow-hidden relative group"
            >
              <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm">
                <Clock className="w-4 h-4" />
                <span>3h 28m 4s</span>
              </div>
              <button className="absolute top-4 right-4 p-2 rounded-full bg-black/30 backdrop-blur-sm">
                <Heart className="w-4 h-4" />
              </button>
              <figure>
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="absolute bottom-0 left-0 right-0 bg-[#1E1B2E]/90 p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold">
                      {nft.title}
                    </h2>
                    <p className="text-gray-400 text-sm">{nft.creator}</p>
                    <p className="text-sm text-gray-400">Current Price</p>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M12 2L2 12l10 10 10-10L12 2z" strokeWidth="2" />
                      </svg>
                      <span>{nft.price}</span>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center hover:bg-purple-600">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};
