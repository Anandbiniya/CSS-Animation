export function ClickHandler() {
  const clickHandler = (e) => {
    console.log(`button consoled  `, e);
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}
