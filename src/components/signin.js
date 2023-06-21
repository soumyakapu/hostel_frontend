import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
const Sigin = () =>{
    const navigate =useNavigate();
    return(
    <div className='row'>
         <div className='mx-auto col-10 col-md-8 col-lg-6'>
            <form>
              <div className="form-group  ">
               <label className='text-info'>Name</label>
                 <input type="text" className="form-control w-50"
                  placeholder="Enter name"/>
              </div>
              <div className="form-group ">
               <label  className='text-info'>Password</label>
               <input type="password" 
                className="form-control w-50"
                placeholder="Password"/>
              </div>
             <button type="submit" className="btn btn-primary m-2"
              onClick={()=>{
                navigate('/')
             }} 
             >Sigin</button>
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