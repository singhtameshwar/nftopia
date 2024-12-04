export const FORM = () => {
  return (
    <div className="container mx-auto">
      <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
        <div className="max-w-full mx-auto relative">
          <div
            className="absolute bottom-0 left-0 w-[80%] max-w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-3xl -z-10"
            style={{
              background:
                "radial-gradient(circle at bottom left, rgba(147, 51, 234, 0.2), transparent 70%)",
            }}
          ></div>
          <div className="w-full max-w-5xl mx-auto">
            <div className="mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
              <span className="text-sm text-gray-400">Newsletter</span>
            </div>
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight mb-6">
                  Make It Yours Personalize
                  <br />
                  Your Work Today.
                </h1>
                <p className="text-gray-400 text-base md:text-lg">
                  Our platform offers a range of tools and features to help you
                  customize every aspect of your creation.
                </p>
              </div>
              <div className="flex-1">
                <form className="space-y-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="bg-transparent border-b border-gray-800 pb-4 w-full placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder=" Number"
                      className="bg-transparent border-b border-gray-800 pb-4 w-full placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent border-b border-gray-800 pb-4 w-full placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Anything we should know?"
                    className="bg-transparent border-b border-gray-800 pb-4 w-full placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
                  />
                  <div className="flex justify-center md:justify-end">
                    <button
                      type="submit"
                      className="px-6 md:px-8 py-3 bg-purple-600 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
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
    </div>
  );
};

export default FORM;
