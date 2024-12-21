import { useState } from "react";

export const Accordion = () => {
  const content = [
    {
      title: "HTML",
      description:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
      id: "html-lang",
    },
    {
      title: "CSS",
      description:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
      id: "css-lang",
    },
    {
      title: "JavaScript",
      description:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
      id: "js-lang",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        width: "400px",
        flexDirection: "column",
        gap: "2px",
      }}
    >
      {content.map((item) => (
        <Section
          title={item.title}
          description={item.description}
          key={item.id}
        />
      ))}
    </div>
  );
};

interface SectionProps {
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title}{" "}
        <span
          aria-hidden={true}
          className={
            isOpen ? "accordion-icon accordion-icon--rotated" : "accordion-icon"
          }
          style={{ transition: "transform 0.1s" }}
        />
      </button>
      {isOpen && <p>{description}</p>}
    </div>
  );
};
