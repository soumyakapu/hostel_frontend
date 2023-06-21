
import { NavLink } from "react-router-dom"

const Nav = () =>{

    return(
        <nav className=" bg-secondary p-2 ">
          

                    <NavLink   to={'/'} className={'text-dark p-3 m-3'}>Home</NavLink>
                    <NavLink to={'/hostel'} className={'text-dark p-2 m-1'}>Hostel</NavLink>
                    <NavLink to={'/signin'}>Sigin</NavLink>
         </nav>
    )
    

}
export default Nav