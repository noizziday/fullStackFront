import React from "react";
import "@fontsource/raleway"
import { useNavigate } from "react-router-dom";



const RegistrationPage = () => {
const navigate = useNavigate('')

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
  <div className="card" style={{height:'18vw', width: "100%", backgroundColor: 'white' }}>
    <div className="card-body"  style={{ display: 'flex', justifyContent: 'center', margin:'10px'}}>
      <div>
      <h2  style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '34px', border: 'solid', margin: '2px',}}>Create new account</h2>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="*Email"
          style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '18px', border: 'solid', margin: '2px'}}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="*Password"
          style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '18px' , border: 'solid', margin: '2px'}}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="*Password Confirm"
          style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '18px' , border: 'solid', margin: '2px'}}
        />
      </div>
      <div className="mb-3">
        <input
          type="name"
          className="form-control"
          placeholder="*Name"
          style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '18px' , border: 'solid', margin: '2px'}}
        />
      </div>
      <div className="mb-3">
        <input
          type="last_name"
          className="form-control"
          placeholder="*Last Name"
          style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '18px' , border: 'solid', margin: '2px'}}
        />
      </div>
      <div className="mb-3">
        <input
          type="username"
          className="form-control"
          placeholder="*Username"
          style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '18px' , border: 'solid', margin: '2px'}}
        />
      </div>

      <button
        onClick={()=>{
          navigate('/login')
        }}
        className="btn btn-light"
        style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '18px' , border: 'solid', margin: '2px', cursor:'pointer'}}
      >
        Sign up
      </button>
      </div>
    </div>
  </div>
</div></div>;
};

export default RegistrationPage;
