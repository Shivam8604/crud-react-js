import React, { useEffect, useState } from 'react'
import './App.css'
import EmployeeData from './EmployeeData';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const [data,setData] = useState([]);
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [age,setAge] = useState('0');
  const [id,setId] = useState('0');
  const [isUpdate,setUpdate] = useState(false);




  useEffect(()=>{
    setData(EmployeeData)
  },[]);


  const handleEdit = (id) =>{
    const dt = data.filter(item=> item.id == id);
    if(dt !== undefined){
      setUpdate(true);
      setId(id); 
      setFirstName(dt[0].firstName)
      setLastName(dt[0].lastName)
      setAge(dt[0].age)
    }
  }
  const handleDelete = (id) =>{
    if(id > 0){
      if(window.confirm("Are you sure to delete this item ?")){
        const dt = data.filter(item => item.id !== id);
        setData(dt)
      }
    }
  }

  const handleSave = () =>{
    
  }
  const handleUpdate = () =>{
    const index = data.map((item,index)=>{
      return item.id
    }).indexOf(id);

    const dt = [...data];
    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    dt[index].firstName = firstName;

  }

  const handleClear = () =>{
    setId(0)
    setFirstName("")
    setLastName("")
    setAge("")
  }


  return (
    <div className='App'>

      <div style={{display:'flex', justifyContent:"center",marginTop:"10px",marginBottom:"10px"}}>
        <div>
          <label>First Name :
            <input type='text' placeholder='Enter First Name' value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>Last Name :
            <input type='text' placeholder='Enter Last Name' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>Age :
            <input type='Number' placeholder='Enter Age' value={age} onChange={(e)=> setAge(e.target.value)}/>
          </label>
        </div>
        <div>
        {
          !isUpdate ? <button className='btn btn-primary' onClick={()=>handleSave()}>Save</button>
          :
          <button className='btn btn-primary' onClick={()=>handleUpdate()}>Update</button>
        }
          <button className='btn btn-danger' onClick={()=>handleClear()}>clear</button>
        </div>
      </div>



        <table className='table table-hover'>
          <thead>
            <tr>
              <td>Sr.No</td>
              <td>Id</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Age</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index)=>{
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    <td>
                      <button className='btn btn-primary' onClick={(e)=>handleEdit(item.id)}>Edit</button>&nbsp;
                      <button className='btn btn-danger' onClick={(e)=>handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default App
