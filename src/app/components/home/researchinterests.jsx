import React from 'react'

export default function ResearchInterests() {
  const lists = [
    'How flatness, sharpness, and curvature shape neural network generalization',
    'How models behave under distribution shifts and adversarial settings',
    'How to build optimization methods that encourage stable and reliable solutions',
    'How large vision and language systems can be made more robust in low-resource contexts',
  ]
  return (
    <div className=" w-full max-h-full  flex flex-col gap-y-4 justify-start items-start ">
      {/* <h4 className="font-pbold text-2xl  md:text-3xl  text-gray-700">
          Research Focus
        </h4> */}
      <h5 className=" text-gray-700  font-pregular text-xl  md:text-2xl ">
        My Research Interests
      </h5>
      <p className="text-gray-700 font-pthin text-base md:text-lg   md:w-[80%]">
        My work sits at the intersection of machine learning theory,
        optimization, and reliable AI. I investigate foundational questions such
        as:
      </p>
      <div className=" flex flex-col gap-y-3 ">
        {lists.map((list) => (
          <ol className="  text-gray-700 font-pregular text-lg  list-disc  px-9">
            <li>{list}</li>
          </ol>
        ))}
      </div>
    </div>
  )
}
