import React, { useState } from "react";
import "./Profile.css";


const Profile = (props) => {
 const [fname,setFname]=useState("");
 const [lname,setLname]=useState("");
 const [email,setEmail]=useState("");
 const [resion,setResion]=useState("");

 const saveUser=(e)=>{
   e.preventdefault();
   console.warn(fname,lname,email,resion);
 }

  return (
    <div className="p">
    <form className="form">
    <h1>My Profile</h1><br/><br/><br/>
  <label>First Name -</label>  <input  value={fname} onChange={(e)=>{setFname(e.target.value)}}></input><br/><br/>
  <label>Last Name -</label>  <input  value={lname} onChange={(e)=>{setLname(e.target.value)}}></input><br/><br/>
  <label>Email -</label>  <input  value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br/><br/>
  <label>Resion -</label>  <input  value={resion} onChange={(e)=>{setResion(e.target.value)}}></input><br/><br/><br/>
    <button onClick={saveUser}>Next</button><br/><br/>
    </form>
    </div>
  );
};

export default Profile;
