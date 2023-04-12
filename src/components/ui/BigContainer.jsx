import React from 'react';
import { LANDINGPAGE_IMAGE } from '../../utils/constants';
import { Link } from 'react-router-dom';

function BigContainer() {
  return (
    <div className="bg-black">
      <section className="container items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
        <div className="flex-1 space-y-4 sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold text-red-400">Save your Favorite Books!</h1>
          <p className="max-w-xl leading-relaxed text-gray-300 sm:mx-auto lg:ml-0">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
          <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Link
              to="/favorites"
              className="block px-6 py-2 text-center text-white bg-red-400 rounded-md"
            >
              Favorites
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/4 ">
          <img src={LANDINGPAGE_IMAGE} className="w-full mx-auto mt-6 sm:w-[70%] " />
        </div>
      </section>
    </div>
  );
}

export default BigContainer;
