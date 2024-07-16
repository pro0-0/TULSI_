import React from "react";

const Aboutus = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center py-5 pb-0">
        <div className="w-full bg-white border-t border-b rounded-md  border-gray-200  px-5 py-16 md:py-24 text-gray-800">
          <div
            className="h-[55rem] md:h-[50rem]  w-full  dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center "
            id="aboutus"
          >
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
            <div>
              {" "}
              <div className="mx-auto max-w-7xl px-2 py-10 lg:px-0">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-10">
                  <div className="mb-10 w-full md:w-2/3 lg:mb-0 lg:w-1/2">
                    <img
                      className="h-3/4 w-3/4 rounded-md object-cover bg-transparent"
                      src="/buliding.png"
                      alt="Newsletter"
                    />
                  </div>
                  <div className="w-full md:w-2/3 lg:w-1/2">
                    <p className="text-sm font-bold text-black">ABOUT US :</p>
                    <h2 className="mt-4 text-3xl font-bold text-black">
                      TULSI INDUSTRIES
                    </h2>
                    <p className="mt-4 text-gray-600">
                      Tulsi Industries - Leading Provider of Aluminum and Glass
                      Solutions in Aurangabad, Maharashtra Welcome to Tulsi
                      Industries, a distinguished retailer specializing in
                      top-quality aluminum and glass products. As a premier
                      manufacturer and supplier in the industry, Tulsi
                      Industries takes pride in offering an extensive range of
                      Glass and Aluminum Interior products. Our commitment to
                      excellence is reflected in the superior quality and
                      exceptional features of our offerings
                    </p>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-800">
                        Trusted by over 100,000+ businesses and individuals
                      </p>
                    </div>

                    {/* <p className="mt-2">
    <span className="text-sm text-gray-600">
      By signing up, you agree to our terms of service and privacy
      policy.
    </span>
  </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
