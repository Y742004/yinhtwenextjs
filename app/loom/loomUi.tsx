import { Avatar, Button, Chip, Divider, Input, Link } from "@nextui-org/react";
import { SearchIcon } from "../Iconify/searchIcon";
import Home from "../page";
import { HomeIcon } from "../Iconify/homeIcon";
import { NotificationIcon } from "../Iconify/notificationIcon";
import { SettingIcon } from "../Iconify/settingIcon";
import { ClockIcon } from "../Iconify/clockIcon";
import { BookMarkIcon } from "../Iconify/bookmarkIcon";
import { VideoLibraryIcon } from "../Iconify/videoLibrary";
import { ViewIcon } from "../Iconify/viewicon";
import { COmmentICon } from "../Iconify/commentIcon";
import { useQuery } from "@tanstack/react-query";

export function LoomUi() {
 

  return (
    <>
      <div className="p-5 ">
        <NaviLoom />

        {/* <SideBarLoom /> */}
      <div className="">
      <VideoBox />
      </div>
      </div>
    </>
  );
}

export function NaviLoom() {
  return (
    <>
      <div className="flex w-full gap-4">
        <Input
          startContent={<SearchIcon size={20} />}
          variant="bordered"
          placeholder="Search for people, tags, folders, Spaces, and Looms"
        />
        <Button className="text-white font-bold bg-purple-400 ">Upgrade</Button>
        <Link href="/loom"><Button  className="text-white font-bold bg-purple-400 ">Upload</Button></Link>
        <div className="">
          <Avatar />
        </div>
      </div>
    </>
  );
}

export function SideBarLoom() {
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className=" top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a
            href="https://flowbite.com/"
            className="flex items-center ps-2.5 mb-5"
          >
            <img
              src="data:image/png;base64,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"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              loom
            </span>
          </a>

          <div className=""></div>

          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HomeIcon size={24} />
                <span className="ms-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <VideoLibraryIcon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  My Library
                </span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <NotificationIcon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Notifications
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-red-500 rounded-full ">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BookMarkIcon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Watch Later
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ClockIcon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">History</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SettingIcon size={24} />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
          </ul>
          <div className="grid gap-8 mt-10">
            <Divider />
            <div className="grid gap-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-md text-gray-500">Spaces</p>
                <p className="text-lg">+</p>
              </div>
              <Link color="foreground">
                {" "}
                <div className="px-2 flex gap-4 items-center">
                  <SearchIcon size={20} />
                  <p className="font-bold text-md">Browse Spaces</p>
                </div>{" "}
              </Link>
              <Link color="foreground">
                <div className=" flex gap-3 items-center">
                  <Avatar name="A" size="sm" radius="sm" />
                  <p className="font-bold text-md">All Yin's Worksp...</p>
                </div>
              </Link>
            </div>
            <Divider />
          </div>
        </div>
      </aside>
    </>
  );
}

export function VideoBox() {
  const { isPending, error, data } = useQuery({
    queryKey: ["loomData"],
    queryFn: () => fetch("/api/loom").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
    <div className=" grid  grid-cols-1 lg:grid-cols-2 gap-5 ">
    {data.map((loom: any) => (
         <Link href={`/loom/${loom.id}`}>
         <div className="border w-full mx-auto my-5  rounded-xl overflow-hidden  ">
          
         <iframe
           className="aspect-video  w-full "
          
         
           src={`https://www.youtube.com/embed/${loom.videoId}`}
           title="YouTube video player"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerPolicy="strict-origin-when-cross-origin"
           allowFullScreen
         ></iframe>
         <div className="flex  justify-between px-5 py-3 items-center">
           <div className="flex items-center gap-3">
             <Avatar size="sm" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///9iXfVYUvVZVPVgW/VRS/Rzb/ZeWfVTTfRVT/RbVvVaVfV3c/ZQSvT8/P/T0vxkX/Xf3v1nYvW3tfrl5P2Bfff09P7r6/7a2fyQjfewrvm/vfq7ufrKyft6dvbOzfunpfnFw/uWk/jw8P6Kh/dsZ/acmfiAfPehn/nW1fxIQfSbmPjj4v2tq/l0cPaFgvccRS+AAAANZ0lEQVR4nO1daVvyOhClC3RBEAVFFGVR3H39///uArJ0SU5mkmnU+3i+2tKcmiaZM1ur5QGrjhorHw/3gjBWI/zugYkhDNT4Y/h78Mfw9+OP4e/HL2d4f3FjusSa4fTiXmaQLpj38rBvuMaWYT/M23OhcdpikXeDoPtsuMqW4XO+/vF8ITVYC5x1sngz0t4YX2fJcNzbXBRnnTO5IbNwOWknXyNNLvCVlgyf9j/fnlzKDZuOjz2/NdJTeKkdw9P0cGGeXksOnYTbOCoMNT6HF9sxHMSFS6P4VnL4RoxOsrg81iG63IrhMCpdG2d3I1kSAJfLwgTdPx99KTYMLyvvcPM5Lk3bkhCGWV4fbP4G7rBhuFQ9JJtKk1HgdBBVX+4WbTCHLBi+t1U3xOH5izylEsZPqZLfeg7d6e+yYHhS/Q72HNNPw+brhtNXzYPXyGba2/gMbzPtc5LXRv+NK81/cPN2Y+1dfIYxeE6zCt2V8vP4QqTdldkMPyLNHWu0r5qhtseDfpoGqW7H4DK8TDU3rJF8NkVth3vwT8wnmpu4DCfgNbYbtxjnXfB0jRHAZHgG3mJ33hizA3L9IpB01LcwGaLlLG+O2AEL/UIeZGprlcfwRne5/gHC6Oi/Es0r5jHs8ieJMPifCYvhs8WHLo2J4lB8GINqqeMwHNss1tJgb1cchp82G644rsGRI1UcORgMX8DbCz1KGcxjI4Mh2imC5okdMAM7Rli3UukMp2in0BsvDeAO7BhRTWsgM+yHYKcABmgDGKEVryaBkxk+olXanxC1xRsaS9UKpzKE7w0JQU2gLoUdkTxVLqYyfAJzP/Oksx0xBGtCVQInMpyhnQIKss3gHKzrg/KlRIYD8ItYVG8Gp+CNR+U3TmN4zZgVfnCBvprS+YrEEJ4FDc6thvDl3lMjXxavJDFE53mTg5IP2px4pu5eFIZqkfsLRiczZ9RbjF9XFMkOnkBOmAz/gTlvDBTY4GX1Sv9PPyVx+4GgaUG9oeDvIzBE2khoDPZote4f2nFtH9Ziu0omlCgIogROYJi4idzzrb+PvOLu9iVCFASUwD8YDN1E7m1ESEDfNQ/O1zjrvBuupUngRoZIZ04eDGPYR4QE1JNP8cRpjIKAQzuoKkaG6EUZRO5jREhgckXvUXa+mqIg5mh67ZUxE0M42efw+ddpebhLePUWo+o+HuIoCLBEHNRNE0O0YCXo4bOg+tMEK7JuveMoCCiB35AY2orco7u6Q9qsBCidr0l7qZ/faKvO+wSGfSRy/9M+t/9WiwjZvhJT3I1GRcsz7SoFj1tzAkMocmsXc2VESABd0Vto96U4PNdtp1ACHxsZWoncp+faE6PeFb0BsmDi9EJ97jNL4JAhMMJ0Ivf4QhcRAm7a/TvA09bD7T0rj8DQdH0xMESGtFrk7j/38DCBdwN5lbbI1YfgwCA/IIZIDFGK3DcR+G63AB4q4BncPzRU2VVQQppChkjkThUi99UKmGw76L2MaGs7QGlXIQl8bdzpGfaRKFnf2jY2EmGM2k0UeOhLT67bVVDKfQQMobBcO2fMlTtgHTpvP4qyKCNKqi8JS+C6P+Zwp6iK3IuEPEC1K/oeCEtVxNm/8tcMBY2LgeYvAyTXVaSLgo1EQE9lkABJXTXsil2FVgz9D4NHlp10JRuJMjyV/DgNwUxToGJXgVXfBmVzvWIjmcemcGK2zDtpDWFcWM6Re9oCaSHEchYDI1QB3cmkheJj1YjTp+N6h0IM2CgEPIzuOB/gdlBIVTw9V8c4a0fSfty/LrQusnFwQV6qbSQt4mhgEtx0VokOxymPrCAmDiI3ezR6K+8IRa4BxCG6HFmyPMTd/m5GmY9oRUBLvYhavohpQLvocqRGsPB1vsc2kmIY2YlJ/Dzilrt6tberF1CUWEPdiNz9Z95UWh+0eHlDHynv97vdG6wKMrCxfsw2UhlJ+8NMqoz1KYI3RzZ2FbagqYOdkGyk0sPt8vfOVszPsf0wAitfnORRmG0QRjlQWYN8RLORjr9sn4O56DKnSq77EpMwzT/nN7Or9/ezq9nN/DNKQ11WzCrnfiAugcNUi+wwPDW9bLKonjPGiwcNSd5yRfICIow/eUu2agh3mkWuv7hjrmc1rDcq9+yEF+ZXX+U3QZ6EEdMqqvALVzI5UNOId3QqDEGnsR7B3dcL0NhINug/2r3pPKa4nWeJ1QssHPolwLWrtkiJgef9Cd+2NNhINphpckf1Y2gTQih2uOFtgOsj2qCJgGGeJROHnF34jLWaNZaez7GrkoS3io+JYm3AsJFs8E61q+KcO4h7IkWWjWSD24RiV8UhfxkYkyYq10ayAcWusspPMnq+1hM0ZdtINjCrs5aFAW4MnqG18eIrLcigsOemKCYdHtBirXbsNYZ9JJlyKLntWaMPVps8om+vMtDbVcZ4Dz20hQZ2QpBf6Owqp+wdtauVcIBvBmq7Sh8CQ4BqPQWBLs1jWj/IOVYEqHs/SDJ2c6jbVaoMSwauKmZG0n7z/wGWMS77cWPXbOuylpUIfICrLHRCZddwXtOn5VPhIImcEK5aHVnfbdv11HEp6aRbz6kTYYb0hAAtQGyOBcQZdt3XvaGcGzJogGHmXvTgjBKZRYY4w9SZYKslGvIgzdB5r9hAyAu5G5Eww4SQDGCEiItuD2mGXQkT/MNWYVdBmqGIDTfledgxpBmGEjLR4kczlFCiZ1IhHRv8MeTi/88wkijF9aO/w0jCZTn8yQzzuQDD+U/eD40ZrRSghFI2xM+lEgU6ROOpxW0LZxNf2sgXZxi6K5unkpuFPEOBpUZ0oZFnKFDkV9Q8lGcYpK4VuUayWQ1rhqvQTZBMyik/uauFWLUOu25ybuY+qaqaN8yfJ6AceZo0W5+cgHrKuKOJeFtZSb/FcViAIojIca2przOC8XlsqNMhHFzAaiewZwf+EbqwyWqxNhbUAcJxWyBOlguQDhHZL6faggfOsc5swHQI6yqVKJ3Yb98nQzqE9WIDjzMe+z6ZU8a7dtL3xOB1SjzFRH0QQjBTmwV+aHY6+Yhro8UmBj2+6HZLsgubjk18/0dNFOpxDcUZMVm+0fhSVu5lj/eub+nVAJqLEWamjLc5sdjXLOmimSCi2YArY2b0KvgTpmc7lo/Vt8q3yM9pX8zZgC9cCOdb2ObMxG1C4dH1+c9KZpDMmeHWkyigm5t8pjcgFteAXMSJ4Jq7FofBVP+q+9PY7ccF7Cr3/MM4zN7U47h6y5iZRvUfd84/FMkhXa/u+bKSRDpaLHNdTTnWE93sKrk84DiJ0qwzeb4eTofXz5NOloa6ZOd41WXmAVvbVbyqPtuUcZTLvc3m7kZR1IWZ3Ov35CmX+1fl49v00/32mgrMHSphJux9b12MbUU5dl2MMKAf5L69tslXRTl+bRNiP11+fZqVeH2aXUU5fn0aSmD/z6gxNLcdjdGu+jF1ovYnlT6/4hFSF/4ntb60ORpu9dpQpVULFEvNs1d2Tb22H1Zzr6QqX3N3Z6W/yq1uImod9A11E3NV3URe7cvOz659qS7GT69f2hWqX5rA+qWPlWegzNwKdMX4vdegjXjNzZxr0PqvIxzhOsL1HCrXOsLea0FHhuZm4rWgG6nnvVn1AUNOc7MvmO0qlInsuSb7hiGjudkOppMJ7Djrua7+hiFsbiZfV99zb4QtQ7hj6JzJwK4ydZzl97cgtHiGDKX7W5g6zvJ7lBDadGOGfWCwlZqblaGx1FULcBmifWYWFIbk5mZVqOwqQs0Kn72CdgztewXV7aoeQaph9nuidEI3MSQ2N1OhonqSOs567Nm1Z0hsbqYebrlnF8mlWOy7ZlLL3fquHRiK9V0jOhS99c47MMTNzcR75/nrf3hkKNT/kFzrc9PDkuJ5dO1hWWAo0sOS3nHWVx/SAkPY3Kwr3ofUVy/ZIkO/vWRpcO8HXGRIOMB7h3tP5xJDsxHmGwJ9uUsMzYa0byD5obIv0Rgam5t5BpSQKt88kaFJ0PKLS44MSGRoEiX9YslZ+agMDcKyV8Cx1HYvKkNmG7ZGwZtPZIbwlOReRowBbRXOQHmKJDNkt0NsDBpFbgOVJUBnyJfAmwG3EzqDIWpuZlJC5cA+XzEYwoAHg6AhB+TdUDpfOQytJHBhEETuCjgMLSVwURBE7gpYDFt2bboFQRG5K+AxtJXAxYBescb5ymNoL4HLgCRyV8Bk6CCBCwBpt1rnK5Mh1JnVkTKCsNquuAxRER6RQk0A1WLUpfFqjxxchuxDkyCIIncFbIauErg9Tl/1kzTTH/35DIHxkrw2qkrpY2yR85XPsHWi66zXfBMBXd8nZIJbMFRL4J6aCAxV+cDQ+WrBUCkE5ZbtXdhQREFg56sNw7qYl/SW/vS2Ws5JCJMAbBhWC0SS80WkUI6CMEjSVgz3rujdpTgipBEU62NURe4K7BgWJPDGGq1hHKMgTM5XO4aH2Hqb3Dsh7KMgeoYtypLhl4PSY10aFbZREEYXrSXD1mPuu7aQCvNebnSa2DLsh7n3+lAK3F8YQyVsGbamF/5rfFnBmuGvwR/D348/hr8ffwx/P7JYjfC7ByaGVUeNRlWzPf4D4Jv8OeT0R6gAAAAASUVORK5CYII=" />
             <div className="">
               <h1 className="font-semibold text-sm">
                 Loom Team{" "}
                 <span className="text-gray-500 font-regular">. 3 years</span>
               </h1>
               <p className="text-gray-500 font-semibold text-sm">
                 Loom's Community
               </p>
             </div>
           </div>
           <div className="text-gray-500 flex gap-3">
             <div className="flex text-sm gap-1">
               <ViewIcon size={20} />
   
               <span>3 </span>
             </div>
             <div className="flex text-sm gap-1">
               <COmmentICon size={20} />
               <span>0 </span>
             </div>
           </div>
         </div>
   
         <div className="px-5 mb-5 font-semibold">
           <p>{loom.title}</p>
         </div>
       </div> 
       </Link>
           ))}
    </div>
    
     
    </>
  );
}
