import React from 'react';
import { FaBagShopping } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";

const SpecialistFavorites = () => {
    return (
        <div className="bg-gradient-to-r from-[#853CA8] to-[#B85DFF] overflow-x-auto overflow-y-hidden h-[530px] md:h-[580px] rounded-xl">
            {/* Specialist Favorites */}
            <div className="flex mt-3 items-center w-full overflow-x-auto overflow-y-hidden">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
                <div className="md:font-bold text-3xl m-3 text-white font-medium">Specialist Favorites</div>
                <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
            </div>

            {/* favorites */}
            <div className="flex justify-evenly overflow-x-auto overflow-y-hidden ">
                <div className="md:h-[450px] h-[390px] w-[316px] bg-[#F6F6F6] mt-4 rounded-[16px] mx-2">
                    <div>
                        <div className="md:h-[350px] h-[300px]">
                            <img
                                src="/assets/img5.png"
                                className="object-cover h-full w-full rounded-[16px]"
                            />
                            <div className="flex justify-between m-3">
                                <div>
                                    <div className="mb-2 font-medium md:text-lg text-sm">
                                        Gym Equipments
                                    </div>
                                    <div className="flex flex-row text-slate-500 text-sm md:text-sm text-nowrap">
                                        Starting at
                                        <span className="text-[#9B5DFF] mx-1 font-medium">
                                            ₹300
                                        </span>
                                    </div>
                                </div>
                                <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] md:mt-2 flex justify-center items-center">
                                    <HiArrowRight className="text-[white] w-[24px] h-[24px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:h-[450px] h-[390px] w-[316px] bg-[#F6F6F6] mt-4 rounded-[16px] mx-2">
                    <div>
                        <div className="md:h-[350px] h-[300px]">
                            <img
                                src="./public/assets/img6.png"
                                className="object-cover h-full w-full rounded-[16px]"
                            />
                            <div className="flex justify-between m-3">
                                <div>
                                    <div className="mb-2 font-medium md:text-lg text-sm">
                                        Gym Equipments
                                    </div>
                                    <div className="flex flex-row text-slate-500 text-sm md:text-sm text-nowrap">
                                        Starting at
                                        <span className="text-[#9B5DFF] mx-1 font-medium">
                                            ₹300
                                        </span>
                                    </div>
                                </div>
                                <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] md:mt-2 flex justify-center items-center">
                                    <HiArrowRight className="text-[white] w-[24px] h-[24px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:h-[450px] h-[390px] w-[316px] bg-[#F6F6F6] mt-4 rounded-[16px] mx-2">
                    <div>
                        <div className="md:h-[350px] h-[300px]">
                            <img
                                src="./public/assets/img7.png"
                                className="object-cover h-full w-full rounded-[16px]"
                            />
                            <div className="flex justify-between m-3">
                                <div>
                                    <div className="mb-2 font-medium md:text-lg text-sm">
                                        Gym Equipments
                                    </div>
                                    <div className="flex flex-row text-slate-500 text-sm md:text-sm text-nowrap">
                                        Starting at
                                        <span className="text-[#9B5DFF] mx-1 font-medium">
                                            ₹300
                                        </span>
                                    </div>
                                </div>
                                <div className="w-[48px] h-[45px] rounded-full bg-[#9B5DFF] md:mt-2 flex justify-center items-center">
                                    <HiArrowRight className="text-[white] w-[24px] h-[24px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SpecialistFavorites
