import { Button } from "@nextui-org/react";
import { useState } from "react";

export function Section4() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      projectName: "Hotel Reservation",
      projectDescription:
        "This is a project about Hotel Reservation. You can use this to book a room",
        
        
    },
    {
      id: 2,
      projectName: "Hotel Reservation",
      projectDescription:
        "This is a project about Hotel Reservation. You can use this to book a room",
    },
    {
      id: 3,
      projectName: "Hotel Reservation",
      projectDescription:
        "This is a project about Hotel Reservation. You can use this to book a room",
    },
    {
      id: 4,
      projectName: "Hotel Reservation",
      projectDescription:
        "This is a project about Hotel Reservation. You can use this to book a room",
    },
    {
      id: 5,
      projectName: "Hotel Reservation",
      projectDescription:
        "This is a project about Hotel Reservation. You can use this to book a room",
    },
    {
      id: 6,
      projectName: "Hotel Reservation",
      projectDescription:
        "This is a project about Hotel Reservation. You can use this to book a room",
    },
  ]);
  return (
    <>
      <div className="mt-10 space-y-5 pt-24" id="projects">
        <div className="text-center "  >
          <p className="font-medium text-2xl">And threre is more!</p>
          <p className="text-gray-500 text-lg">Spline is constanly evolving</p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {projects.map((project) => (
            <div className="">
              <div className="border dark:border-gray-500 text-center dark:bg-black bg-white rounded-3xl p-5 ">
                <Button isIconOnly className=" w-20 h-20 text-3xl font-bold  " >  </Button>
                <div className="">
                  <p className="font-semibold">{project.projectName}</p>
                  <p className="text-gray-500">{project.projectDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
