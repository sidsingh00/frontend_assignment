import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const LocationAndSearch = () => {
    return (
        <>
            {/* location and search */}
            <div className="flex flex-col-reverse lg:flex-row">
                {/* location */}
                <div className="flex justify-between items-center text-sm md:text-xl bg-slate-100 h-[52px] p-2 rounded-full min-w-52 my-5 md:my-5 md:mr-3 w-full">
                    <div className="flex items-center ">
                        <FaLocationDot className="text-lg" style={{ color: "#9B5DFF" }} />
                        <div className="px-[15px] text-slate-500 text-sm font-medium ">
                            Deliver to: <span className="text-black">Noida, 201309</span>
                        </div>
                    </div>
                    <div>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>

                {/* search box */}
                <div className="flex justify-between items-center md:mt-5 text-2xl bg-slate-100 h-[52px] w-full p-3 rounded-xl md:mr-0">
                    <div className="flex items-center justify-center">
                        <CiSearch className="text-xl text-black font-medium	" />
                        <div>
                            <input
                                placeholder="Search for Product or Store"
                                className="m-2 p-2 w-full bg-slate-100 text-sm font-medium border-none"
                            ></input>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LocationAndSearch;
