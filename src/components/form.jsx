export const FORM = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 flex items-center justify-center overflow-x-hidden"> {/* Prevents horizontal scrolling */}
      <div className="max-w-7xl mx-auto relative">
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl -z-10"
          style={{
            background:
              "radial-gradient(circle at bottom left, rgba(147, 51, 234, 0.2), transparent 70%)",
          }}
        ></div>
        <div className="max-w-5xl">
          <div className="mb-12 inline-flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
            <span className="text-sm font-medium text-gray-400">
              Newsletter
            </span>
          </div>

          <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
            <div className="flex-1">
              <h1 className="text-5xl font-semibold leading-tight mb-6">
                Make It Yours Personalize
                <br />
                Your Work Today.
              </h1>
              <p className="text-gray-400 text-lg">
                Our platform offers a range of tools and features to help you
                customize every aspect of your creation.
              </p>
            </div>
            <div className="flex-1">
              <form className="space-y-12">
                <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:gap-0">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-transparent border-b border-r border-gray-800 pb-4 w-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Number"
                    className="bg-transparent border-b border-gray-800 pb-4 w-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-b border-gray-800 pb-4 w-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Anything we should know?"
                  className="bg-transparent border-b border-gray-800 pb-4 w-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#6366f1] rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
