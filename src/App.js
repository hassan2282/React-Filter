import { useEffect } from 'react';
import './App.css';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'

function App() {

  useEffect(()=> {
    return (
      console.log(first)
    ) 
  },[]);

  return (
    <div className='flex flex-col w-screen h-screen bg-indigo-100' dir='rtl'>
        <input type='search' className='rounded-md bg-indigo-50 w-[30%] shadow-sm p-2'/>
        <div className='flex flex-col items-start justify-center w-full h-96 bg-indigo-200'>

        </div>
    </div>
  );
}

export default App;
