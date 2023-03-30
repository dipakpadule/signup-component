import './App.scss';

function App() {
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
        <form action='submit' className='signup-card-formdata'>
          <input type='text' id='fname' name='fname' placeholder='First Name' className='sze'></input>
          <input type='text' id='lname' name='lname' placeholder='Last Name' className='sze'></input>
          <input type='email' id='email' name='email' placeholder='Email Address' className='sze'></input>
          <input type='password' id='password' name='password' placeholder='Password' className='sze'></input>
          <button className='szeb'>Claim your free trial </button>
          <a href='/'>By clicking the button, you are agreeing to our <span>Terms and Services</span></a>
        </form>
      </section>
    </section>
  );
}

export default App;

// - View the optimal layout for the site depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Receive an error message when the `form` is submitted if:
//   - Any `input` field is empty. 
//   The message for this error should say *"[Field Name] cannot be empty"*
//   - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). 
//   The message for this error should say *"Looks like this is not an email"*