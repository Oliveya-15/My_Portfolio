import React from "react";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: "/python.jpg",
      name: "Python",
    },
    {
      id: 2,
      logo: "/c.jpg",
      name: "C",
    },
    {
      id: 3,
      logo: "/mern.png",
      name: "MERN",
    },
    {
      id: 4,
      logo: "/Tailwind.png",
      name: "Tailwind",
    },
    {
      id: 5,
      logo: "/htmlcssjs.png",
      name: "HTML CSS JS",
    },
    {
      id: 6,
      logo: "/colab.png",
      name: "Google Colab",
    },
    {
      id: 7,
      logo: "/streamlit.png",
      name: "Streamlit",
    },
    {
      id: 8,
      logo: "/langchain.png",
      name: "Langchain",
    },
    {
      id: 9,
      logo: "/HugFace.png",
      name: "Hugging Face",
    },
    {
      id: 10,
      logo: "/anaconda.jpg",
      name: "Anaconda",
    },
    {
      id: 11,
      logo: "/spyder.png",
      name: "Spyder",
    },
    {
      id: 12,
      logo: "/git.png",
      name: "Git",
    },
  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p>
          I have foundational knowledge and enthusiasm for learning the
          technologies listed below --
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full w-[150px] h-[150px] md:w-[170px] md:h-[170px] bg-white shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] object-contain rounded-full"
                alt={name}
              />
              <div className="text-sm md:text-base mt-1">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;