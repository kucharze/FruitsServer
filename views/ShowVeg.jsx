import React from 'react'

function ShowVeg(props) {
    let veg = props.veggie
  return (
    <div>
      <h1>Show page</h1>
      <h3>The {veg.name} is {veg.color}</h3>
      <h1 style={{color:'green'}}>{
           veg.readyToEat ? "Its ready to eat" : "It isn't ready yet"
        }</h1>
    </div>
  )
}

export default ShowVeg
