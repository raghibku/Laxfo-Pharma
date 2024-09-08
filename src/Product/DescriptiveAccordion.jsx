const AccordianContent = [
    {
        title: "Benefits",
        desc: ["Supports anti aging", "Boost collagen production"]
    },
    {
        title: "Ingredients",
        desc: ["Supports anti aging", "Boost collagen production"]
    },
    {
        title: "How to Use",
        desc: ["Supports anti aging", "Boost collagen production"]
    },
    {
        title: "Cautions",
        desc: ["Supports anti aging", "Boost collagen production"]
    },
    {
        title: "Shipping and Returns",
        desc: ["Supports anti aging", "Boost collagen production"]
    },
]

const DescriptiveAccordion = () => {
    return (
        <div className="text-[16px]">
            <div className="max-w-custom w-full mx-auto py-10 px-12 ">
                {/* inner Container */}
                <div className="w-full flex justify-center items-center">
                    {/* accordian */}
                    <div className="w-[55%]">
                        {
                            AccordianContent.map((item) => {
                                return (
                                    <div className="collapse collapse-plus p-2">
                                        <input type="radio" name="my-accordion-3" />
                                        <div className="collapse-title text-xl font-medium">{item.title}</div>
                                        <div className="collapse-content">
                                            {
                                                item.desc.map(desc=><p>{desc}</p>)
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                    {/* Image */}
                    <div className="w-[45%]">
                        <img src="/src/assets/images/desc-accord-image.png" className="w-full" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptiveAccordion