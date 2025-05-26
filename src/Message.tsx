//Pascal Casing
function Message() {
  const name = "";
  if (name)
    return (
      <h1>
        Hello <b>{name}</b>
      </h1>
    );
  return <h1>Hello World!</h1>;
  // when u want to return multiple
  //  elements wrap it inside a container
}
export default Message;
