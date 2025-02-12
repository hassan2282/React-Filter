import { useEffect, useState } from 'react';
import './App.css';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://679ba4c233d3168463249e52.mockapi.io/api/v1/users")
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='flex flex-col w-screen h-auto bg-indigo-100' dir='rtl'>
      <input type='search' className='rounded-md bg-indigo-50 w-[30%] shadow-sm p-2 m-20 hover:scale-105 duration-300 hover:ring-2 hover:ring-indigo-200 hover:shadow-lg' placeholder='جست و جو ...'/>
      <hr className='h-1 w-screen bg-indigo-200'/>
      <div className='flex flex-col items-center justify-center w-full h-auto text-center'>
        <table className='w-[90%] pt-12 space-y-5' dir='ltr'>
          <thead className='flex flex-row w-full justify-between items-center'>
            <tr className='flex flex-row w-full justify-between items-center *:p-4 *:w-[25%] *:border-2 *:rounded-md *:border-indigo-300 text-xl'>
              <th>name</th>
              <th>email</th>
              <th>password</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
            {
              data &&
              data.map((item) => (
                <tr key={item.id} className="flex flex-row w-full justify-between items-center *:p-4 *:w-[25%] *:border-2 *:rounded-md *:border-indigo-300">
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.address}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
