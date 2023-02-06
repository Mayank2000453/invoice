import React,{useState} from 'react'



export default function Table({items,setItems}) {
  const DownloadPdf = () => {
    window.print();
  }
  
  return (
    <>
        <div className="col-12">
            <table class="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                           <th scope="col">#</th>
                           <th scope="col">Items $ Description</th>
                           <th scope="col">HSN/SAC</th>
                           <th scope="col">Qty</th>
                           <th scope="col">Rate</th>
                           <th scope="col">Discount</th>
                           <th colSpan={2}>CGST
                             <th className='tbrder'>%</th>
                             <th className='tbrder'>Amt</th>
                            </th> 
                            <th colSpan={2}>SGST
                             <th className='tbrder'>%</th>
                             <th className='tbrder'>Amt</th>
                            </th> 
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                    <td>{}</td>
                    <td>8023</td>
                    <td>5.00 pcs</td>
                    <td>250.00</td>
                    <td>50 %</td>
                    <td>9%</td>
                    <td>56.25</td>
                    <td>9%</td>
                    <td>56.25</td>
                    <td>625</td>
            </tr>
            </tbody>
           
          </table>
        </div>
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
