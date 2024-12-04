import {
  UserPlus,
  Grid,
  Wallet,
  DollarSign,
  FolderKanban,
  Bell,
} from "lucide-react";

export const CARDS = () => {
  const cards = [
    {
      icon: UserPlus,
      title: "Create an Account",
      content:
        "Start by signing up for an account. It only takes a few minutes. You'll need a secure wallet to store your NFTs and a valid email address.",
    },
    {
      icon: Grid,
      title: "Explore Collections",
      content:
        "Browse through our marketplace to discover exclusive and trending NFT collections. From digital art to music and virtual real estate.",
    },
    {
      icon: Wallet,
      title: "Buy NFTs",
      content:
        "Payments are made through cryptocurrency. Simply confirm the transaction in your wallet, and it will be securely transferred to you.",
    },
    {
      icon: DollarSign,
      title: "Sell Your NFTs",
      content:
        "Ready to list your own NFTs? Upload your digital assets to the platform, provide details, and set your price or open them up for auction.",
    },
    {
      icon: FolderKanban,
      title: "Manage Your Collection",
      content:
        "All your purchased or created NFTs are stored in your digital wallet. You can view, showcase, or resell them at any time.",
    },
    {
      icon: Bell,
      title: "Stay Updated",
      content:
        "Keep up with the latest trends in the NFT market by following featured artists, collections, and market insights.",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="min-h-screen bg-[#13111C] text-white p-6">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4 bg-[#1E1B2E] px-3 py-1.5 rounded-full">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span className="text-gray-300 text-sm">Our Process</span>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Your Complete Getting
                <br />
                Started Guide.
              </h1>
              <p className="text-gray-400 max-w-xl lg:text-right">
                Welcome to NFTopia! We`&lsquo;`ve designed this comprehensive
                guide to help you navigate your way from start to success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-[#1E1B2E] border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#13111C] border border-gray-800 flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{card.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CARDS;
