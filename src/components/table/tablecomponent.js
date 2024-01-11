function TableComponent(){
    return(
        <div>
          <h1>Table Creation</h1>
           <table>
        <tr style={
          {
            color:"brown",
            backgroundColor:"grey"
          }
        }>
          <th>Id</th>
          <th>Course</th>
          <th>College</th>
          <th>Year</th>
        </tr>
        <tr style={
          {
            color:"blue",
          }
        }>
          <td>1</td>
          <td>Civil</td>
          <td>Mrits</td>
          <td>2023</td>
        </tr>
        <tr style={
          {
            color:"yellow",
           
          }
        }>
          <td>2</td>
          <td>Mpc</td>
          <td>TS Model College</td>
          <td>2019</td>
        </tr>
        <tr style={
          {
            color:"green",
            
          }
        }>
          <td>3</td>
          <td>Ssc</td>
          <td>ZP High School</td>
          <td>2017</td>
        </tr>

      </table>
        </div>
    )
}
export default TableComponent