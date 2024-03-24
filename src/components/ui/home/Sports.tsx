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

  console.log(sportsData);

  return (
    <div className="section-container py-6">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold border-b-2 border-black">Sports</h1>
        <h2>Light</h2>
      </div>
   
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sportsData.map((sport) => (
            <div
              key={sport._id}
              className=" space-y-4 rounded-lg  p-6 shadow-lg  bg-white"
            >
              <Image alt="card" width={300} height={200} src={sport.image} />
              <div>
                <h1 className="text-lg font-semibold ">{sport.title}</h1>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Events
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {sport.events} Events
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className=" text-gray-500 dark:text-gray-400">sport</p>
                    <p className=" text-gray-500 dark:text-gray-400">
                      {sport.sports}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            <Image
              alt="card"
              width={200}
              height={200}
              src="https://i.ibb.co/KL5rwtX/unnamed-1-1.png"
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quas
              illum dignissimos laboriosam veritatis saepe at ratione labore ad
              ullam.
            </p>
        </div>   
      </div>
     <div className="text-center mt-6">
     <button className="bg-blue-500 text-white px-2 py-1">See More</button>
     </div>
    </div>
  );
};

export default Sports;
