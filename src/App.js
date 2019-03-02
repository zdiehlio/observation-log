import React, { useState } from 'react';
import './App.css';

const App = () => {
  
  const [newLog, updateLog] = useState({})
  console.log('new log', newLog)
  const [logs, addLog] = useState([])
  console.log('logs', logs)

  const currentdate = new Date(); 
  const datetime =    currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();

  const addAnimal = (event) => {
    event.preventDefault()
    // updateLog({...newLog, time: datetime})
    console.log('add animal', newLog)
    addLog([...logs, logs[0] = newLog, logs[0].time = datetime])
    updateLog([])
    console.log('after unshift', logs)
  } 

  const newRow = () => logs.map((val, indx) => <TableRow 
      key={indx}
      time={val.time}
      animal={val.animal}
      fecal={val.fecal}
      regurgitation={val.regurgitation}
      urine={val.urine}
      comments={val.comments}
    />)
  

  return (
    <div className="App">
      <header>
        NA Cetacean Observation Log
      </header>
      <div>
        <form>
          <label htmlFor='animal'>Animal</label>
          <input required value={newLog.animal} placeholder='Animal' name='animal' onChange={(event) => updateLog({...newLog, [event.target.name]: event.target.value})}></input>
          <label htmelFor='fecal'>Fecal</label>
          <select name='fecal' onChange={event => updateLog({...newLog, [event.target.name]: event.target.value})}>
            <option>Normal</option>
            <option>Clumpy</option>
            <option>Stringy</option>
          </select>
          <label htmlFor='urine'>Urine</label>
          <select name='urine' onChange={event => updateLog({...newLog, [event.target.name]: event.target.value})}>
            <option>Normal</option>
            <option>Dark</option>
          </select>
          <label htmlFor='regurgitation'>Regurgitation</label>
          <select name='regurgitation' onChange={event => updateLog({...newLog, [event.target.name]: event.target.value})}>
            <option>Digested</option>
            <option>Whole Fish</option>
          </select>
          <label htmlFor='comments'>Comments</label>
          <textarea name='comments' value={newLog.comments} placeholder='Comments' onChange={(event) => updateLog({...newLog, [event.target.name]: event.target.value})}></textarea>
          <button type='submit'onClick={addAnimal}>Add Log</button>
        </form>
        <table>
          <tbody>
            <tr>
              <th>Time</th>
              <th>Animal(s) Involved</th>
              <th>Fecal</th>
              <th>Urine</th>
              <th>Regurgitation</th>
              <th>Comments</th>
            </tr>
            {newRow()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TableRow (props) {
  return(
    <tr>
      <td>{props.time}</td>
      <td>{props.animal}</td>
      <td>{props.fecal}</td>
      <td>{props.regurgitation}</td>
      <td>{props.urine}</td>
      <td>{props.comments}</td>
    </tr>
  )
}


export default App;
