import { GoPerson } from "react-icons/go";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";

const ReviewCard = (props) => {
    const {review} = props
    const {reviewer,rating,quote,date} = review
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full border-b-2 py-4">
            {/* name and date */}
            <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center gap-2">
                    <GoPerson />
                    <h1>{reviewer}</h1>
                </div>
                {/* date */}
                <div>
                    <p>
                        {date}
                    </p>
                </div>
            </div>
            {/* rating */}
            <div className="flex justify-start items-start gap-4 w-full">
                <img src="/src/assets/icons/rating.png" alt="" />
                <p>{rating}</p>
            </div>
            {/* quote */}
            <p className="w-full ">
                {quote}
            </p>
            {/* was this helpful? */}
            <div className="flex justify-end items-center gap-3 w-full">
                <p>Was this helpful ? </p>
                <FaRegThumbsUp />
                <FaRegThumbsDown />

            </div>


        </div>
    )
}

export default ReviewCard