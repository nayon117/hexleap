"use client";
import { getAllCollection } from "@/components/utils/getAllCollection";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CollectionData {
  _id: number;
  image: string;
  title: string;
  description: string;
  button_text: string;
}

const Collection = () => {
  const [collections, setCollections] = useState<CollectionData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCollection();
        setCollections(data);
      } catch (error) {
        console.error("Error fetching collection data:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="section-container py-6">
      <div className="text-center space-y-3">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">Collection Spotlight</h1>
        <p>
          Discover extraordinary moments with our spotlight collection
          metatickets-exclusive access to premium events for an unforgettable <br/>
          exprience. Grab yours today!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collections.map((collection) => (
          <div
            key={collection._id}
            className=" space-y-4 rounded-lg  p-6 shadow-lg  bg-white"
          >
            <Image alt="card" width={300} height={200} src={collection.image} />
            <div className="space-y-3 text-center">
              <h1 className="text-lg font-semibold ">{collection.title}</h1>
              <p className="text-sm font-medium">OCT 15 | SUN | 4:30PM</p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
              {collection.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
              </p>

              <button className="w-full bg-black text-white px-2 py-1">
                {collection.button_text}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Collection;
