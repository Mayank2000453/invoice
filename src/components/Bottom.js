import React from 'react'

export default function Bottom() {
  const DownloadPdf = () => {
    window.print();
  }
  return (
    <>
     <div className='col-6'>
            <p>Total in Words</p>
            <ul className="stype"><li>Words answer</li></ul>
            <p>Looking forward to bussiness</p>
        </div>
        <div className='col-6'>
            <div className='col-12'>
            <ul className="stype">
          <li>Sub Total</li>
          <li>CGST9 (9%)</li>
          <li>SGST9 (9%)</li>
         </ul>
            </div>
            <div className="col-12" style={{height:"300px",width:"550px",display: 'flex',
flexDirection: 'column',
justifyContent: 'flex-end',
alignItems: 'center',
margin:"0"}}>
    <p>Authorized Signature</p>
    </div>
        </div>   
        <button class="btn btn-primary" style={{marginLeft:"450px"}} onClick={DownloadPdf}>Print Pdf</button>
    </>
  )
}
