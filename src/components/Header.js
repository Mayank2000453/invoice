import React from 'react'

export default function Header() {
  return (<>
     <div className='col-6'>
        <img className='center ml-5 mt-5' src="https://cdn.dribbble.com/users/10908534/screenshots/17763769/media/52ae71f80b7e7d3d09eae65446db54ad.jpg"/>
     </div>
    <div className='col-6 text-left mt-5'>
        <p className="font-weight-bold mb-1" style={{fontSize:"25px"}}>DEPO SOLUTIONS PRIVATE LIMITED</p>
        <p className="text-muted t1">77/1/A, Christopher Road, Topsia<br/>Kolkata-700046<br/>West Bengal<br/>GSTIN:19AAJCD1058P1Z4</p>
    </div>
    <div className='col-12 '>
        <h2  className="text-right mr-0" >Performa Invoice</h2>
        <hr className='wdth'></hr>
    </div>
  </>
    
  )
}
