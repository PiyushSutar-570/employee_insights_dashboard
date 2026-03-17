import React from 'react'
import { useState,useEffect } from 'react'
import { fetchEmployees } from '../api/employeeApi'
import VirtualTable from '../components/VirtualTable';

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
            <VirtualTable data={employees} />
        </div>
    </div>
  )
}

export default List