import React from 'react';
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineArrowCircleRight } from "react-icons/hi";


const RightSideBar = () => {
    return (
        <div className="flex w-1/5 max-[910px]:hidden">
            <div className=" flex flex-col ">
                <div className=" mt-[3rem] flex justify-end">
                    <img src="/assets/img15.png" className="rounded-full h-[56px]" />
                </div>
                <div className="h-fit  border-[#CCCCCC] border-[1px] rounded-[16px] flex items-center justify-between my-7 ml-2">
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

export default RightSideBar
