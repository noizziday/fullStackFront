import React from "react";
import "@fontsource/raleway"

const LoginPage = () => {
  return <div>    
  <div
style={{
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: '#002939'
}}
>
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
      style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '18px' , border: 'solid', margin: '2px'}}
    >
      Sign In
    </button>
    </div>
  </div>
</div>
</div></div>;
};

export default LoginPage;
