// import Candidates from "./components/Canditates";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Nav from "./components/Nav";

function App() {
  const items = [
    "NewYork",
    "Istanbul",
    "Dehli",
    "Sydney",
    "Yorkshire",
    "Dubai",
    "Jalal-Abad",
    "Islamabad",
  ];

  // function via props
 // js arrow function
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Nav></Nav>
      <ListGroup
        items={items}
        heading="BEGIN WITH YOUR DREAM PLACE"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          operation successful
        </Alert>
      )}
      <Button
        text={"GET STARTED"}
        onClick={() => {
          setAlertVisibility(true);
        }}
      ></Button>
    </div>
  );
}

export default App;
