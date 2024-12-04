import { Image } from "@nextui-org/react";
import { useState } from "react";

export function Skills() {
  const [skills, setSkills] = useState([
    {
      id: 1,
      img: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
    },
    {
      id: 2,
img: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg"    },
    {
      id: 3,
img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"    },
    {
      id: 4,
img: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"    },
    {
      id: 5,
      img: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    {
      id: 6,
 img: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg"    },
    {
      id: 7,
img: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"    },
    {
      id: 8,
img: "https://www.svgrepo.com/show/374002/prisma.svg"    },
    {
      id: 9,
img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"    },
    {
      id: 10,
img: "https://www.vectorlogo.zone/logos/canva/canva-ar21.svg"    },
  ]);

  return (
    <>
      <div id="skills" className=" space-y-3 pt-28 mt-20">
        <p className="text-2xl text-center font-medium">Skills</p>
        <div className="">
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3  gap-3 ">
            {skills.map((skill) => (
              <div className="space-y-3" key={skill.id}>
                <div className="border rounded-3xl p-5 dark:bg-black bg-white flex justify-center items-center">
                  {" "}
                  <Image className="h-40  " src={skill.img} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
