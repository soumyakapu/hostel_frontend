import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { CREATE_HOSTEL } from "../utils/Api";

const HostelRegister = () =>{
    const hosteDetails = {
        hostelName :'',
        hostelOwnerName :'',
        hostelAddress : '',
        email:'',
        password:'',
        confirmPassword :'',
        hostelContact :{
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
                hostelContact : {
                    ...hostels.hostelContact,
                    [e.target.name]: e.target.value
                }
            });
        return
        }
        if([e.target.name] == 'hostelOwnerContact'){
            setHostels({
                ...hostels,
                hostelContact : {
                    ...hostels.hostelContact,
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
    const radioBtnHandler = (e)=>{
        if(e.target.id == 'yes'){
            setHostels({
                ...hostels,
                facilities : {
                    ...hostels.facilities,
                    [e.target.name] : true
                }
            })
            return;
        }
        if(e.target.id == 'no'){
            setHostels({
                ...hostels,
                facilities : {
                    ...hostels.facilities,
                    [e.target.name] : false
                }
            })
            return;
        }
        if(e.target.id == 'active'){
            setHostels({
                ...hostels,
                [e.target.name] : true
            })
            return;
        }
        setHostels({
            ...hostels,
            [e.target.name] : false
        })
    }

    // check the hostels.password === hostels.confirmPassword it true ->
    
    const createHostel = async() =>{
       const response = await fetch(CREATE_HOSTEL,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(hostels)
        })
        
       const jsondata = await response.json()
      console.log(jsondata)
      if(jsondata.status !== 'CREATED'){
        alert(jsondata.message)
        // navigate('/register')
      }
      else{
        navigate('/signin')
      }
        
      

    }
    const submitHandler = (e) =>{
        e.preventDefault()
        createHostel()
        // if(hosteDetails.hostelName.length>0
        //     && hosteDetails.hostelOwnerName.length>0 && hosteDetails.hostelAddress.length>0 
        //     && hosteDetails.hostelContact.hostelContact.length >0  && hosteDetails.hostelContact.hostelOwnerContact.length > 0){
        //         console.log("Something getting")
               
        // }
    }
    return(
  
    
    <div className='pt-5 row'>
        <div className='mx-auto col-10 col-md-8 col-lg-6'>
            <form className="border border-success p-4 border-opacity-100 rounded-2"  onSubmit={submitHandler} >
                <div className="form-group">
                    <label className='text-info '>HostelName</label>
                    <input type="text" className="form-control w-50 "
                    placeholder="Enter your hostel name"
                    name="hostelName"
                    required
                    value={hostels.hostelName}
                    onChange={onChangeHandler}/>
                </div>

                <div className="form-group  ">
                    <label className='text-info'>HostelOwnerName</label>
                    <input type="text" className="form-control w-50"
                    placeholder="Enter your name"
                    name="hostelOwnerName"
                    required
                    value={hostels.hostelOwnerName}
                    onChange={onChangeHandler}/>
                </div>
                <div className="form-group  ">
                    <label className='text-info'>email</label>
                    <input type="email" className="form-control w-50"
                    placeholder="Enter your email"
                    name="email"
                    required
                    value={hostels.email}
                    onChange={onChangeHandler}/>
                </div>
                <div className="form-group  ">
                    <label className='text-info'>password</label>
                    <input type="password" className="form-control w-50"
                    placeholder="Enter your password"
                    name="password"
                    required
                    value={hostels.password}
                    onChange={onChangeHandler}/>
                </div>
                <div className="form-group  ">
                    <label className='text-info'>confirm password</label>
                    <input type="password" className="form-control w-50"
                    placeholder="Enter your confirm password"
                    name="confirmPassword"
                    required
                    value={hostels.confirmPassword}
                    onChange={onChangeHandler}/>
                    {
                        hostels.confirmPassword && hostels.password !== hostels.confirmPassword && <label style={{color:'red'}}>Password doesn't matched</label>
                    }
                </div>



                <div className="form-group  ">
                    <label className='text-info'>Hostel Address</label>
                    <input type="text" className="form-control w-50"
                    placeholder="Enter Hostel Address"
                    name="hostelAddress"
                    required
                    value={hostels.hostelAddress}
                    onChange={onChangeHandler}/>
                </div>

                <div className="row">
                    <label className="form-label pt-2 text-info">Contact Details</label>
                    <div className="col">
                        <label className="text-info"> Contact</label>
                        <input type="number" className="form-control" 
                        placeholder="enter your contact"
                        name="hostelContact"
                        required
                        value={hostels.hostelContact.hostelContact}
                        onChange={onChangeHandler}
                        />
                        
                    </div>

                    <div className="col">
                        <label className="text-info">hostel contact</label>
                        <input type="number" className="form-control" 
                        placeholder="enter hostel contact"
                        name="hostelOwnerContact"
                        required
                        value={hostels.hostelContact.hostelOwnerContact}
                        onChange={onChangeHandler}/>
                    </div>
                </div>

                <div className="row">
                     <label className="form-label pt-2 text-info">Hostel Facilities</label>
                    <div className="col">
                        <label className="text-info"> Electicity</label>
                        <input type="text" className="form-control" 
                        placeholder="enter availablility of Electricity"
                        name="electricity"
                        
                        value={hostels.facilities.electricity}
                        onChange={onChangeHandler}
                        />
                        
                    </div>

                    <div className="col">
                        <label className="text-info">Water</label>
                        <input type="text" className="form-control" 
                        placeholder="enter availibility of Water"
                        name="water"
                        
                        value={hostels.facilities.water}
                        onChange={onChangeHandler}/>
                    </div>

                    <div className="col">
                        <label className="text-info">Room Availability</label>
                        
                        <div className="form-check">
                            <input type="radio" className="form-check-input" 
                            name='roomAvailability'
                            id='yes'
                            value={hostels.facilities.roomAvailability}
                            onChange={radioBtnHandler}/>
                            <label className="form-check-label">Yes</label>
                        </div>

                        <div className="form-check">
                            <input type="radio" className="form-check-input" 
                            name='roomAvailability'
                            id='no'
                            value={hostels.facilities.roomAvailability}
                            onChange={radioBtnHandler}/>
                            <label className="form-check-label">No</label>
                        </div>
                    </div>
                </div>
                <div className="form--row">
                    <label className="text-info">isActive</label>
                    <div className="form-check">
                    
                        <input type="radio" className="form-check-input"
                        placeholder="Enter Hostel Address"
                        name='isActive'
                        id='active'
                        value={hostels.isActive}
                        onChange={radioBtnHandler}/>
                        <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input"
                        placeholder="Enter Hostel Address"
                        name='isActive'
                        id='inactive'
                        value={hostels.isActive}
                        onChange={radioBtnHandler}/>
                        <label className="form-check-label">No</label>
                    </div>
                </div>
                <button type="submit" 
                className="btn btn-primary"
               > Register</button>

            </form>
        </div>
    </div>
    
    )
}
export default HostelRegister