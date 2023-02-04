export default function Box({ id, isClicked }) {
  if (id) {
    return (
      <div
        className="box"
        style={{ backgroundColor: isClicked ? "green" : "white" }}
      ></div>
    );
  }
  return <div className="emptyBox"></div>;
}
