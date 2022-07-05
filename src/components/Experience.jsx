import React from "react";
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import reactImage from "../img/react.png";
import github from "../img/githubexp.png";
import tailwind from "../img/tailwind.png";
import node from "../img/node.png"
import api from "../img/api.png"
import redux from "../img/redux.png"
import Aos from 'aos'
import 'aos/dist/aos.css';
import '../index.css'

const Experience = () => {
    Aos.init()
  const techs = [
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-gray-700",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-gray-700",
    },
    {
      id: 4,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-gray-700",
    },
    {
      id: 5,
      src: reactImage,
      title: "REACT",
      style: "shadow-gray-700",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-gray-700",
    },
    {
      id: 6,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-700",
    },
    {
        id: 7,
        src: node,
        title: "NODE.JS",
        style: "shadow-gray-700",
      },
      {
        id: 8,
        src: api,
        title: "API REST",
        style: "shadow-gray-700",
      },
      {
        id: 9,
        src: redux,
        title: "REDUX",
        style: "shadow-gray-700",
      },
  ];

  return (
    <div
      name="experience"
      className="w-full"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full text-black py-10">
        <div  data-aos="fade-bottom"
     data-aos-duration="2500">
          <div class="title flex justify-center font-bold text-xl">These are the technologies I've worked with</div>
         
        </div>

        <div className="w-full max-h-screen grid grid-cols-2 relative sm:grid-cols-3 gap-8 text-center py-8 px-12">
          {techs.map(({ id, src, title, style }) => (
            <div data-aos="fade-top"
          data-aos-duration={3000*id} 
              key={id}
              className={`shadow-md lg:px-2 bg-gradient-to-r from-slate-400 via-black to-slate-400 text-white py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto hover:scale-[1.5] duration-500 " />
              <p className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-black via-white to-black hover:scale-[1.5] cursor-default duration-500">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
    </div>
  );
};

export default Experience