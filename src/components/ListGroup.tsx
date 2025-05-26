import { useState } from "react";
// part 2
// props or properties (inputs to our components) just like parameters to functions
interface Props {
  items: string[]; // items : array of strings
  heading: string; // heading : string

  // part 3
  // passing functions via props
  // in this part we will notify the consumer/parent(App component) of this
  // component that an item is selected from the list

  // 1. define the shape/sign of our function

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // part 1
  // statehook
  const [selectedIndex, setSelectedIndex] = useState(-1); // returns an array of two components

  return (
    <>
      {/* note that now we are using props: heading to render the title of our list */}
      <h1 className="display-1 text-center">{heading} </h1>
      <ul className="list-group text-center ">
        {items.length === 0 && <p>Items not found</p>}

        {items.map((item, index) => (
          // if key is not specified, error is shown
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
