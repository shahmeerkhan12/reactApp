import { useState } from "react";

function Candidates() {
  const students = [
    "Muhammad Ali",
    "Abdul Ghafar Khan",
    "Ali Amin Pasha",
    "Zainul Abideen",
  ];
  // now we will use state hooks to manage state
  const [SelectedName, setSelectedName] = useState("");
  return (
    <>
      <h1>Registered Candidates</h1>

      <ul className="list-group">
        {students.map((student) => (
          <li
            key={student}
            className={
              SelectedName === student
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedName(student);
              console.log(student);
            }}
          >
            {student}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Candidates;
