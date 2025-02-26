import React from 'react'
import first from './../assets/Images/a-clean-and-modern-skillset-dashboard-with-a-circu (1) (1) 1.png';
import fourth from './../assets/Images/a-sleek-and-minimalistic-ui-card-with-a-modern-des (1) 1.png';
    import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
    import profile from './../assets/Images/Ellipse 79.png';
    import { MdEmail } from "react-icons/md";
    import { IoMdCall } from "react-icons/io";
    import { IoIosArrowDropupCircle } from "react-icons/io";


    const data = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 500 },
        { name: 'Apr', value: 200 },
        { name: 'May', value: 600 },
    ];
    
function SectionImage() {
  return (
    <>
    <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-10 mt-6">
        
                        <img src={first} alt="" className="w-full rounded-lg shadow-md" />
                        
        
                        {/* {/ Bar Chart Replacing Second Image /} */}
                        <div className="w-full bg-white rounded-lg shadow-md p-4 md:py-10">
                                    <h2 className="text-center font-semibold mb-2">Monthly Growth</h2>
                                    <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={data}>
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="value" fill="#185640" />
                                    </BarChart>
                                    </ResponsiveContainer>
                                </div>
        
                                    {/* {/ Freelancer Profile Card - Replacing Third Image /} */}
                                        <div className="w-full bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
                                            <img 
                                            src={profile} // Replace with actual freelancer image
                                            alt="Freelancer Profile"
                                            className="w-24 h-24 rounded-full object-cover mb-3"
                                            />
                                            <h2 className="text-lg font-semibold">John Doe</h2>
                                            <p className="text-gray-600 text-sm">Software Engineer</p>
                                            <p className="text-gray-500 text-xs">Tech Corp</p>
                                            <p className="text-gray-500 text-xs">Joined: Jan 2022</p>
                                            <p className="text-gray-700 text-sm mt-2">Current Task: UI Redesign</p>
        
                                            {/* {/ Icons for Call, Message, Email /} */}
                                            <div className="flex gap-4 mt-3 text-[#185640]">
                                            <a href="#" className="hover:text-gray-800">
                                            <IoMdCall />
                                            </a>
                                            <a href="#" className="hover:text-gray-800">
                                            <MdEmail />
                                            </a>
                                            <a href="#" className="hover:text-gray-800">
                                            <IoIosArrowDropupCircle />
                                            </a>
                                            </div>
                                        </div>
        
                        <img src={fourth} alt="" className="w-full rounded-lg shadow-md" />
        
                    </div>
    </div>
      
    </>
  )
}

export default SectionImage
