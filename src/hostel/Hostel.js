import { useEffect, useState } from "react"
import { FETCH_ALL_HOSTELS } from "../utils/Api"
import 'bootstrap/dist/css/bootstrap.min.css'
const Hostel = ()=>{
    const [hostels,setHostels] = useState([])
  
    // const fetchHostels = async() =>{
    //     const response = await fetch(FETCH_ALL_HOSTELS,{
    //         method : 'GET',
    //         headers : {
    //             "Content-Type" : "application/json"
    //         }
    //     })
    //         const data = response
    // }
    // useEffect(()=>{
    //     fetchHostels()
    // },[])
    useEffect(() => {
        fetch(FETCH_ALL_HOSTELS) 
          .then(response => response.json())
          .then(data => setHostels(data))
          .catch(error => console.error(error));
      }, []);
    return(
        <div>
         <h2>Hostels</h2>
         <hr/>
           
                {hostels.map(hostel => (
                    <div className="grid text-center style=--bs-columns: 3 bg-light">
                <ul key={hostel.id}>
                    <div className="g-col-2">
                    <li ><label>HostelName :</label>{hostel.hostelName}</li></div>
                    <div className="g-col-4"><li><label>HostelOwnerName :</label>{hostel.hostelOwnerName}</li></div>
                    <div className="g-col-4"><li>{hostel.hostelAddress}</li></div>
                    <div className="g-col-4"> <li >{hostel.hostelContact.hostelContact}</li></div>
                    <div className="g-col-4"><li >{hostel.hostelContact.hostelOwnerContact}</li></div>
                    <div className="g-col-4"><li >{hostel.facilities.electricity}</li></div>
                    <div className="g-col-4"><li >{hostel.facilities.water}</li></div>
                    
                </ul>
                </div>
                ))}
       
        </div>
    )
}
export default Hostel