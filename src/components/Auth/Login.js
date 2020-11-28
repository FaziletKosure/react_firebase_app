import React, {useState} from "react";
import useFormValidation from "./useFormValidation";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
};

function Login(props) {
  const { handleSubmit, handleChange, values } = useFormValidation(
    INITIAL_STATE
  );
  const [login,setLogin]=useState(true)
  // const [name,setName]=useState("")
  // const [email,setEmail]=useState("")
  // const [password,setPassword]=useState("")
  return(
     <div>
     <h2 className='mv3'>{login ? "Login" : "Create Account"}</h2>
     <form onSubmit={handleSubmit} className='flex flex-column'>
      {!login && <input 
      onChange={handleChange}
      value={values.name}
       type="text" 
       name="name"
       placeholder='Your name'
       autoComplete='off'
       />}
        <input 
        onChange={handleChange}
        value={values.email}
        name="email"
       type="email" 
       placeholder='Your Email'
       autoComplete='off'
       />
        <input 
        onChange={handleChange}
        value={values.password}
        name="password"
       type="password" 
       placeholder='Choose a secure password' 
       />
       <div className='flex mt3'>
         <button type='submit' className='button pointer mr2'>
           Submit
         </button>
         <button type='button' className='pointer button'
         onClick={()=>setLogin(prev=>!prev)}
         >
         {login ? "need to create an account?" : "already have an account?"}
         </button>

       </div>
       
     </form>
      </div>)
}

export default Login;
