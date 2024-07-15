import React from "react";

const Hero = () =>{
    return (
     
            <div className=" h-screen bg-white">            
            <div className=" pt-[15%] pl-[5%] ">
                <h1 className="text-black text-5xl font-bold pb-2 ">Welcome to the Page</h1>
                <h3 className="text-base">Click on explore more</h3>
                <div className="pt-3">
                <button className="rounded bg-black text-white h-8 px-2 hover:bg-red-700"><a href="/course">View Courses</a></button>
                </div>
                
            </div>
            <div className="absolute left-[50%] top-[25%] pr-8">
            <img src="./library.jpg" alt="image" className="h-[50%] w-[100%] "/>                

            </div>

        </div>
    )
};
export default Hero;