import React from 'react'

export default function Table() {
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
                    <td>Software</td>
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

    </>
  )
}
