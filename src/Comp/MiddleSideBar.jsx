import React from 'react';
import { FaBagShopping } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";



const MiddleSideBar = () => {
    return (
        <div className="w-3/5 max-[910px]:w-4/5 shrink-1 md:pr-16 lg:pr-0 md:mt-5">

            <div className="flex justify-between md:hidden">
                <div className="my-[1.5rem]">
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
                <div className="mt-[2rem] pt-2">
                    <img src="/assets/img15.png" className="rounded-full h-[56px]" /></div>
            </div>

            <LocationAndSearch />
            {/* grey box */}
            <div>
                <div className="bg-[#CCCCCC] h-24 md:h-56 border-black mt-4 rounded-xl w-full"></div>
            </div>

            {/* buy new , refurbished, flexibly */}
            <div className="flex mt-4 md:mt-8 overflow-x-auto ">
                <div className="bg-gradient-to-r from-[#E9ECFF] to-[#ABB8FF] rounded-xl w-1/3 h-auto text-center">
                    <div className="text-[#4562FF] font-bold md:text-xl text-xs p-2 md:p-4 rounded-xl">
                        Buy New
                    </div>
                    <div className="text-slate-500 p-2 md:p-4 font-medium md:mt-5 text-[.8rem]">
                        Authorized and tested Equipment
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[#F9E9FF] to-[#EEABFF] rounded-xl w-1/3 h-auto mx-1 text-center">
                    <div className="text-[#CC00FF] font-bold md:text-2xl text-xs p-2 md:p-4 rounded-xl md:text-xl text-xs">
                        Buy Refurbished
                    </div>
                    <div className="text-slate-500 p-1 md:p-3 font-medium md:mt-5 text-[.8rem] p-4">
                        Affordable yet Efficient
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[#F0FFE9] to-[#D5FFAB] rounded-xl w-1/3 h-auto mx- text-center">
                    <div className="text-[#1B6700] font-bold md:text-xl text-xs text-[11px] p-2 md:p-4 rounded-xl">
                        Rent Flexibly
                    </div>
                    <div className="text-slate-500 p-2 md:p-4 font-medium md:mt-5 text-[.8rem]">
                        Efficiency without Commitment
                    </div>
                </div>
            </div>

            {/* Browse by Category */}
            <div className="flex mt-4 items-center w-full">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
                <div className="font-bold text-xl md:text-2xl m-3">Browse by Category</div>
                <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
            </div>

            {/* category */}
            <div className="flex justify-around overflow-x-auto overflow-y-hidden">
                <div className="flex flex-col items-center ">
                    <img
                        src="./public/assets/img1.png"
                        className="rounded-xl md:w-[160px] md:h-[160px] w-24 h-24"
                    />
                    <p className="text-sm md:text-lg font-medium text-center my-2">Ultrasound Therapy</p>
                </div>

                <div className="flex flex-col items-center mx-3">
                    <img
                        src="./public/assets/img2.png"
                        className="rounded-xl md:w-[160px] md:h-[160px] w-24 h-24"
                    />
                    <p className="text-sm md:text-lg font-medium text-center my-2">Electro Therapy</p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src="./public/assets/img3.png"
                        className="rounded-xl md:w-[160px] md:h-[160px] w-24 h-24"
                    />
                    <p className="text-sm md:text-lg font-medium text-center my-2">Electro Therapy</p>
                </div>

                <div className="flex flex-col items-center mx-2 ">
                    <img
                        src="./public/assets/img4.png"
                        className="rounded-xl md:w-[160px] md:h-[160px] w-24 h-24"
                    />
                    <p className="text-sm md:text-lg font-medium text-center my-2">Electro Therapy</p>
                </div>
            </div>

            {/* single line */}
            <div className="w-full h-[1px] text-[#CCCCCC] bg-slate-300 my-3"></div>

            <SpecialistFavorites />

            {/* single line */}
            <div className="w-full h-[1px] text-[#CCCCCC] bg-slate-300 my-4"></div>

            {/* top selling */}
            <div className="flex mt-3 items-center w-full ">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
                <div className="font-[500] text-3xl m-3">Top Selling</div>
                <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
            </div>

            {/* top selling component */}
            <div className="flex overflow-x-auto overflow-y-hidden">
                <div className="bg-[#F6F6F6] w-1/3 h-auto rounded-[12px] mx-4">
                    <div className="h-auto p-3">
                        <img
                            src="./assets/img8.png"
                            className="object-cover h-44 md:h-auto w-full rounded-[16px]"
                        />
                    </div>
                    <p className="w-[100px] md:w-[139px] h-[24px] font-[600] md:text-lg text-xs mx-3 my-2">
                        Knee Bandage
                    </p>
                    <p className="w-[100px] h-[24px] font-[400] text-xs mx-3">
                        Starts from
                    </p>
                    <p className="w-[100px] h-[30px] sm:font-[800] text-xs md:text-xl mx-3">
                        ₹100 - ₹1,300
                    </p>
                    <div className="flex justify-center">
                        <button className="border border-[#9B5DFF] w-[217px] p-[8px] md:p-[12px] rounded-[8px] text-[#9B5DFF] font-medium text-lg md:text-2xl my-2">
                            Explore
                        </button>
                    </div>
                </div>

                <div className="bg-[#F6F6F6] w-1/3 h-auto rounded-[12px] mx-4">
                    <div className="h-auto p-3">
                        <img
                            src="./assets/img8.png"
                            className="object-cover h-44 md:h-auto w-full rounded-[16px]"
                        />
                    </div>
                    <p className="w-[100px] md:w-[139px] h-[24px] font-[600] md:text-lg text-xs mx-3 my-2">
                        Knee Bandage
                    </p>
                    <p className="w-[100px] h-[24px] font-[400] text-xs mx-3">
                        Starts from
                    </p>
                    <p className="w-[100px] h-[30px] sm:font-[800] text-xs md:text-xl mx-3">
                        ₹100 - ₹1,300
                    </p>
                    <div className="flex justify-center">
                        <button className="border border-[#9B5DFF] w-[217px] p-[8px] md:p-[12px] rounded-[8px] text-[#9B5DFF] font-medium text-lg md:text-2xl my-2">
                            Explore
                        </button>
                    </div>
                </div>

                <div className="bg-[#F6F6F6] w-1/3 h-auto rounded-[12px] mx-4">
                    <div className="h-auto p-3">
                        <img
                            src="./assets/img8.png"
                            className="object-cover h-44 md:h-auto w-full rounded-[16px]"
                        />
                    </div>
                    <p className="w-[100px] md:w-[139px] h-[24px] font-[600] md:text-lg text-xs mx-3 my-2">
                        Knee Bandage
                    </p>
                    <p className="w-[100px] h-[24px] font-[400] text-xs mx-3">
                        Starts from
                    </p>
                    <p className="w-[100px] h-[30px] sm:font-[800] text-xs md:text-xl mx-3">
                        ₹100 - ₹1,300
                    </p>
                    <div className="flex justify-center">
                        <button className="border border-[#9B5DFF] w-[217px] p-[8px] md:p-[12px] rounded-[8px] text-[#9B5DFF] font-medium text-lg md:text-2xl my-2">
                            Explore
                        </button>
                    </div>
                </div>
            </div>

            {/* single line */}
            <div className="w-full h-[1px] text-[#CCCCCC] bg-slate-300 my-8"></div>

            {/* Featured Brand */}
            <div className="flex mt-3 items-center w-full overflow-x-auto overflow-y-hidden">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
                <div className="font-[500] text-3xl m-3">Featured Brand</div>
                <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
            </div>

            {/* Brand logo */}
            <div className="flex justify-between items-center gap-x-1 my-3 sm:my-6 overflow-x-auto overflow-y-hidden">
                <div className="w-[172.14px] h-auto mx-1">
                    <img
                        src="/assets/img9.png"
                        className="rounded-full shadow-2xl rounded-full "
                    />
                </div>
                <div className="w-[172.14px] h-auto mx-1">
                    {" "}
                    <img
                        src="/assets/img10.png"
                        className="rounded-full shadow-2xl"
                    />
                </div>
                <div className="w-[172.14px] h-auto mx-1">
                    {" "}
                    <img
                        src="/assets/img11.png"
                        className="rounded-full shadow-2xl"
                    />
                </div>
                <div className="w-[172.14px] h-auto mx-1">
                    {" "}
                    <img
                        src="/assets/img12.png"
                        className="rounded-full shadow-2xl"
                    />
                </div>
            </div>

            {/* single line */}
            <div className="w-full h-[1px] text-[#CCCCCC] bg-slate-300 my-8"></div>

            {/* Popular activities */}
            <div className="flex mt-3 items-center w-full overflow-x-auto overflow-y-hidden">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#808080] flex-1 h-[1px]"></div>
                <div className="font-[500]  text-3xl m-3">Popular Activities</div>
                <div className="bg-gradient-to-r from-[#808080] to-[#FFFFFF] flex-1 h-[1px]"></div>
            </div>

            <Activites />
            {/* last div */}
        </div>

    )
}

export default MiddleSideBar;
