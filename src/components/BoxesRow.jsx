import Box from "./Box";

export default function BoxesRow({ rowBoxesState }) {
  return (
    <div className="boxesRow">
      {rowBoxesState.map((box) => {
        return <Box key={box?.id} id={box?.id} isClicked={box?.isClicked} />;
      })}
    </div>
  );
}
