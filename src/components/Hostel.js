import { useEffect, useState } from "react"
import { FETCH_ALL_HOSTELS } from "../utils/Api"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
const Hostel = ()=>{
    const [hostels,setHostels] = useState([])
    
    useEffect(() => {
        async function getAll(){
            const response = await fetch(FETCH_ALL_HOSTELS) 
            const jsonData = await response.json()
           setHostels(jsonData.data)
        }
        getAll()
      }, []);
    return(
        <div className="">
         <h2>Hostels</h2>
         <hr/>
           <div className="container">
                {hostels.map(hostel => (
                    <div className="grid text-center style=--bs-columns: 3  listitems"> 
                <ul key={hostel.id}>
                    <div className="g-col-2 ">
                    <label>HostelName :</label>{hostel.hostelName}</div>
                    <div className="g-col-4"><label>HostelOwnerName :</label>{hostel.hostelOwnerName}</div>
                    <div className="g-col-4"><label>Owner Email :</label>{hostel.email}</div>
                    <div className="g-col-4"><label>HostelAddress :</label>{hostel.hostelAddress}</div>
                    <div className="g-col-4"> <label>HostelContact :</label>{hostel.hostelContact.hostelContact}</div>
                    <div className="g-col-4"><label>HostelOwnerContact :</label>{hostel.hostelContact.hostelOwnerContact}</div>
                    <div className="g-col-4"><label>Electicity :</label>{hostel.facilities.electricity}</div>
                    <div className="g-col-4"><label>Water :</label>{hostel.facilities.water}</div>
                    
                </ul>
                </div>
                ))}
                
            </div>
        </div>
    )
}
export default Hostel