import React, {useState, useEffect} from 'react';
import 'style-components'
import DataTable, {createTheme} from 'react-data-table-component';



const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const URL = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:tu_nombre'
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setEmployees(data);
    }

    useEffect(() => {
        showData();
    }, [])

    const columns = [
        {
            name: 'id',
            selector: row => row.id
        },
        {
            name: 'name',
            selector: row => row.name
        },
        {
            name: 'birthday',
            selector: row => row.birthday
        },
        
    ]
  return (
    <div className='Employeed'>
       <DataTable 
       columns={columns}
       data={employees}
       />

    </div>
  )
}

export default Employees