import React from 'react'
import { useState,useEffect } from 'react'
import { fetchEmployees } from '../api/employeeApi'

const List = () => {

  const [employees,setEmployees] = useState([]);

  useEffect(()=>{
    async function loadData(){
        const data = await fetchEmployees();
        setEmployees(data.TABLE_DATA.data);
    }
    loadData();
  },[])


  return (
    <div className='p-6'>
        <h1 className='text-xl font-bold mb-4'>Employee List</h1>
        <div className='border'>
            {employees.map((employee,index)=>(
                <div key={index} className='flex justify-between border-b p-2'>
                    <span>{employee[0]}</span>
                    <span>{employee[1]}</span>
                    <span>{employee[2]}</span>
                    <span>{employee[3]}</span>
                    <span>{employee[4]}</span>
                    <span>{employee[5]}</span>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default List