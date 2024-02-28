
import { useState } from 'react'

const Contact = ({ themeColor }) => {
 const [Username,setUsername]=useState("");
 const [FatherName,setFatherName]=useState("");
 const [MotherName,setMotherName]=useState("");
 const [Contact,setContact]=useState("");
 const [Address,setAddress]=useState(""); 
 const [Nationality,setNationality]=useState(""); 

 const [AllEntry,setAllEntry]=useState([]);

 const submitForm=(e)=>{
  e.preventDefault();
  //variable store 
   const NewEntry = {Username:Username,FatherName:FatherName,MotherName:MotherName,Contact:Contact,Address:Address,Nationality:Nationality}

   setAllEntry([...AllEntry ,NewEntry]);
   console.log(AllEntry);
 }
 
  return (
    <>
    <h1>Google Form </h1>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="Username">Username</label>
          <input type="text" autoComplete="off" name="Username" id="Username"
          value={Username}
          onChange={(e)=> setUsername(e.target.value)}
          />
               
        </div>
        <br/><br/>
        <div>
          <label htmlFor="FatherName">FatherName</label>
          <input type="text" autoComplete="off" name="FatherName" id="FatherName"
          value={FatherName}
          onChange={(e)=> setFatherName(e.target.value)}
          />
        </div>
        <br/><br/>
        <div>
          <label htmlFor="MotherName">MotherName</label>
          <input type="text" autoComplete="off" name="MotherName" id="MotherName"
          value={MotherName}
          onChange={(e)=> setMotherName(e.target.value)}
          />
        </div>
        <br/><br/>
        <div>
          <label htmlFor="Contact">Contact</label>
          <input type="number" autoComplete="off"  name="Contact" id="Contact"
          value={Contact}
          onChange={(e)=> setContact(e.target.value)}
          />
        </div>
        <br/><br/>
        <div>
          <label htmlFor="Address">Address</label>
          <input type="text" autoComplete="off" name="Address" id="Address"
          value={Address}
          onChange={(e)=> setAddress(e.target.value)}
          />
        </div>
        <br/><br/>
        <div>
          <label htmlFor="Nationality">Nationality</label>
          <input type="text" autoComplete="off" name="Nationality" id="Nationality"
          value={Nationality}
          onChange={(e)=> setNationality(e.target.value)}
          />
        </div>
        <br/><br/><br/>
        <button type="Submit">Submit</button>
      </form>
      <div>
        {
        AllEntry.map((curElem,index)=>{
          return(
          <div key={index}className="showData">
             <p> {curElem.Username}</p>
             <p> {curElem.FatherName}</p>
             <p> {curElem.MotherName}</p>
             <p> {curElem.Contact}</p>
             <p> {curElem.Address}</p>
             <p> {curElem.Nationality}</p>
        </div>

          )
        })
        }
      </div>
    </>
  )
}
export default Contact;
