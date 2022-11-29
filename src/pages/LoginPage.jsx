import React from "react";
import "@fontsource/raleway"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate('')

  return <div>    
  <div
style={{
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: '#002939',
  flexDirection: 'column'
}}
>
<nav style={{ display: 'flex', justifyContent: 'space-around', margin:'10px',  width:  '100vw', height: '4vw'}}>
  <h2 style={{ width: '15vw', fontFamily: 'Raleway', fontWeight: '2200', fontSize: '38px',  margin: '2px', color: '#E4CFA9', cursor: 'pointer'}} onClick={()=>{
    navigate('/')
  }} >
    Booking.com
    </h2>
    <h2 style={{  fontFamily: 'Raleway', fontWeight: '2200', fontSize: '38px',  margin: '2px', color: '#E4CFA9', cursor: 'pointer'}} onClick={()=>{
    navigate('/registration')
  }} >
    Have no account? Sign up then!
    </h2>

    {/* <h2 style={{ width: '15vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '28px',  margin: '2px', color: '#E4CFA9',}} >
      Enter your data!
    </h2> */}
    </nav>
<div className="card" style={{height:'12vw', width: "100%", backgroundColor: 'white' }}>
  <div className="card-body"  style={{ display: 'flex', justifyContent: 'center'}}>
    <div style={{margin: '20px'}}>
    <h2  style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '34px', border: 'solid', margin: '2px',}}>Sign in your account</h2>
    <div className="mb-3">
      <input
        type="last_name"
        className="form-control"
        placeholder="*Username"
        style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '18px' , border: 'solid', margin: '2px'}}
      />
    </div>
    <div className="mb-3">
      <input
        type="username"
        className="form-control"
        placeholder="*Password"
        style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '18px' , border: 'solid', margin: '2px'}}
      />
    </div>

    <button
      // onClick={handleClick}
      className="btn btn-light"
      style={{ width: '199px', fontFamily: 'Raleway', fontWeight: '400', fontSize: '18px' , border: 'solid', margin: '2px'}}
    >
      Sign In
    </button>
    </div>
  </div>
  <footer style={{marginTop: '20px' ,display: "flex",
    alignItems: "center",
    justifyContent: "center", width: '30vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px',  margin: '2px', color: '#E4CFA9', }}><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim consequatur, reprehenderit provident sint soluta tenetur sequi quia dolore aliquam illum dolorem eaque iure labore consequuntur adipisci blanditiis voluptate in doloribus.</h2></footer>
</div>
</div></div>;
};

export default LoginPage;
