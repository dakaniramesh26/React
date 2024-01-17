const ChildButton = ({ HandleincrementMethod }) => {
  return (
    <>
      <button onClick={() => HandleincrementMethod(5)}>
        increments everytime with 1
      </button>
    </>
  );
};
export default ChildButton;
