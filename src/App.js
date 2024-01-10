
import './App.css'
import Buttoncomponent from './components/button/buttoncomponent';
import FormComponent from './components/form/formcomponent';
import Orderedcomponent from './components/list/orderedcomponent';
import UnordereComponent from './components/list/unorderedcomponent';
import TableComponent from './components/table/tablecomponent';
function hello(){
  return(
    <div>
      <Buttoncomponent/>
      <Orderedcomponent/>
      <UnordereComponent/>
      <TableComponent/>
      <FormComponent/>

      {/* <h1>Hiiii Guys Wolcome to React</h1>
      <h3>creating buttons</h3>

      <button>start</button><br/>
      <button>Submit</button>
     <h3>creating table</h3>
      <table>
        <tr>
          <th>Id</th>
          <th>Course</th>
          <th>College</th>
          <th>Year</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Civil</td>
          <td>Mrits</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Mpc</td>
          <td>TS Model College</td>
          <td>2019</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ssc</td>
          <td>ZP High School</td>
          <td>2017</td>
        </tr>

      </table>
      <h3>creating lists</h3>
      <ol>
        <li>Ramesh</li>
        <li>Riyan</li>
      </ol>
      <ul>
        <li>Ramesh</li>
        <li>Riyan</li>
      </ul>
      <h3>creating forms</h3>
      <form>

      
        <label for='name' >name:</label>
        <input type='text'placeholder='name' /><br/>
        <label for='college'>College:</label>


        
        <input type='text'placeholder='college'/><br/>
        <label for='year'>year:</label>
        <input type='password' placeholder='year'/><br/>
        <input type='submit'/>
      </form> */}
      
      
    </div>
  )
}
export default hello;