import React from "react";
import loader from "../img/portfolio/loader.png";
import mariobox from "../img/portfolio/mariobox.png";
import menu3d from "../img/portfolio/menu3d.png";
import nanohome from "../img/portfolio/nanohome.png";
import rubick from "../img/portfolio/rubick.png";
import weatherapp from "../img/portfolio/weatherapp.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: loader,
    },
    {
      id: 2,
      src: mariobox,
    },
    {
      id: 3,
      src: menu3d,
    },
    {
      id: 4,
      src: nanohome,
    },
    {
      id: 5,
      src: rubick,
    },
    {
      id: 6,
      src: weatherapp,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-black w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto text-center flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg h-[300px]">
              <img
                src={src}
                alt=""
                className="rounded-md mx-auto relative place-items-center duration-200 hover:scale-105 max-h-[200px]"
              />
              <div className="flex justify-center items-baseline">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;