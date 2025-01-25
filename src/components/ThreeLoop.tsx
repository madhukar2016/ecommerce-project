import React from 'react'

function ThreeLoop() {
    const arr = [1,2,3];
    const filterItem = arr.filter((item:any,index:number,arr:any)=>{return <p key={index}>{item > 2}</p>})
    console.log(filterItem,"filrrrr")
    // fllter returns reduced array, takes item, index, array
    const reduceItem = arr.reduce((acc,curr,i,arr)=>{ return acc+curr},0)
    // reduce to one element
  return (
        <>
           <div>What is Map</div>
           { arr.map((item,i)=>{
                 if(item > 2)
                return <p key={i}>This is my item -- {item}<br/></p>
           })}
           <h2>{filterItem}</h2>
           <h2>{reduceItem}</h2>
    
       </>
    
  )
}

export default ThreeLoop