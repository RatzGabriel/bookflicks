export const Shimmer = () => {
  return (
    <div
      data-testid="shimmer-ui"
      className="p-0 pt-6 flex md:p-20 shimmer-ui md:flex flex-col sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full"
    >
      <div className="flex w-full flex-wrap justify-between">
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
      </div>
      <div className="flex w-full flex-wrap justify-between">
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
      </div>
      <div className="flex w-full flex-wrap justify-between">
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
        <SmallShimmer />
      </div>
    </div>
  );
};

export const GreatShimmer = () => {
  return (
    <div className="flex md:my-12 w-full">
      <div className="container px-5 pt-24 mx-auto w-full md:w-3/5">
        <div className="p-4 ">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
            <div className="p-6">
              <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
              <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
              <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
              <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
              <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
              <div className="flex items-center flex-wrap ">
                <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SmallShimmer = () => {
  return (
    <div className="h-60 w-36 mt-5 border border-blue-300 shadow rounded-md p-4 max-w-sm w-5/5 mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
