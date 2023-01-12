import React, { useState } from "react";

export default function Card(props) {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h3 className="name">{props.name}</h3>
      <img className="img" src={props.src} alt="your picture" />

      <span class="material-symbols-outlined" onClick={handleClick}>
        thumb_up
        {counter}
      </span>
    </>
  );
}
