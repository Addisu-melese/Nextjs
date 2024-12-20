"use client"
import Link from "next/link"
import { useState } from "react"
const navlink=[
    {name:"Register",href:"/register"},
    {name:"Login",href:"/login"},
    {name:"Forgot password",href:"/forgot-password"},
]
const Nestedlayout = ({children,}:{
    children:React.ReactNode
}) => {
    const [input,setInput]=useState("")
  return (
    <>
    <input value={input} onChange={(e)=>setInput(e.target.value)}/>  
    {
        navlink.map((link)=>{
            return(            
                <Link href={link.href} key={link.name}>{link.name}</Link>
            )
        })
    }
    {children}
    </>
  )
}

export default Nestedlayout