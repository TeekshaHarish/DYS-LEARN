import React from "react";
const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
];
const match = () => {
  return (
    <div>
      match
      <ul className="characters">
        {finalSpaceCharacters.map(({ id, name, thumb }) => {
          return (
            <li key={id}>
              <div className="characters-thumb">
                <img src={thumb} alt={`${name} Thumb`} />
              </div>
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default match;
