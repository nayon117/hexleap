"use client";
import { useEffect, useState } from "react";
import { getAllSports } from "@/components/utils/getAllSports";
import Image from "next/image";
interface SportsData {
  _id: number;
  image: string;
  title: string;
  events: number;
  sports: string;
}

const Sports = () => {
  const [sportsData, setSportsData] = useState<SportsData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllSports();
        setSportsData(data);
      } catch (error) {
        console.error("Error fetching sports data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(sportsData);

  return (
    <div className="section-container py-6">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold border-b-2 border-black">Sports</h1>
      </div>
   
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          {sportsData.map((sport) => (
            <div
              key={sport._id}
              className=" space-y-4 rounded-lg  p-6 shadow-lg "
            >
              <Image alt="card" width={300} height={200} src={sport.image} />
              <div>
                <h1 className="text-base font-semibold lg:whitespace-nowrap ">{sport.title}</h1>
                <div className="flex items-center justify-between bg-base-200 p-1">
                  <div className="flex flex-col ">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                     Total Events
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {sport.events} Events
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-center text-gray-500 dark:text-gray-400">sport</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {sport.sports}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div
              className=" space-y-4 rounded-lg  p-6 shadow-lg"
            >
            <div className="relative">
            <Image alt="card" width={300} height={200} src="https://i.ibb.co/KL5rwtX/unnamed-1-1.png" />
              <p className="px-2 bg-black text-white absolute top-0 right-0">Ad</p>
            </div>
              <div>
                 <h1 className="text-base font-semibold lg:whitespace-nowrap">Advertisement title</h1>
                 <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.  </p>
              </div>
            </div>  
      </div>
     <div className="text-center mt-10">
     <button className="bg-blue-500 text-white px-2 py-1">See More</button>
     </div>
    </div>
  );
};

export default Sports;
