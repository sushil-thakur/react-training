import React from 'react'


const DisplaySum = (props) => {
    const sum=props.x + props.y;
  return (
    <div><h3>{sum}</h3></div>
  )
}
const App3 = () => {
  return (
    <div>
        <DisplaySum x={2} y={3}/>
        <DisplaySum x={4} y={5}/>
        <DisplaySum x={6} y={7}/>
    </div>
  )
}

export default App3