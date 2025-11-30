import {
  faBrain,
  faCubes,
  faGlobe,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Contributions() {
  const cards = [
    {
      icon: faBrain,
      text: (
        <span>
          Flatness-aware regularization for imspanroving model generalization
        </span>
      ),
    },
    {
      icon: faGlobe,
      text: (
        <span>
          African multilingual image captioning, bridging the gap in
          low-resource multimodal datasets
        </span>
      ),
    },

    {
      icon: faCubes,
      text: (
        <span>
          Data augmentation for low-resource machine translation, enabling
          better cross-lingual transfer
        </span>
      ),
    },

    {
      icon: faProjectDiagram,
      text: (
        <span>
          Causal domain generalization, focusing on stable feature extraction
          under shifting distributions
        </span>
      ),
    },
  ]
  return (
    <div className=" w-full max-h-full  flex flex-col gap-y-4 justify-start items-start ">
      <div className="title flex flex-col gap-y-4">
        <h5 className=" text-gray-700  font-pregular text-xl  md:text-2xl ">
          Research Contributions
        </h5>
        <div className="cards-container flex flex-row gap-x-5 gap-y-6  justify-start items-start  p-2  flex-wrap ">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" w-[220px]  h-[120px]  bg-white flex flex-col justify-center items-center p-4  rounded-md  border border-primary   drop-shadow-sm  shadow-violet-950 
              hover:scale-105 transform duration-1000  md:hover:-translate-y-2"
            >
              <div className=" flex justify-center  items-center">
                <FontAwesomeIcon
                  icon={card.icon}
                  className="text-xl text-primary "
                />
              </div>
              <div className="text-container flex justify-center items-center ">
                <p className="text-gray-700 font-pthin text-center text-sm ">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
