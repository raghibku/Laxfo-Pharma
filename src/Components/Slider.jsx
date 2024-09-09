import { useRef } from "react";


const Slider = () => {
    const carouselRef = useRef(null); // Reference to the slider/carousel

    const handleRightArrowClick = () => {
        // Focus on the carousel element
        if (carouselRef.current) {
            carouselRef.current.focus(); // Focus on the slider before simulating key press
        }

        // Dispatch a 'keydown' event to simulate pressing the right arrow key
        const rightArrowEvent = new KeyboardEvent('keydown', {
            key: 'ArrowRight',
            keyCode: 39,
            code: 'ArrowRight',
            which: 39,
            bubbles: true,
        });

        if (carouselRef.current) {
            carouselRef.current.dispatchEvent(rightArrowEvent); // Dispatch the event to the slider
        }
    };



    return (
        <div className="w-full flex justify-between items-center ">
            <button>
                <img src="/src/assets/icons/slider-l.png" className="h-[34px] w-[34px]" alt="" />
            </button>
            {/* slider */}
            <div ref={carouselRef}
                tabIndex="0" className="carousel carousel-center bg-transparent rounded-box w-[60%] lg:w-full max-w-md space-x-4 p-4 ">
                <div className="carousel-item">
                    <img
                        src="/src/assets/images/slider-image-4.png"
                        className=" h-[95px] w-[95px]" />
                </div>
                <div className="carousel-item">
                    <img
                        src="/src/assets/images/slider-image-1.png"
                        className=" h-[95px] w-[95px]" />
                </div>
                <div className="carousel-item">
                    <img
                        src="/src/assets/images/slider-image-2.png"
                        className=" h-[95px] w-[95px]" />
                </div>
                <div className="carousel-item">
                    <img
                        src="/src/assets/images/slider-image-3.png"
                        className=" h-[95px] w-[95px]" />
                </div>
                <div className="carousel-item">
                    <img
                        src="/src/assets/images/slider-image-4.png"
                        className=" h-[95px] w-[95px]" />
                </div>
                <div className="carousel-item">
                    <img
                        src="/src/assets/images/slider-image-1.png"
                        className=" h-[95px] w-[95px]" />
                </div>

            </div>

            <button onClick={handleRightArrowClick}>
                <img src="/src/assets/icons/slider-r.png" className="h-[34px] w-[34px]" alt="" />
            </button>
        </div>
    )
}

export default Slider