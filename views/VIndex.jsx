import React from 'react'

function VIndex(props) {
    const veggies = props.veggies
  return (
    <div>
        <h2>Veggie Index</h2>
        <nav>
          <a href='/veggies/new'>Create a new Veggie</a>
        </nav>
      {
        veggies && 
        veggies.map((item,i)=>{
            return(
                <a href={`/veggies/${item._id}`} key={i}>
                    <h2>{item.name}</h2>
                </a>
            )
           
        })
      }
    </div>
  )
}

export default VIndex
