import React from 'react'
import Avatar from './components/Avatar'
import "./App.css"
export default function App() {
  let avatarData= [
    {size:"s", type:"sqaure"},
    {size:"s", type:"rounded"},
    {size:"s", type:"circle"},

    {size:"m", type:"sqaure"},
    {size:"m", type:"rounded"},
    {size:"m", type:"circle"},

    {size:"l", type:"sqaure"},
    {size:"l", type:"rounded"},
    {size:"l", type:"circle"},

    {size:"xl", type:"sqaure"},
    {size:"xl", type:"rounded"},
    {size:"xl", type:"circle"},
  
  ]
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
          {avatarData.map(data=>{
            return (<Avatar src="https://wallpaperaccess.com/full/51370.jpg"  size={data.size} type={data.type}/>)
          })}



        {/*  <Avatar src="https://wallpaperaccess.com/full/51370.jpg" size="xl" type="circle"/>

         <Avatar src="https://wallpaperaccess.com/full/51370.jpg" size="l" type="sqaure"/>

         <Avatar src="https://wallpaperaccess.com/full/51370.jpg" size="m" type="rounded"/> */}
        </div>
    )
}
