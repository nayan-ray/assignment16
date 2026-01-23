import React, { useState } from "react";
import "./accordian.css";
import "../../assets/global.css"

const Accordion = ({ items, allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) => {
      if (allowMultiple) {
        // multi-open mode
        return prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index];
      } else {
        // single-open mode
        return prev[0] === index ? [] : [index];
      }
    });
  };

  return (
    <div className="list-container">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div className="accordion-item" key={index}>
            
            {/* Header */}
            <button
              className={`accordion-header ${isOpen ? "active" : ""}`}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="icon">{isOpen ? "−" : "+"}</span>
            </button>

            {/* Body */}
            <div
              className="accordion-body"
              style={{
                maxHeight: isOpen ? "1000px" : "0px",
                overflow: "hidden", transition: "max-height 0.5s ease" 
              }}
            >
              <div className="accordion-content">
                {item.content}
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
