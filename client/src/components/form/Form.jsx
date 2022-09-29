import React from 'react'
import {useState} from 'react'
import './form.css'
import axios from 'axios'
const Form = () => {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const handleClick=(e)=>{
    e.preventDefault()
    if(name&&email)
    {
        axios.post("http://localhost:7000/store",{
          name:name,
          email:email
        }).then((res)=>{
          if(res.data)
          {
            alert("successfully inserted")
          }
        }).catch((err)=>{
          console.log(err)
        })
    }
    else{
      alert("fill required details")
    }
    setName('')
    setEmail('')
  }
  return (
    <div className='for-form'>
      <form onSubmit={(e)=>handleClick(e)}>
      <input type="text" placeholder='Enter Your Name' className='in-field'
      autoComplete='off'
      value={name}
      onChange={(event)=>setName(event.target.value)}
      /><br/><br />
      <input type="email" placeholder='Enter Your Email' className='in-field'
      autoComplete='off'
      value={email}
      onChange={(event)=>setEmail(event.target.value)}
      /><br /><br />
      <button className='form-button' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
