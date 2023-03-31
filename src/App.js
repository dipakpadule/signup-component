import { useState, useEffect} from 'react';
import './App.scss';

function App() {

  const initialData = {fname:"", lname:"", email:"", password:""}; //initial values for form fields
  const [formData, setFormData] = useState(initialData);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleFormData = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormError(formValidation(formData));
    setIsSubmit(true);
  };

  useEffect(()=>{
    if(Object.keys(formError).length === 0 && isSubmit){
      console.log(formData);
    }
  },[formData, formError, isSubmit]);

  const formValidation = (data)=>{
    const error = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if(!data.fname){
      error.fname = "first name cannot be empty !";
    }
    if(!data.lname){
      error.lname = "last name cannot be empty !";
    }
    if(!data.email){
      error.email = "email cannot be empty !";
    }else if(!regex.test(data.email)){
      error.email = "not a valid email !";
    }
    if(!data.password){
      error.password = "password cannot be empty !";
    }
    return error;
  };

  return (
    <section className='signup-card'>
      <section className='signup-card-info'>
        <h1>Learn to code by watching others</h1> 
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </section>
      <section className='signup-card-form'>
        <section className='signup-card-form-trial-card'>
          <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
        </section>
        <form onSubmit={handleSubmit} className='signup-card-formdata' noValidate>
          <input type='text' id='fname' name='fname' placeholder='First Name' value={formData.fname} onChange={handleFormData} className='sze'></input>
          <p>{formError.fname}</p>
          <input type='text' id='lname' name='lname' placeholder='Last Name' value={formData.lname} onChange={handleFormData} className='sze'></input>
          <p>{formError.lname}</p>
          <input type='email' id='email' name='email' placeholder='Email Address' value={formData.email} onChange={handleFormData} className='sze'></input>
          <p>{formError.email}</p>
          <input type='password' id='password' name='password' placeholder='Password' value={formData.password} onChange={handleFormData} className='sze'></input>
          <p>{formError.password}</p>
          <button type='submit' className='szeb'>Claim your free trial </button>
          <a href='https://sine-up.netlify.app/'>By clicking the button, you are agreeing to our <span>Terms and Services</span></a>
        </form>
      </section>
    </section>
  );
}

export default App;

// - Receive an error message when the `form` is submitted if:
//   - Any `input` field is empty. 
//   The message for this error should say *"[Field Name] cannot be empty"*
//   - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). 
//   The message for this error should say *"Looks like this is not an email"*