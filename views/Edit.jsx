import React from 'react'

function Edit(props) {
    // const fruit = props.fruit
  return (
    <div>
        <form action={`/fruits/${props.fruit._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={props.fruit.name}/>
          <br/>
          Color: <input type="text" name="color"  defaultValue={props.fruit.color}
          />
          <br/>
          Is Ready To Eat:
              { props.fruit.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
    </div>
  )
}

export default Edit
