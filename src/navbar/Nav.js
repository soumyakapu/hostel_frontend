
import { NavLink } from "react-router-dom"

const Nav = () =>{

    return(
        <nav className=" bg-secondary p-2  ">
          
                
                    <NavLink   to={'/'} className={'text-dark p-5 m-5 '}>Home</NavLink>
                   <NavLink to={'/hostel'} className={'text-dark p-2 m-3'}>Hostel</NavLink>
                    <NavLink to={'/signin'} className={'text-dark p-2 m-3'}>Sigin</NavLink>
         </nav>
    )
    

}
export default Nav