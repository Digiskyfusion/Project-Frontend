import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles
import { CiSettings } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';
import overview from './../../assets/Images/a-minimalistic-square-icon-with-a-chart-line-graph (1) 1.png';
import { Link } from 'react-router-dom';

const card = [
    {
        imgae: overview,
        heading: "90%",
        paragraph:"Completed"
    },
    {
        imgae: overview,
        heading: "90%",
        paragraph:"Completed"
    },
    {
        imgae: overview,
        heading: "90%",
        paragraph:"Completed"
    },
    {
        imgae: overview,
        heading: "90%",
        paragraph:"Completed"
    },
    {
        imgae: overview,
        heading: "90%",
        paragraph:"Completed"
    },
    {
        imgae: overview,
        heading: "90%",
        paragraph:"Completed"
    },
];

const progress = [
    {
        name:"Priya Soni",
        skill:"Mern Stack",
        worktime: "12 hours",
        day:"Six Days"
    },
    {
        name:"Manisha ",
        skill:"FrontEnd Developer",
        worktime: "12 hours",
        day:"Six Days"
    },
    {
        name:"Manish",
        skill:"BackEnd Developer",
        worktime: "12 hours",
        day:"Six Days"
    },
    {
        name:"Amandeep Singh",
        skill:"UI/UX Designer",
        worktime: "12 hours",
        day:"Six Days"
    },
    {
        name:"Parmeet Kaur",
        skill:"Graphic Designer",
        worktime: "12 hours",
        day:"Six Days"
    },
    {
        name:"Jashan Singh",
        skill:"UI/UX Designer",
        worktime: "12 hours",
        day:"Six Days"
    },
    {
        name:"Jasmeet Kaur",
        skill:"Content Writer",
        worktime: "12 hours",
        day:"Six Days"
    },
    {
        name:"Karan Sir",
        skill:"Manager",
        worktime: "19 hours",
        day:"Seven Days"
    },
];

function MainDashboard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='bg-[#EBEEF2] px-4 md:px-8  py-4 w-full'>

        {/* {/ Header Section /} */}
        <div className='flex flex-wrap justify-between items-center w-full'>
            <div>
                <h1 className='text-sm md:text-xl font-bold'>Dashboard</h1>
                <p className='text-gray-600'>Welcome “Name” everything looks great</p>
            </div>

            <div className='flex flex-wrap gap-4 mt-2 md:mt-0'>
                <div className='flex gap-1 items-center'>
                    <CiSettings className="text-[#004930] text-xl" />
                    <p>Time</p>
                    <IoIosArrowDown className="text-[#004930] text-xl" />
                </div>

                <div className='flex gap-1 items-center'>
                    <CiSettings className="text-[#004930] text-xl" />
                    <p>Settings</p>
                </div>
            </div>
        </div>

        {/* {/ Overview and Calendar /} */}
        <div className='lg:flex lg:justify-between mt-5 gap-6'>

            {/* {/ Overview Section /} */}
            <div className="w-full md:w-2/3">
                <h1 className='text-lg font-semibold'>Overview</h1>

                {/* {/ Cards /} */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mt-3">
                    {card.map((current, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center gap-4 lg:gap-7 cursor-pointer hover:bg-[#004930] hover:text-white text-[#004930] border-2 border-[#004930] px-1 py-2 lg:px-4 rounded-xl"
                        >
                            <img loading="lazy" src={current.imgae} alt="Overview" className="w-12 h-12 object-cover" />
                            <div>
                                <h1 className="text-lg font-semibold">{current.heading}</h1>
                                <p>{current.paragraph}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* {/ Progress Section /} */}
                <div className="mt-6">
                    <div className="flex flex-wrap justify-between items-center gap-2">
                        <h1 className="text-lg font-semibold">Progress</h1>
                        <button className="border-2 border-[#004930] text-[#004930] hover:bg-[#004930] hover:text-white px-3 py-1 rounded-full text-sm cursor-pointer">
                           <Link to="/ClientProfile">See More</Link> 
                        </button>
                    </div>

                    {/* {/ Table Header /} */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-gray-700 mt-5 text-sm font-medium border-b-2 border-[#D9D9D9] pb-2">
                        <h1>Full Name</h1>
                        <h1>Skill</h1>
                        <h1 className="hidden md:block">Work-time</h1>
                        <h1 className="hidden md:block">Day</h1>
                    </div>

                    {/* {/ Table Content /} */}
                    <div>
                        {progress.map((current, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-black mt-3 text-sm border-b-2 border-[#D9D9D9] pb-3"
                            >
                                <p>{current.name}</p>
                                <p>{current.skill}</p>
                                <p className="hidden md:block">{current.worktime}</p>
                                <p className="hidden md:block">{current.day}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* {/ Calendar Section /} */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/3 flex flex-col mt-6 md:mt-0 p-4 rounded-lg shadow-lg"
            >
                <h1 className="text-lg font-semibold mb-2">Calendar</h1>
                <Calendar onChange={setDate} value={date} className="border rounded-lg p-2  hidden sm:block" />
                <p className="mt-3  text-sm font-medium">Selected Date: {date.toDateString()}</p>
                <img loading="lazy" src="https://img.freepik.com/free-vector/twitter-interface_23-2148607516.jpg?t=st=1740296535~exp=1740300135~hmac=d18e13383721e83d375689d5d09a89f37f022cfc43861a5830197bd75738fb35&w=1380" alt="Calendar details" className='w-full max-w-xs rounded-xl lg:max-w-full object-cover mt-4' />
            </motion.div>

        </div>
    </div>
  );
}

export default MainDashboard;
