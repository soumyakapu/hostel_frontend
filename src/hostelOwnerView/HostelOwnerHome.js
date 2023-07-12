import { useParams } from "react-router-dom"

const HostelOwnerHome = () =>{

    const {user} =useParams()

    return(
        <div>
           <p>Welcome {user}</p> 
                
        </div>
    )
}
export default HostelOwnerHome