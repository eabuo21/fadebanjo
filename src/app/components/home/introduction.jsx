import React from 'react'

export default function Introduction() {
  const lists = [
    'How flatness, sharpness, and curvature shape neural network generalization',
    'How models behave under distribution shifts and adversarial settings',
    'How to build optimization methods that encourage stable and reliable solutions',
    'How large vision and language systems can be made more robust in low-resource contexts',
  ]
  return (
    <div className=" w-full max-h-full  flex flex-col gap-y-4 justify-start items-start pb-9 ">
      <h4 className="font-pbold text-2xl  md:text-3xl  text-gray-700">
        About Me
      </h4>

      <p className="text-gray-700 font-pthin text-base md:text-lg  md:w-[89%] ">
        I am a Machine Learning researcher specializing in Machine Learning
        Theory, with a particular focus on optimization, robustness, and
        generalization in deep neural networks. My work explores how curvature,
        flatness, and domain shifts affect model behavior, and I develop methods
        that improve reliability in both vision and language systems.
        <br />
        <br /> I have led and contributed to several research projects across ML
        Collective and Cohere For AI, producing work on flatness-aware
        regularization, African multilingual image captioning, data augmentation
        for low-resource machine translation, and causal domain generalization.
        Beyond research, I work as a Data Scientist, building data-driven
        systems, analytics pipelines, and NLP solutions that support real-world
        decision-making. I am also committed to community growth: I have
        facilitated machine learning classes, mentored emerging practitioners,
        and presented my work at conferences such as NeurIPS and Deep Learning
        Indaba.
        <br />
        <br /> My long-term goal is to advance the science of reliable and
        generalizable AI systems, contribute to cutting-edge research, and help
        broaden representation in machine learning research.
      </p>
    </div>
  )
}
