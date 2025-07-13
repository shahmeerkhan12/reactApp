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
  const handleSelectItem = (list_Item: string) => {
    console.log(list_Item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="text-center">
      <Nav></Nav>
      <ListGroup
        items={items}
        heading="BEGIN WITH YOUR DREAM PLACE"
        onSelectItem={handleSelectItem} // you can exactly define
        // the function here but when it is longer then define outside
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
