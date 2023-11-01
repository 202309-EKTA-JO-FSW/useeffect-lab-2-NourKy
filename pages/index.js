import React ,{ useState,useEffect } from 'react' 
import Form from '../Components/Form/Form'
import UserCard from '../Components/UserCard/UserCard'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [userName,setUserName]=useState('');
  const[userData,setUserData]=useState({});
 // console.log(`userNamevalue`,userName);
  useEffect(() => {
    if (userName) {
      fetch(`https://api.github.com/users/${userName}`)
        .then((r) => {
          if (!r.ok) {
            throw new Error('Network response was not ok');
          }
          return r.json();
        })
        .then((data) => setUserData(data))
        .catch((error) => {
          console.error('Error fetching data:', error);
          // Handle the error as needed
        });
    }
  }, [userName]);
  function updateUserName(input)
  {
    console.log("input",input)
    setUserName(input);

  }
  
  
  return (
    <div className="card">
      <Form onInput={updateUserName} />
      <UserCard userData={userData}/>
    </div>
  );
}
