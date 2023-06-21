import { useState } from "react";
import { useNavigate } from "react-router-dom"

const HostelRegister = () =>{
    const hosteDetails = {
        hostelName :'',
        hostelOwnerName :'',
        hostelAddress : '',
        contact :{
            hostelContact : '',
            hostelOwnerContact : ''
        },
        facilities : {
            electricity : '',
            water       : '',
            roomAvailability : false
        },
        isActive : false
    }
    const [hostels,setHostels] = useState(hosteDetails)
    const navigate = useNavigate();
    const onChangeHandler = (e)=>{

        
        if([e.target.name].toString() == 'hostelContact'){
            setHostels({
                ...hostels,
                contact : {
                    ...hostels.contact,
                    [e.target.name]: e.target.value
                }
            });
        return
        }
        if([e.target.name] == 'hostelOwnerContact'){
            setHostels({
                ...hostels,
                contact : {
                    ...hostels.contact,
                    [e.target.name] : e.target.value
                }
            })
            return ;
        }
        if([e.target.name] == 'electricity'){
            setHostels({
                ...hostels,
                facilities :{
                    ...hostels.facilities,
                    [e.target.name] : e.target.value
                }
            })
            return ;
        }
        if([e.target.name] == 'water'){
            setHostels({
                ...hostels,
                facilities :{
                    ...hostels.facilities,
                    [e.target.name] : e.target.value
                }
            })
            return ;
        }
        if([e.target.name] == 'roomAvailability'){
            setHostels({
                ...hostels,
                facilities :{
                    ...hostels.facilities,
                    [e.target.name] : e.target.value
                }
            })
            return ;
        }

        setHostels({
            ...hostels,
            [e.target.name] : e.target.value
        });
    }
    return(
  
    
    <div className='pt-5 row'>
        <div className='mx-auto col-10 col-md-8 col-lg-6'>
            <form className="border border-success p-4 border-opacity-100 rounded-2">
                <div className="form-group">
                    <label className='text-info '>HostelName</label>
                    <input type="text" className="form-control w-50 "
                    placeholder="Enter your hostel name"
                    name="hostelName"
                    value={hostels.hostelName}
                    onChange={onChangeHandler}/>
                </div>

                <div className="form-group  ">
                    <label className='text-info'>HostelOwnerName</label>
                    <input type="text" className="form-control w-50"
                    placeholder="Enter your name"
                    name="hostelOwnerName"
                    value={hostels.hostelOwnerName}
                    onChange={onChangeHandler}/>
                </div>

                <div className="form-group  ">
                    <label className='text-info'>Hostel Address</label>
                    <input type="text" className="form-control w-50"
                    placeholder="Enter Hostel Address"
                    name="hostelAddress"
                    value={hostels.hostelAddress}
                    onChange={onChangeHandler}/>
                </div>

                <div className="row">
                    <label className="form-label pt-2 text-info">Contact Details</label>
                    <div className="col">
                        <label className="text-info"> Contact</label>
                        <input type="text" className="form-control" 
                        placeholder="enter your contact"
                        name="hostelContact"
                        value={hostels.contact.hostelContact}
                        onChange={onChangeHandler}
                        />
                        
                    </div>

                    <div className="col">
                        <label className="text-info">hostel contact</label>
                        <input type="text" className="form-control" 
                        placeholder="enter hostel contact"
                        name="hostelOwnerContact"
                        value={hostels.contact.hostelOwnerContact}
                        onChange={onChangeHandler}/>
                    </div>
                </div>

                <div className="row">
                     <label className="form-label pt-2 text-info">Hostel Facilities</label>
                    <div className="col">
                        <label className="text-info"> Electicity</label>
                        <input type="text" className="form-control" 
                        placeholder="enter your contact"
                        name="electricity"
                        value={hostels.facilities.electricity}
                        onChange={onChangeHandler}
                        />
                        
                    </div>

                    <div className="col">
                        <label className="text-info">Water</label>
                        <input type="text" className="form-control" 
                        placeholder="enter hostel contact"
                        name="water"
                        value={hostels.facilities.water}
                        onChange={onChangeHandler}/>
                    </div>

                    <div className="col">
                        <label className="text-info">Room Availability</label>
                        
                        <div className="form-check">
                            <input type="radio" className="form-check-input" 
                            placeholder="enter hostel contact"
                            name="1"
                            value={hostels.facilities.roomAvailability}
                            onChange={onChangeHandler}/>
                            <label className="form-check-label">Yes</label>
                        </div>

                        <div className="form-check">
                            <input type="radio" className="form-check-input" 
                            placeholder="enter hostel contact"
                            name="2"
                            value={hostels.facilities.roomAvailability}
                            onChange={onChangeHandler}/>
                            <label className="form-check-label">No</label>
                        </div>
                    </div>
                </div>
                <div className="form--row">
                    <label className="text-info">isActive</label>
                    <div className="form-check">
                    
                        <input type="radio" className="form-check-input"
                        placeholder="Enter Hostel Address"
                        name="isActive"
                        value={hostels.isActive}
                            onChange={onChangeHandler}/>
                        <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input"
                        placeholder="Enter Hostel Address"
                        name="isActive"
                        value={hostels.isActive}
                        onChange={onChangeHandler}/>
                        <label className="form-check-label">No</label>
                    </div>
                </div>
                <button type="submit" 
                className="btn btn-primary"
                onClick={()=>{
                    navigate('/')
                }} > Register</button>

            </form>
        </div>
    </div>
    
    )
}
export default HostelRegister