// import Candidates from "./components/Canditates";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Nav from "./components/Nav";
import Form from "./components/form.tsx";
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
    <div className="text-center">
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
      {/* example_list */}
      <Button
        text={"GET STARTED"}
        onClick={() => {
          setAlertVisibility(true);
        }}
      ></Button>

      <Form></Form>
    </div>
  );
}

export default App;
