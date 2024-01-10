function FormComponent() {
  return (
    <div>
      <form>
        <label for="name">name:</label>
        <input type="text" placeholder="name" /><br />
        <label for="college">College:</label>
        <input type="text" placeholder="college" /><br />
        <label for="year">year:</label>
        <input type="password" placeholder="year" /><br />
        <input type="submit" />
      </form>
    </div>
  );
}
export default FormComponent
