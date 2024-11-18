import React from 'react';
import { MdHome } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineArrowCircleRight } from "react-icons/hi";


const LeftSideBar = () => {
    return (
        <div
            className="w-1/5 min-w-[220px] hidden md:block"
        // style={{ border: "2px solid black" }}
        >

            <div className="m-[2rem]">
                <div className="flex flex-row items-center ">
                    <div style={{ margin: "10px 0px" }}>
                        <FaBagShopping
                            className="w-auto h-8 m-2"
                            style={{ color: "#9B5DFF" }}
                        />
                    </div>

                    <div
                        className="flex font-bold text-[15px] md:text-xl "
                        style={{ color: "#9B5DFF" }}
                    >
                        <h3 className="my-4 ">shop</h3>
                        <div className="border-r-2 mx-2 h-16 border-black text-[15px] md:text-xl"></div>
                    </div>

                    <div>
                        <div className="font-bold text-[15px] md:text-xl">Back to</div>
                        <p
                            className="font-bold text-[15px] md:text-xl flex"
                            style={{ color: "#9B5DFF" }}
                        >
                            p<span className="text-black text-[15px] lg:text-xl">fit</span>
                            <IoArrowForwardCircleOutline className="text-black mt-2 ms-2 h-[20px] w-[20px] text-[15px] md:text-xl" />
                        </p>
                    </div>
                </div>
            </div>

            <div className="m-[2rem] flex " style={{ color: "#9B5DFF" }}>
                <div
                    className="border-2 flex w-[200px] rounded-full"
                    style={{ borderColor: "#9B5DFF" }}
                >
                    <MdHome className="w-[25px] h-[25px] m-[10px]" />
                    <p className="m-[8px] text-lg font-bold">Home</p>
                </div>
            </div>

            <div className="m-[2rem] flex">
                <div className="flex w-[200px] " style={{ borderColor: "#9B5DFF" }}>
                    <MdOutlineLocalOffer className="w-[25px] h-[25px] m-[10px]" />
                    <p className="m-[8px] text-lg font-bold">Buy</p>
                </div>
            </div>

            <div className="m-[2rem] flex">
                <div
                    className="flex w-[200px] rounded-full"
                    style={{ borderColor: "#9B5DFF" }}
                >
                    <CiClock2 className="w-[25px] h-[25px] m-[10px]" />
                    <p className="m-[8px] text-lg font-bold">Rent</p>
                </div>
            </div>

            <div className="m-[2rem] flex">
                <div className="flex w-[200px] rounded-full">
                    <CiBookmark className="w-[25px] h-[25px] m-[10px]" />
                    <p className="m-[8px] text-lg font-bold">Saved</p>
                </div>
            </div>

            <div className="m-[2rem] flex">
                <div className="flex w-[200px] rounded-full">
                    <AiOutlineShoppingCart className="w-[25px] h-[25px] m-[10px]" />
                    <p className="m-[8px] text-lg font-bold">Cart</p>
                </div>
            </div>

            <div className="m-[1rem] flex">
                <div className="h-fit  border-[#CCCCCC] border-[1px] rounded-[16px] flex items-center justify-between my-7 ml-2 min-[910px]:hidden">
                    <div className="flex items-center ">
                        <RiCustomerService2Fill className="w-[24px] h-[24px] text-[#9B5DFF] m-3" />
                        <div className="  text-[#9B5DFF] font-medium">Help Center</div>
                    </div>
                    <div>
                        <HiOutlineArrowCircleRight className="size-[24px] text-[#9B5DFF] mr-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar
