import { useState } from 'react'

export default function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      id: 'what-is-roadmap',
      question: 'What is roadmap.sh?',
      answer: 'Roadmap.sh is a community effort to create learning paths, guides, project ideas and other similar content to help developers grow in their careers.'
    },
    {
      id: 'what-are-the-plans',
      question: 'What are the plans for roadmap.sh?',
      answer: 'The plans focus on keeping the existing roadmaps up-to-date with the ever-evolving tech landscape. Future goals include adding more interactive features, such as progress tracking, personalized skill assessments, and expanding the library of hands-on project ideas for various domains.'
    },
    {
      id: 'how-is-it-built',
      question: 'How is roadmap.sh built?',
      answer: 'It is an open-source project primarily built using modern web technologies like Astro or Next.js and React. The roadmaps themselves are often rendered as interactive SVGs or organized via JSON data to ensure they are both searchable and easy to maintain by the community.'
    },
    {
      id: 'can-i-use',
      question: 'Can I use roadmap.sh in my team?',
      answer: 'Yes, absolutely. Many teams use these roadmaps for onboarding new hires or structured upskilling of current employees. It serves as a standardized benchmark for the skills required for different engineering roles.'
    },
    {
      id: 'how-to-create',
      question: 'How can I create custom roadmaps?',
      answer: 'You can create custom roadmaps by using the built-in editor available to registered users on the website. Alternatively, since it is open-source, you can contribute to the GitHub repository or use the available tools to draft a roadmap tailored to your specific organizational needs.'
    },
    {
      id: 'is-most-starred',
      question: 'Is roadmap.sh really 7th most starred project on GitHub?',
      answer: 'Yes, it consistently ranks among the top most-starred repositories globally. This massive popularity is a testament to the high-quality, community-driven content that has become a go-to resource for developers worldwide.'
    }
  ]

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="p-7 text-sm sm:text-base md:text-lg min-w-80 w-full max-w-lg sm:max-w-xl md:max-w-2xl">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl">Frequently asked questions</h1>
        <p className="mb-3 mt-2">Here are some of the frequently asked questions</p>
      </header>
      <ul className='flex flex-col gap-3 w-full'>
        {questions.map((item) => (
          <Accordion
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === item.question}
            onQuestionClick={() => { toggleAnswer(item.question) }}
          />
        ))}
      </ul>
    </main>
  )
}

function Accordion({ question, answer, onQuestionClick, isOpen }) {

  return (
    <li className="">
      <button onClick={onQuestionClick} className="bg-neutral-950 text-stone-50 p-2.5 pr-8 rounded-xl w-full cursor-pointer text-left border-0 relative">
        {question}
        <svg aria-label="arrow symbol" className={`absolute top-1/2 right-2 -translate-y-1/2 fill-stone-50 transition-transform ${isOpen ? 'rotate-90' : ''}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
      </button>
      {isOpen &&
        (<p className="min-w-fit p-2.5 rounded-xl w-full cursor-pointer text-left border-2 mt-3">{answer}</p>)}
    </li>
  )
}
