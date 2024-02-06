// DragDropList.js
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { takeRandomElements } from "../../utils/functions";

const ItemType = "LIST_ITEM";

const DraggableListItem = ({ id, text, index, moveItem }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    drop: (droppedItem) => {
      if (droppedItem.index !== index) {
        moveItem(droppedItem.index, index);
        droppedItem.index = index;
      }
    },
  });
  const itemStyles = {
    border: "1px solid brown",
    padding: "2rem",
    width: "80%",
    margin: "auto",
    margin: "2rem auto",
    fontFamily: "handwriting1",
    fontSize: "2rem",
    // letterSpacing:'5px'
  };
  return (
    <div ref={(node) => ref(drop(node))} style={itemStyles}>
      {text}
    </div>
  );
};

const DragDropList = (props) => {
  const shuffledWords = takeRandomElements(props.wordArray, 5);
  const [items, setItems] = useState([...shuffledWords]);
  const [resultText, setResultText] = useState("");
  const ansItems = [...props.wordArray];
  const checkItems = (items, ansItems) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id !== ansItems[i].id) {
        return false;
      }
    }
    return true;
  };

  const moveItem = async (fromIndex, toIndex) => {
    // const updatedItems = [...items];
    // const [movedItem] = updatedItems.splice(fromIndex, 1);
    // updatedItems.splice(toIndex, 0, movedItem);
    // setItems(updatedItems);

    let updatedItems = [...items];
    let temp = updatedItems[fromIndex];
    updatedItems[fromIndex] = updatedItems[toIndex];
    updatedItems[toIndex] = temp;
    setItems([...updatedItems]);
    console.log(items);

    if (checkItems(updatedItems, ansItems)) {
      setResultText("Congratulations You Made it!!");
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {items.map((item, index) => (
          <DraggableListItem
            key={item.id}
            id={item.id}
            text={item.pair.word1}
            index={index}
            moveItem={moveItem}
          />
        ))}
        <div className="result-text">{resultText}</div>
      </div>
    </DndProvider>
  );
};

export default DragDropList;
