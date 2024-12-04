export const Details = () => {
  return (
    <div className="container mx-auto">
      <div className="min-h-screen text-white bg-gradient-to-b from-black to-purple-900 p-4">
          <div className="inline-flex items-center gap-2 mb-4 bg-[#1E1B2E] px-3 py-1.5 rounded-full">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
            <span className="text-gray-300 text-sm">Our Collection</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="border border-white rounded-lg p-6 backdrop-blur-sm">
                <h1 className="text-5xl font-bold leading-tight">
                  Discover, Collect
                  <br />
                  & Trade Unique
                  <br />
                  Digital Art.
                </h1>
              </div>
              <p className="text-lg max-w-md">
                Discover groundbreaking digital pieces from emerging and
                established artists.
              </p>
              <div className="flex items-center gap-6">
                <button className="btn border rounded-full px-8">
                  Explore Collections
                </button>
                <div className="flex items-center gap-3">
                  <button className="btn btn-circle btn-ghost border border-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <span className="text-sm hover:underline">Watch Now</span>
                </div>
              </div>
              <div className="flex gap-6 pt-10">
                <div className="rounded-xl px-6 py-4 border">
                  <div className="text-2xl font-bold">24K+</div>
                  <div className="text-sm">Our artist</div>
                </div>
                <div className="rounded-xl px-6 py-4 border">
                  <div className="text-2xl font-bold">40K+</div>
                  <div className="text-sm">Art works</div>
                </div>
                <div className="rounded-xl px-6 py-4 border">
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-sm">Total Sales</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[600px]">
              <div className="card w-48 border bg-base-100/20 backdrop-blur-sm absolute left-[-50px] bottom-28 z-10">
                <figure>
                  <img
                    src="/images/image.png/?height=200&width=200"
                    alt="Small preview"
                    className="w-full h-auto"
                  />
                </figure>
              </div>
              <div className="card w-[90%] bg-base-100/10 backdrop-blur-sm absolute right-0 top-0 shadow-lg">
                <div className="absolute top-4 right-4 badge border">25% off</div>
                <figure className="px-4 border border-b-0">
                  <img
                    src="/images/star.png"
                    alt="Digital artwork"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body border pb-0 border-t-0 flex flex-col gap-4">
                  <div className="flex justify-between">
                    <h2 className="card-title">Androgynous Avatar</h2>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm">You Pay</p>
                      <div className="flex items-center gap-2">
                        <div className="border rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 3h12" />
                            <path d="M6 8h12" />
                            <path d="m6 13 8.5 8" />
                            <path d="M6 13h3" />
                            <path d="M9 13c6.667 0 6.667-10 0-10" />
                          </svg>
                        </div>
                        <div className="badge bg-transparent">USD</div>
                        <span className="text-2xl font-bold">300.00</span>
                      </div>
                    </div>
                    <button className="btn border rounded-2xl">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
