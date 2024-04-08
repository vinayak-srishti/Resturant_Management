import React from 'react'
import '../User/Payment.css'

function Payment() {
  return (
    <div>
        <center>
          <div className='payment_main1'>
            {/* <h1 id='payment_head'>Payment Gateway</h1> */}
        <form>
          <input type='number' placeholder="Card Number" className='form-control' style={{marginTop:"2rem",border:"1px solid grey",width:"380px"}}/><br/>
          <div className='payment_main2'>
          <input type='date' placeholder='Expiry Date' className='form-control'  style={{width:"150px",marginLeft:"2rem"}} />
          <input type='password' placeholder='CVV' className='form-control' style={{width:"100px",marginLeft:"5rem"}}/><br/>
          </div>
          <input type='text' placeholder='Name on Card'  className='form-control' style={{marginTop:"2rem",paddingBottom:"-1rem", border:"1px solid grey",width:"380px"}} /><br/>
          <button className='btn btn-primary'>Pay Now</button><br/><br/>
        </form>
        </div>

        </center>
     
    </div>
  )
}

export default Payment
