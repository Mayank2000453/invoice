
import React, { useState } from 'react';
import Table from './Table';
import Header from './Header';
import Address from './Address';


const rates = {
  item1: 199,
  item2: 253.00,
  item3: 217.00,
  item4: 210,
  item5: 220,
  item6: 30,
  item7:51
};
const DSIN = {
  item1: "MAG-100471.05",
  item2: "MAG-100471.08",
  item3: "MAG-100472.05",
  item4: "MAG-802010.05",
  item5: "MAG-802012.05",
  item6: "MAG-103796.07",
  item7: "MAG-100141.00"
};
const HSN = {
  item1: 83021020,
  item2: 83021020,
  item3: 83021020,
  item4: 8302,
  item5: 8302,
  item6: 8302,
  item7: 83021010
};
const discount = {
  item1: 10,
  item2: 12,
  item3: 20,
  item4: 25,
  item5: 35,
  item6: 9,
  item7: 5
};
const Name = {
    item1: "Magmus 3 Brass Locking L Hinges Satin Silver Premium 3 x 3/8 x 1.1/4 x 6 mm",
    item2: "Magmus 3 Brass Locking L Hinges Satin Black Premium 3 x 3/8 x 1.1/4 x 6 mm",
    item3: "Magmus 3 Brass Locking L Hinges Satin Silver Premium 3 x 3/8 x 1.1/4 x 12 mm",
    item4: "Magmus Brass Folding Bracket Premium Satin Silver 2 x 10 mm",
    item5: "Magmus Brass Folding Bracket Premium Satin Silver 2 x 12 mm",
    item6: "Magmus Furniture Glide Plint Pin 22 mm",
    item7: "Magmus 3 S.S. Butt Door Hinges - Welded Soft Movement Matt 3 x 16"
  };
const TableForm = ({company,
    address,
    town,
    city,
    pincode,
    state,
    gstin}) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("item1");
  const [quantity, setQuantity] = useState(0);
 const [signo, setSignNo] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, { selectedItem, quantity,
    tax:((rates[selectedItem]*quantity)*9)/100,
    totalCost: ((quantity * rates[selectedItem])-((quantity * rates[selectedItem])*(discount[selectedItem])/100)+((rates[selectedItem]*quantity)*18)/10000) 

}])
    
  };

  const chnageSign = (e)=>{
    setSignNo(signo+1);
  }

  const DownloadPdf = () => {
    window.print();
  }

const convert = (amount)=>{
    const units = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const scales = ['', 'Thousand', 'Lakh', 'Crore'];

let currencyInWords = '';
let remainingAmount = amount;
let scaleIndex = 0;

while (remainingAmount > 0) {
let block = remainingAmount % 100000;
if (block > 0) {
let blockInWords = '';
if (block >= 1000) {
blockInWords += `${(Math.floor(block/1000))} Thousand `;
block %= 1000;
}
if (block >= 100) {
blockInWords += `${units[Math.floor(block/100)]} Hundred `;
block %= 100;
}
if (block >= 20) {
blockInWords += `${tens[Math.floor(block/10)]} `;
block %= 10;
}
if (block > 0) {
blockInWords += `${units[block]} `;
}
currencyInWords = `${blockInWords}${scales[scaleIndex]} ${currencyInWords}`;
}
scaleIndex++;
remainingAmount = Math.floor(remainingAmount / 100000);
}
return currencyInWords.trim();
}

  return (
    <div>
    
      <form onSubmit={handleSubmit}>
        <label htmlFor="item-select">Select Item:</label>
        <select id="item-select" value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
          <option value="item1">"Magmus 3 Brass Locking L Hinges Satin Silver Premium 3 x 3/8 x 1.1/4 x 6 mm"</option>
          <option value="item2">"Magmus 3 Brass Locking L Hinges Satin Black Premium 3 x 3/8 x 1.1/4 x 6 mm"</option>
          <option value="item3">"Magmus 3 Brass Locking L Hinges Satin Silver Premium 3 x 3/8 x 1.1/4 x 12 mm"</option>
          <option value="item4">"Magmus Brass Folding Bracket Premium Satin Silver 2 x 10 mm"</option>
          <option value="item5">"Magmus Brass Folding Bracket Premium Satin Silver 2 x 12 mm"</option>
          <option value="item6">"Magmus Furniture Glide Plint Pin 22 mm"</option>
          <option value="item7">"Magmus 3 S.S. Butt Door Hinges - Welded Soft Movement Matt 3 x 16"</option>
        </select>
        <br />
        <label htmlFor="quantity-input">Enter Quantity:</label>
        <input
          type="number"
          id="quantity-input"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br />
        <button onClick={chnageSign} type="submit">Add to cart</button>
      </form>    
      <div className='container'>
      <div className='card'>
      <div className='row'>
      <Header/>
       <Address
        company={company}
        address={address}
        town={town}
        city={city}
        pincode={pincode}
        state={state}
        gstin={gstin}
       />    
      {/* <Table
      items={items}
      setItems={setItems}

      /> */}
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
            {items.map((item, index) => (
                <tr key={index}>
                <th scope="row">{signo}</th>
                    <td>{Name[item.selectedItem]} <b>SKU:{DSIN[item.selectedItem]}</b></td>
                    <td>{HSN[item.selectedItem]}</td>
                    <td>{item.quantity} pcs</td>
                    <td>{rates[item.selectedItem]}</td>
                    <td>{discount[item.selectedItem]}%</td>
                    <td>9%</td>
                    <td>{item.tax}</td>
                    <td>9%</td>
                    <td>{item.tax}</td>
                    <td>{item.totalCost}</td>
                    </tr>
          ))}
            </tbody>
           
          </table>
        </div>
        <div className='col-6'>
            <p>Total in Words</p>
            {items.map((item, index) => (
            <ul className="stype"><li><i><b>{convert(item.totalCost)}</b></i></li></ul>
            ))}
            <p>Looking forward to bussiness</p>
        </div>
        <div className='col-6'>
            <div className='col-12 '>
            <ul className="stype ">
          <li >Sub Total: <b>{items.reduce((acc, item) => acc + item.totalCost, 0)}</b></li>
          <li >CGST9 (9%) : <b>{items.reduce((acc, item)=> acc + item.tax,0)}</b></li>
          <li >SGST9 (9%) :<b>{items.reduce((acc, item)=> acc + item.tax,0)}</b> </li>
         </ul>
            </div>
            <div className="col-12 card" style={{height:"300px",width:"550px",display: 'flex',
flexDirection: 'column',
justifyContent: 'flex-end',
alignItems: 'center',
margin:"0"}}>
    <p>Authorized Signature</p>
    </div>
        </div>   
        <button class="btn btn-primary" style={{marginLeft:"450px"}} onClick={DownloadPdf}>Print Pdf</button>
     
         </div>
      </div>
    </div>
     
    </div>
  );
};
export default TableForm;