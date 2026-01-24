export default function App() {

  return (
    <main className="p-7 min-w-dvw">
      <header>
        <h1 className="text-2xl">Frequently asked questions</h1>
        <p className="text-sm mb-3 mt-2">Here are some of the frequently asked questions</p>
      </header>
      <ul>
        <Accordion question={'I like cookies'} answer={"yolo"}></Accordion>
      </ul>
    </main>
  )
}

function Accordion({ question, answer }) {

  return (
    <li className="min-w-4/5">
      <button className="bg-neutral-950 text-md text-stone-50 p-2.5 rounded-xl w-full cursor-pointer text-left border-0 mb-3 relative">
        {question}
        <svg className="absolute top-1/2 right-2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
      </button>
      <p className="text-sm p-2.5 rounded-xl w-full cursor-pointer text-left border-2 mb-3">{answer}</p>
    </li>
  )
}
