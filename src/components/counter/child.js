const ChildButton = ({ HandleincrementMethod }) => {
  return (
    <>
      <button onClick={() => HandleincrementMethod(5)}>
        increments everytime with 5
      </button>
    </>
  );
};
export default ChildButton;
