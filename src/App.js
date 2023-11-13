import { useState } from "react";

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
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  if (!data.length)
    return (
      <div className="accordion">
        <AccordionEmpty />
      </div>
    );

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItems
          title={item.title}
          text={item.text}
          key={i}
          number={i}
        />
      ))}
    </div>
  );
}

function AccordionItems({ number, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(id) {
    if (id === number) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleClick(number)}
    >
      <p className="number">{number >= 0 ? `0${number + 1}` : number + 1}</p>
      <h3 className="text">{title}</h3>
      <p className="icon"> {isOpen ? "-" : "+"} </p>
      {isOpen && <div className="content-box"> {text} </div>}
    </div>
  );
}

function AccordionEmpty() {
  return (
    <div className="item">
      <p className="number">1</p>
      <p className="text">Silahkan tambah Item</p>
      <p className="icon">-</p>
      <div className="content-box"> Data Kosong </div>
    </div>
  );
}

export default App;
