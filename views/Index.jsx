import React from 'react'
// import Default from './layouts/Default'

function Index(props) {
    const fruits = props.fruits
  return (
    // <Default>
        <div>
            <h2>Index</h2>
            <nav>
              <a href='/fruits/new'>Create a new fruit</a>
            </nav>
          {
            fruits.map((item,i)=>{
                return(<div>
                    <a href={`/fruits/${item._id}`} key={i}>
                        <h2>{item.name}</h2>
                    </a>
                    <a href={`/fruits/${item._id}/edit`}>Edit This Fruit</a>
                    <form action={`/fruits/${item._id}?_method=DELETE`} 
                    method="POST">
                        <input type="submit" value="DELETE"/>
                    </form>
                </div>
                   
                )
              
            })
          }
        </div>
    // </Default>
  )
}

export default Index
