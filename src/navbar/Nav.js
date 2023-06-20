import { NavLink } from "react-router-dom"

const Nav = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
             <div className="container-fluid">
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   <li className="nav-item">
                    <NavLink className={'nav-link active'} aria-current="page"  to={'/'} >Home</NavLink>
                     
                  </li>
                  <li className="nav-item">
                  <NavLink to={'/hostel'} className={'nav-link active'} aria-current="page" >Hostel</NavLink>
                  </li>
                  </ul>
                </div>
            </div>
         
           
           
            
        </nav>
    )
}
export default Nav