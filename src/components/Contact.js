import React from 'react'

const Contact = () => {
  return (
    <div style={{padding:'20px'}}>
      <form onSubmit={()=>alert('Form submitted')}>
        <label>Email</label><br/> 
        <input style={{width:'50%'}} placeholder='enter your email' type='text' name='email' required/> <br/> <br/>

        <label>Phone Number</label> <br/>
        <input style={{width:'50%'}} placeholder='enter number'  type='tel' name="phone" required/> <br/><br/>

        <label>Address</label> <br/>
        <textarea   style={{height:"50px", width:"50%"}} placeholder='enter your address' name='address'></textarea><br/> <br/>

        <label>Query</label> <br/>
        <textarea style={{height:"200px" ,width:"50%"}} placeholder='enter your query' ></textarea><br/><br/>
        <button className='btn btn-primary'>submit</button>
      </form>
    </div>
  )
}

export default Contact
