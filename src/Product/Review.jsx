import { CiSearch } from "react-icons/ci";
import { BiSolidDownArrow } from "react-icons/bi";

import ReviewCard from "../Components/ReviewCard";
import { ReviewsList } from "../constants";


const Review = () => {
    return (
        <div className="text-[16px]  ">
            <div className="max-w-custom w-full mx-auto py-10 px-4 md:px-12 ">
                {/* innerdiv */}
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="w-full">
                        <h1 className="text-[40px]  ">Reviews</h1>
                    </div>
                    {/* write search */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-0 w-full">
                        {/* left */}
                        <div>
                            <button className="w-[180px] h-[50px] text-center bg-accent text-white">
                                Write a Review
                            </button>
                        </div>
                        {/* right */}
                        <div className="flex flex-col justify-start items-start gap-2">
                            {/* upper */}
                            <div className="border-b-2 border-primaryText">
                                Filter Reviews
                            </div>
                            {/* lower */}
                            <div className="flex justify-center items-center gap-2">
                                {/* search */}
                                <div className="bg-accent text-white flex justify-center items-center w-[180px] mg:w-[220px] h-[34px]">
                                    <input type="search" className="bg-transparent border-none w-[70%]" placeholder="search" />
                                    <CiSearch />
                                </div>
                                {/* image n videos */}
                                <div className="border border-primaryText flex justify-center items-center w-[180px] mg:w-[220px] h-[34px] gap-2">
                                    <p>Images and Videos</p>
                                    <BiSolidDownArrow />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* reviews */}
                    <div className="flex flex-col justify-center items-center gap-4 w-full">

                        {/* review card */}
                        {
                            ReviewsList.map((item)=>{
                                return(
                                    <ReviewCard review={item}/>
                                )
                            })
                        }
                        

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Review