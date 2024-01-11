function FormComponent() {
  return (
    <div>
      <h1>Form Creation</h1>
      <form style={
        {
          color:"sienna"
        }
      }>
        
        <label for="name">Name:</label>
        <input type="text" placeholder="name" /><br />
        <label for="college">College:</label>
        <input type="text" placeholder="college" /><br />
        <label for="year">Year:</label>
        <input type="password" placeholder="year" /><br />
        <input type="submit" />
      </form>
    </div>
  );
}
export default FormComponent
