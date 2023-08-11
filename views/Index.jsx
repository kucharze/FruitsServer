import React from 'react'

function Index(props) {
    const fruits = props.fruits
  return (
    <div>
        <h2>Index</h2>
        <nav>
          <a href='/fruits/new'>Create a new fruit</a>
        </nav>
      {
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

export default Index
