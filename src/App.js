import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false,
    pushNotifications: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of the form data:");
    console.log(formData);
  }


  return (
    <div className='flex flex-col items-center mt-2'>
      <form onSubmit={submitHandler}>
        <info>
          <label htmlFor='firstName'>First Name:</label><br />
          <input type='text'
            name="firstName"
            id="firstName"
            placeholder='eg. Shubham'
            value={formData.firstName}
            onChange={changeHandler}
            className='outline'
          />


          <br />
          <label htmlFor='lastName'>Last Name:</label><br />
          <input type='text'
            name="lastName"
            id="lastName"
            placeholder='eg. Gupta'
            value={formData.lastName}
            onChange={changeHandler}
            className='outline'
          />


          <br />
          <label htmlFor='email'>Email Address:</label><br />
          <input type='email'
            name="email"
            id="email"
            placeholder='eg. shubham@gmail.com'
            value={formData.email}
            onChange={changeHandler}
            className='outline'
          />


          <br />
          <label>Country</label>
          <br />
          <select
            id='country'
            name='country'
            value={formData.country}
            onChange={changeHandler}
            className='outline'
          >
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="canada">Canda</option>
            <option value="australia">Australia</option>

          </select>


          <br />
          <label htmlFor='streetAddress'>Street Address:</label><br />
          <input type='text'
            name="streetAddress"
            id="streetAddress"
            placeholder='B-25C'
            value={formData.streetAddress}
            onChange={changeHandler}
            className='outline'
          />

          <br />
          <label htmlFor='city'>City</label><br />
          <input type='text'
            name="city"
            id="city"
            placeholder='Mumbai'
            value={formData.city}
            onChange={changeHandler}
            className='outline'
          />


          <br />
          <label htmlFor='state'>State / Province</label><br />
          <input type='text'
            name="state"
            id="state"
            placeholder='Maharasthra'
            value={formData.state}
            onChange={changeHandler}
            className='outline'
          />

          <br />
          <label htmlFor='postalCode'>Postal Code:</label><br />
          <input type='text'
            name="postalCode"
            id="postalCode"
            placeholder='400080'
            value={formData.postalCode}
            onChange={changeHandler}
            className='outline'
          />
        </info>


        <br />
        <br />

        <fieldset>

          <legend>By Email</legend>

          <div className='flex'>
            <input
              type='checkbox'
              id='comments'
              name='comments'
              checked={formData.comments}
              onChange={changeHandler}
            />

            <div>
              <label htmlFor='comments'>Comments</label>
              <p>Get notified when someones post a comment on a posting</p>
            </div>

          </div>


          <div className='flex'>
            <input
              type='checkbox'
              id='candidates'
              name='candidates'
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor='candidates'>Candidates</label>
              <p>Get notified when a candidate applies for a job</p>
            </div>
          </div>



          <div className='flex'>
            <input
              type='checkbox'
              id='offers'
              name='offers'
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor='offers'>Offers</label>
              <p>Get notified when a candidate applies for a job</p>
            </div>
          </div>

        </fieldset>



        <fieldset>

          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>



          <input
            type='radio'
            id='pushEverything'
            name='pushNotifications'
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything" >Everything</label>
          <br />

          <input
            type='radio'
            id='pushEmail'
            name='pushNotifications'
            value="Same as Email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail" >Same as Email</label>
          <br />

          <input
            type='radio'
            id='pushNothing'
            name='pushNotifications'
            value="No push notificaitons"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing"  >No push notification</label>
          <br />
        </fieldset>

        <button
        className='bg-blue-500 text-white py-2 px-4 rounded-sm'>Save</button>
      </form>
    </div>
  )
}

export default App;
