import React from 'react'

function Index(props) {
    const fruits = props.fruitList
  return (
    <div>
        <h2>Index</h2>
      {
        fruits.map((item,i)=>{
            return(
                <a href={`/fruits/${i}`}>
            <h2>{item.name}</h2>
            </a>
            )
           
        })
      }
    </div>
  )
}

export default Index
