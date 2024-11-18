import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const Activites = () => {
    return (
        <div className="flex my-6 justify-between overflow-x-auto overflow-y-hidden">

            <div className="mt-4">
                <div className='bg-[#F6F6F6] rounded-xl w-[300px] h-auto p-2'>
                    <div>
                        <img
                            src="/assets/img13.jpg"
                            className="rounded-xl object-cover h-48 w-full px-2"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between m-3">
                            <div>
                                <div className="mb-1 font-medium sm:text-xs text-xl sm:mr-2">Sleep</div>
                                <div className="text-slate-600 text-xs sm:text-lg">4 Items</div>
                            </div>
                            <div className="w-[48px] h-[45px] sm:w-[32px] sm:h-[20px] rounded-full bg-[#9B5DFF] mt-1 flex items-center justify-center ml-2">
                                <HiArrowRight className="text-[white] w-[24px] h-[24px]
                            sm:w-[20px] sm:h-[10px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 mx-2">
                <div className='bg-[#F6F6F6] rounded-xl w-[300px] h-auto p-2'>
                    <div>
                        <img
                            src="/assets/img13.jpg"
                            className="rounded-xl object-cover h-48 w-full px-2"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between m-3">
                            <div>
                                <div className="mb-1 font-medium sm:text-xs text-xl sm:mr-2">Sleep</div>
                                <div className="text-slate-600 text-xs sm:text-lg">4 Items</div>
                            </div>
                            <div className="w-[48px] h-[45px] sm:w-[32px] sm:h-[20px] rounded-full bg-[#9B5DFF] mt-1 flex items-center justify-center ml-2">
                                <HiArrowRight className="text-[white] w-[24px] h-[24px]
                            sm:w-[20px] sm:h-[10px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-4">
                <div className='bg-[#F6F6F6] rounded-xl w-[300px] h-auto p-2'>
                    <div>
                        <img
                            src="/assets/img13.jpg"
                            className="rounded-xl object-cover h-48 w-full px-2"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between m-3">
                            <div>
                                <div className="mb-1 font-medium sm:text-xs text-xl sm:mr-2">Sleep</div>
                                <div className="text-slate-600 text-xs sm:text-lg">4 Items</div>
                            </div>
                            <div className="w-[48px] h-[45px] sm:w-[32px] sm:h-[20px] rounded-full bg-[#9B5DFF] mt-1 flex items-center justify-center ml-2">
                                <HiArrowRight className="text-[white] w-[24px] h-[24px]
                            sm:w-[20px] sm:h-[10px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activites
