"use client"
import { useEffect, useState } from 'react';
import { getAllSports } from '@/components/utils/getAllSports';
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
                console.error('Error fetching sports data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(sportsData);

    return (
        <div>
            <p>Welcome to the Sports section</p>
            {/* Render your sports data here */}
        </div>
    );
};

export default Sports;
