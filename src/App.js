import React, {useState}from 'react'
import TableForm from './components/Tableform';

const items = [
  { id: 1, name: "Magmus 3 Brass Locking L Hinges Satin Silver Premium 3  x 3/8 x 1.1/4 x 6 mm", rate: 199.0, dsin:"MAG-100471.05", hsn:83021020 },
  { id: 2, name: "Magmus 3 Brass Locking L Hinges Satin Black Premium 3 x 3/8 x 1.1/4 x 6 mm", rate: 253.0,dsin:"MAG-100471.08", hsn:83021020 },
  { id: 3, name: "Magmus 3 Brass Locking L Hinges Satin Silver Premium 3 x 3/8 x 1.1/4 x 12 mm", rate: 217.0,dsin:"MAG-100472.05", hsn:83021020},
  { id: 4, name: "Magmus Brass Folding Bracket Premium Satin Silver 2 x 10 mm", rate: 210.0,dsin:"MAG-802010.05", hsn:8302 },
  { id: 5, name: "Magmus Brass Folding Bracket Premium Satin Silver 2 x 12 mm", rate: 220.0,dsin:"MAG-802012.05", hsn:8302 },
  { id: 6, name: "Magmus Furniture Glide Plint Pin 22 mm", rate: 30.0,dsin:"MAG-103796.07", hsn:8302 },
  { id: 7, name: "Magmus 3 S.S. Butt Door Hinges - Welded Soft Movement Matt 3 x 16", rate: 51.0,dsin:"MAG-100141.00", hsn:83021010 },
];
export default function App() {

  const [showPreview, setShowPreview] = useState(false)
  const [formData, setFormData] = useState({
    item: items[0].id,
    name: items[0].name,
    quantity: 0,
    dsin:items[0].dsin,
    hsn:items[0].hsn,
    rate: items[0].rate,
    cost: 0
  });
  // const [totalCost, setTotalCost] = useState(0);


  
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [gstin, setGSTIN] = useState("");

  return (
    <>
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
  {/* <>
  <TableForm/>
  <button onClick={()=>setShowPreview(true)}>Preview</button>
  </> */}
</div>
<TableForm
        company={company}
        address={address}
        town={town}
        city={city}
        pincode={pincode}
        state={state}
        gstin={gstin}
      />   
 </>
  )
}

