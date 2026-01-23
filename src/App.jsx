export default function App() {

  return (
    <main className="p-7">
      <header>
        <h1 className="text-2xl">Frequently asked questions</h1>
        <p className="text-sm my-2.5">Here are some of the frequently asked questions</p>
      </header>
      <Accordion question={'I like cookies'} answer={"yolo"}></Accordion>
    </main>
  )
}

function Accordion({ question, answer }) {

  return (
    <>
      <button className="bg-neutral-950 text-md text-stone-50 p-2.5 rounded-xl w-full cursor-pointer text-left">{question}</button>
      <p className="bg-neutral-950 text-md text-stone-50 p-2.5 rounded-xl w-full cursor-pointer text-left">{answer}</p>
    </>
  )
}
