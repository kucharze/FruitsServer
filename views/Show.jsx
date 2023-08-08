import React from 'react'

function Show(props) {
    const fruit = props.fruit
  return (
    <div>
      <h1>Show page</h1>
      <h3>The {fruit.name} is {fruit.color}</h3>
      <h1>{
            fruit.readyToEat ? "Its ready to eat" : "It isn't ready yet"
        }</h1>
    </div>
  )
}

export default Show
