// defining the shape of the argument the
// component will accept..
// like functions declarations
interface props {
  text: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  onClick: () => void;
}

const Button = ({ text, color = "primary", onClick }: props) => {
  return (
    <button
      style={{ margin: "50px" }}
      className={"btn btn-" + color}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
