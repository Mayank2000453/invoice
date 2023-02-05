import React, {useState}from 'react'
import Header from './components/Header';
import Address from './components/Address';
import Table from './components/Table';
import Bottom from './components/Bottom';
import TableForm from './components/Tableform';

export default function App() {

  const [showPreview, setShowPreview] = useState(false)

  const [company, setCompany] = useState("Amazon");
  const [address, setAddress] = useState("gokuldham Society");
  const [town, setTown] = useState("Goregaon");
  const [city, setCity] = useState("Mumbai");
  const [pincode, setPincode] = useState("124032");
  const [state, setState] = useState("Maharashtra");
  const [gstin, setGSTIN] = useState("193ABFB6");

  return (
    < div className='container'>
    {showPreview ? 
    <div className='container' >
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
       <Table/>
       <Bottom/>
         </div>
      </div>
    </div>:(
      <div class="container">
  <div class="form-group">
    <label for="label1">Your Company Name</label>
    <input type="text" class="form-control" id="company" placeholder='Company Name' autoComplete='off' value={company}
      onChange={(e)=>setCompany(e.target.value)}
    />
  </div>
  <div class="form-group">
    <label for="label2">Your Address</label>
    <input type="text" class="form-control" id="address" placeholder='Address' value={address}
      onChange={(e)=>setAddress(e.target.value)}
    />
  </div>
  <div class="form-group">
    <label for="label3">Your Town</label>
    <input type="text" class="form-control" id="town" placeholder='Town' value={town}
      onChange={(e)=>setTown(e.target.value)}
    />
  </div>
  <div class="form-group">
    <label for="label4">Your City</label>
    <input type="text" class="form-control" id="city" placeholder='City' value={city}
      onChange={(e)=>setCity(e.target.value)}
    />
  </div>
  <div class="form-group">
    <label for="label5">Your Pincode</label>
    <input type="text" class="form-control" id="pincode" placeholder='Pincode' value={pincode}
      onChange={(e)=>setPincode(e.target.value)}
    />
  </div>
  <div class="form-group">
    <label for="label6">Your State</label>
    <input type="text" class="form-control" id="state" placeholder='State' value={state}
      onChange={(e)=>setState(e.target.value)}
    />
  </div>
  <div class="form-group">
    <label for="label7">Your GSTIN</label>
    <input type="text" class="form-control" id="gstin" placeholder='GSTIN Number' value={gstin}
      onChange={(e)=>setGSTIN(e.target.value)}
    />
  </div>
  <>
  <TableForm/>
  <button onClick={()=>setShowPreview(true)}>Preview</button>
  </>
</div>


    )}
   
    </div>
   
  )
}

