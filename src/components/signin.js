import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom'
import { LOGIN } from '../utils/Api';
const Sigin = () =>{
  const userDetails ={
    email :'',
    password:''
  }
  const[user, setUser] = useState(userDetails);

    const navigate =useNavigate();
    const handleLogin = async (e)=>{
      e.preventDefault();
      const response = await fetch(LOGIN,{
        method :'POST',
        headers :{
          'Content-Type' :'application/json'
        },
        body :JSON.stringify(user)
      })
     const jsondata = await response.json()
      if(jsondata.status !== 'OK'){
        console.log(jsondata)
        alert(jsondata.message)
        return;
      }
        navigate('/dashboard')
    }
    return(
    <div className='row'>
         <div className='mx-auto col-10 col-md-8 col-lg-6'>
            <form>
              <div className="form-group  ">
               <label className='text-info'>Email</label>
                 <input type="email" className="form-control w-50"
                 name='email'
                 value={user.userName}
                 onChange={(e)=>{ setUser({...user,[e.target.name]:e.target.value})}}
                  placeholder="Enter email"/>
              </div>
              <div className="form-group ">
               <label  className='text-info'>Password</label>
               <input type="password" 
                className="form-control w-50"
                name='password'
                value={user.password}
                onChange={(e)=>{ setUser({...user,[e.target.name]:e.target.value})}}
                placeholder="Password"/>
              </div>
             <button type="submit" className="btn btn-primary m-2"
              onClick={handleLogin} 
             >Login</button>
             <button type="submit" 
             className="btn btn-primary"
             onClick={()=>{
                navigate('/register')
             }} > Register</button>
           </form>
        </div>
   </div>
    )
}
export default Sigin