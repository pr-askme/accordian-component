import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  const [currentlyOpen, setCurrentlyOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((question, index) => (
        <AccordionItem
          num={index}
          title={question.title}
          text={question.text}
          currentlyOpen={currentlyOpen}
          onOpen={setCurrentlyOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, currentlyOpen, onOpen }) {
  const isOpen = currentlyOpen === num;
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{`0${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default App;
