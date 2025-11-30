import React from 'react'

const newsData = [
  {
    date: 'Ongoing',
    title: 'Applying to Graduate Schools',
    description:
      'I am currently applying to graduate schools for a graduate degree in Computer Science. This marks an exciting next step in my academic journey, where I aim to deepen my research skills and contribute to advancements in machine learning and AI.',
  },
  {
    date: 'Dec 3, 2025',
    title: 'Attending EurIPS’25',
    description:
      'I’ll be attending EurIPS’25 in Copenhagen, Denmark. This premier conference will provide opportunities to learn from leading experts in machine learning, network with researchers from around the globe, and gain insights into the latest advances in AI and neuroscience.',
  },
  {
    date: 'NeurIPS’25',
    title: 'Paper Accepted',
    description:
      'My work “Flat Is The New Sharp: Flatness-Aware Regularization For Robust Learning” was accepted at NeurIPS’25 @WiML. This research explores new techniques to improve model generalization and robustness, aiming to make machine learning systems more reliable in real-world applications.',
  },
  {
    date: 'Aug 2025',
    title: 'Deep Learning Indaba',
    description:
      'I’ll be attending the Deep Learning Indaba — Africa’s largest research conference in Rwanda — for the second year in a row. This conference provides a vibrant platform to share ideas, learn about cutting-edge AI research, and engage with Africa’s growing machine learning community.',
  },
  {
    date: 'Aug 2025',
    title: 'Poster Presentation: Domain Generalization',
    description:
      'At the Deep Learning Indaba, I will present my poster "Effect of domain generalization techniques in low-resource systems". This work investigates how machine learning models can adapt across different domains, which is crucial for systems operating in resource-limited environments.',
  },
  {
    date: 'Sep 2024',
    title: 'Poster Presentation: Data Augmentation',
    description:
      'I presented my poster "From Scarcity to Efficiency: Investigating the Effects of Data Augmentation on African Machine Translation" at Deep Learning Indaba. The study explores how data augmentation can improve translation quality for African languages, addressing challenges in low-resource NLP.',
  },
]

export default function TheNews() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold font-pbold  text-center mb-8 text-gray-700">
          News & Updates
        </h2>
        <div className="space-y-8">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl  font-psemibold text-gray-800">
                  {item.title}
                </h3>
                <span className="text-gray-500 text-sm font-pthin">
                  {item.date}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed font-pregular">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
