function FormComponent() {
  return (
    <div>
      <h3 style={{textAlign:"center"}}>Datails</h3>
      <form style={
        {
          color:"sienna",
          textAlign:"center"
        }
      }>
        
        <label for="name">Name:</label>
        <input type="text" placeholder="name" /><br /><br/>
        <label for="email">Email: </label>
        <input type="email" placeholder="email" /><br /><br />
        <label for="year">password:</label>
        <input type="password" placeholder="password" /><br /><br />
        <input type="submit" /><br/><br></br>
      </form>
    </div>
  );
}
export default FormComponent
