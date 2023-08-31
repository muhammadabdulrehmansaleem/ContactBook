// import React,{useState} from 'react';
import './App.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route, Routes} from 'react-router-dom';
import { nanoid } from 'nanoid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
function App() {
  const   LOCAL_STORAGE_KEY='Contacts';
  const [Contacts, setContacts] = useState(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return retrieveContacts || [];
});
  const removeContactHandler=(id)=>
  {
    const newContactList=Contacts.filter((contact)=>
    {
        return contact.id!==id;
    });
    setContacts(newContactList);
  }
  const addContactHandler=(Contact)=>{
      console.log(Contacts);
      setContacts([...Contacts, { id: nanoid(), ...Contact }]);
  }
  //Use effects are actually react hooks(They allow you to do what class components do (like managing state and using lifecycle methods) without needing to write a class. Hooks provide a more straightforward and organized way to work with component logic.--Matlab agar form sa input la raha hain to hama uska ak object babana parta tha model classes sa bachna ka lia yaha hooks ko use karta hain) whcih is used for side functionalities like updating the heading under if the doctor login welcome dotor if patient welcome patient like this and also for managing data retrevial from db and insertion of the data into db
  // While the props are used to pass the data from parent to child and so on 
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(Contacts));
  },[Contacts]);
  return (
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<ContactList Contacts={Contacts} getContactId={removeContactHandler} />} />
      <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
    </Routes>
  </Router>
  );
}

export default App;
//passing function as a prop like <ContactList Contacts={Contacts} getContactId={removeContactHandler}/>  removeContactHandler this is function passes as props and in the child we will access this function using props.getContactId and also pass it to nested child 
 {/* This is the best approach where we use render instaed of element its good when we pass props along with componenet routing it will creates the componenet that is rendered once and will use the previous state of the component again and again instead of creating the new componenet */}

      {/* <Route path='/add' render={(props)=>(
        <AddContact {...props} addContactHandler={addContactHandler}></AddContact>
  )}>
      </Route> */}
      {/* This serves the same function but will recreate the componenets that will be rendered again and again when ever we visit this route it not good regarding performance optimization
      <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
    */}