import React from 'react'

function VIndex(props) {
    const fruits = props.veggies
  return (
    <div>
        <h2>Veggie Index</h2>
        <nav>
          <a href='/fruits/new'>Create a new Veggie</a>
        </nav>
      {
        fruits && 
        fruits.map((item,i)=>{
            return(
                <a href={`/fruits/${item._id}`} key={i}>
                    <h2>{item.name}</h2>
                </a>
            )
           
        })
      }
    </div>
  )
}

export default VIndex
