import React from "react";
import "@fontsource/raleway"
import { useNavigate } from "react-router-dom";



const RegistrationPage = () => {
const navigate = useNavigate('')

  return <div>    
    <div
  style={{
    width: "100vw",
    height: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: '#002939',
    flexDirection: 'column'
  }}
>
  <nav style={{ display: 'flex', justifyContent: 'space-around',  width:  '100vw', height: '4vw'}}>
  <h2 style={{ width: '15vw', fontFamily: 'Raleway', fontWeight: '2200', fontSize: '38px',  margin: '2px', color: '#E4CFA9', cursor: 'pointer'}} onClick={()=>{
    navigate('/')
  }} >
    Booking.com
    </h2>
    <h2 style={{ width: '15vw', fontFamily: 'Raleway', fontWeight: '2200', fontSize: '28px',  margin: '2px', color: '#E4CFA9', cursor: 'pointer'}} onClick={()=>{
      navigate('/login')
    }} >
      Need to just log in? Click here!
    </h2>
    </nav>
  <div className="card" style={{height:'16vw', width: "100%",backgroundSize: '100%', backgroundImage: `url('https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8&w=1000&q=80')`, backgroundRepeat: 'no-repeat' }}>
    <div className="card-body"  style={{ display: 'flex', justifyContent: 'center', margin:'10px'}}>
      <div>
      <h2  style={{ width: '10vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '34px', border: 'solid', margin: '2px',}}>Sign up!</h2>
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
        style={{ width: '199px', fontFamily: 'Raleway', fontWeight: '400', fontSize: '18px' , border: 'solid',  cursor:'pointer'}}
      >
        Create account
      </button>
      </div>

    </div>
    <div
style={{
  width: "100vw",
  height: "33vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: '#002939',
  flexDirection: 'column'
}}
>
    <footer style={{marginTop: '20px' ,display: "flex",
    alignItems: "center",
    justifyContent: "center", width: '30vw', fontFamily: 'Raleway', fontWeight: '400', fontSize: '10px',  margin: '2px', color: '#E4CFA9', }}><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim consequatur, reprehenderit provident sint soluta tenetur sequi quia dolore aliquam illum dolorem eaque iure labore consequuntur adipisci blanditiis voluptate in doloribus.</h2></footer>
  </div>
  </div>
</div></div>;
};

export default RegistrationPage;
