import React from 'react'
import Cap from '../shared/Cap'

export default function Hero() {
  return (
    <Cap heroStyle={{ backgroundImage: `url('/assets/images/insights.jpg')` }}>
      <div className=" flex flex-col gap-y-6 justify-center items-center  p-2  absolute w-full min-h-[300px] bg-black bg-opacity-70 ">
        <h3 className="font-pbold font-bold text-3xl text-center  text-wrap">
          Insights
        </h3>
      </div>
    </Cap>
  )
}
