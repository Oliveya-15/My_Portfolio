import React from "react";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: "/python.jpg", // Updated to direct path
      name: "Python",
    },
    {
      id: 2,
      logo: "/java.png", // Updated to direct path
      name: "Java",
    },
    {
      id: 3,
      logo: "/c.jpg", // Updated to direct path
      name: "C",
    },
    {
      id: 4,
      logo: "/mern.png", // Updated to direct path
      name: "MERN",
    },
    {
      id: 5,
      logo: "/html.png", // Updated to direct path
      name: "HTML",
    },
    {
      id: 6,
      logo: "/css.jpg", // Updated to direct path
      name: "CSS",
    },
    {
      id: 7,
      logo: "/sql.jpg", // Updated to direct path
      name: "SQL",
    },
    {
      id: 8,
      logo: "/colab.png", // Updated to direct path
      name: "Google Colab",
    },
    {
      id: 9,
      logo: "/anaconda.jpg", // Updated to direct path
      name: "Anaconda",
    },
    {
      id: 10,
      logo: "/spyder.png", // Updated to direct path
      name: "Spyder",
    }
  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p>I have foundational knowledge and enthusiasm for learning the technologies listed below --</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt={name} />
              <div>{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
