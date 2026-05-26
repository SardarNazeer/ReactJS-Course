import React from 'react'

const App = () => {

  // localstorage > browser ki memory means browser me data store krna hamesha k lie

  // setitem > item data save karta hai 
  localStorage.setItem('user','Sardar');
  localStorage.setItem('age','18');

  // getitem > items ka data access karne ke liye 
  const user = localStorage.getItem('user');
  console.log(user);

  // removeItem > items ka data remove/delete krne ke liye 
  localStorage.removeItem('user')

  // clear > tamam item remove/delete karne ke liye 

  localStorage.clear()

  // with array & objects 

  const student = {
    name: "Sardar",
    age: 18,
    course: "MERN"
  };

  console.log(student);

  // data save to hugaya hai localstorage me lekin object object karke 
  // islye localstorage me jab ap value key pair me dete ho to value huti hai string form m 

  // localStorage.setItem('student',student);

  // to isko string me convert karenge isko
  
  localStorage.setItem('student',JSON.stringify(student));

  // agar isko wapis retrieve karna hai yani object me convert karna ho 
  const student = JSON.parse(localStorage.getItem('user'));

  // sessionstorage > jab tak browser open rahega data rahega 

  return (
    <div>
      App      
    </div>
  )
}

export default App
