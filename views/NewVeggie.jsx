import React from 'react'

function NewVeggie() {
  return (
    <div>
        <h1>Insert a new Veggie</h1>
      <form action="/veggies" method="POST">
            Name: <input type="text" name="name" /><br/>
            Color: <input type="text" name="color" /><br/>
            Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
            <input type="submit" name="" value="Create Fruit"/>
        </form>
    </div>
  )
}

export default NewVeggie
