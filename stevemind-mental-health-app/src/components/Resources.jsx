import { title } from 'framer-motion/client'
import { desc } from 'framer-motion/m'
import React from 'react'
import Footer from '../pages/Footer';

const Resources =() => {
  const resources =[
    {
      id: 1,
      title: "Understanding Mental Health",
      description: "Learn Basics of mental health",
      link: "https://www.who.int/news-room/fact-sheets/detail/mental-health",
    },
    {
      id: 2,
      title: "How to Deal with Anxiety",
      description: "Tips and Techiques to manage anxiety and stress",
      link: "https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961",
    },
    {
      id: 3,
      title: "Signs and Symptoms of Mental Health",
      description: "Warning Signs of Mental Illness",
      link: "https://www.psychiatry.org/patients-families/warning-signs-of-mental-illness",
    },
    {
      id: 4,
      title: "Myths and Misconception about Mental Health",
      description: "Separating facts from fiction",
      link: "https://www.unicef.org/parenting/health/busted-7-myths-about-mental-health",
    },

  ]

  return(
    <div className='p-5 bg-blue-400 min-h-screen'>
      <h1 className='text-4xl font-bold text-center mb-5'>Mental Health Resources</h1>
      <h2 className='text-2xl font-semibold text-center'>Learn more about Mental Health</h2>
      <div>
      {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-gray-200 p-5 rounded-lg shadow-md transition-transform transform hover:shadow-xl mt-6">
            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
            <p className="text-gray-600 mb-3">{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn More</a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Resources;