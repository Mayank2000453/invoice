import React from 'react'

export default function Address({company,
  address,
  town,
  city,
  pincode,
  state,
  gstin}) {
  const date = new Date().toLocaleDateString();
  return (
    <>
     <div className='col-6'>
        <ul className='stype'>
            <li className='bold'>
            <span className='m-5'>#:</span>DEPO/KOL/PI/000007</li>
            <li className='bold'>
            <span className='m-5'>Estimate Date:</span>{date}</li>
        </ul>
        </div>
        <div className=" col-6">
        
        <ul className="stype">
            <li className='bold '>
            <span className='m-5'> Place of Supply: </span>West Bengal</li></ul>
            
        </div>
        <div className="col-md-6" >
                    <p style={{backgroundColor:"#EEEEEE"}} className="font-weight-bold ml-3 pl-1 mb-4 bstyle">Bill To</p>
                    <ul className="stype">
                    <li>DEPO SOLUTIONS PRIVATE LIMITED</li>
                    <li>77/1/A, Christopher Road</li>
                    <li>Topsia</li>
                    <li>Kolkata</li>
                    <li>700046</li>
                    <li>West Bengal</li>
                    <li>GSTIN:19AAJCD1058P1Z4</li>
                    </ul>
            </div>

            <div className="col-md-6 text-left" >
                    <p className="font-weight-bold mb-4 pl-1 ml-4 mr-3 bstyle" style={{backgroundColor:"#EEEEEE"}}>Ship To</p>
                    <ul className="stype">
                    <li>{company}</li>
                    <li>{address}</li>
                    <li>{town}</li>
                    <li>{city}</li>
                    <li>{pincode}</li>
                    <li>{state}</li>
                    <li>{gstin}</li>
                    </ul>
            </div>
        </>
  )
}
