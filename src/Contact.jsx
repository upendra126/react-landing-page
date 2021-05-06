import React, {useState} from 'react';
import web from '../src/images/ill3.png';

const Contact = () => {
    const [data, setData] = useState({
        name:"",
        number:"",
        email:"",
        msg:"",
    })
    const InputEvent = (event) => {
        const { name, value} = event.target;

        setData((preVal) => {
            return{
                ...preVal,
                [name]: value,
            }
        })

    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.name}. my phone number is ${data.number}. my email is ${data.email}. my message is ${data.msg} `);

    }
    return (
        <>
        <section id="header">
         <div className="my-5">
        <h1 className="text-center">Contact Us </h1>

         <div className="container">
            <div className="row">
           
              <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
              <div className="mb-3">
  <label htmlFor="name" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="name"  name="name" value={data.name} onChange={InputEvent} placeholder="Enter Your Full Name" />
</div>
<div className="mb-3">
  <label htmlFor="number" className="form-label">Phone Number</label>
  <input type="number" className="form-control" id="number"  name="number" value={data.number} onChange={InputEvent} placeholder="Enter Your Phone Number" />
</div>
              <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent}  placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
</div>
<div className="col-auto">
    <button type="submit" className="btn btn-outline-primary mb-3">Submit</button>
  </div>
</form>
              </div>
              <div className="col-md-6 col-10 mx-auto">
            <img src={web} className="img-fluid animated" alt=""/>

            </div>
              </div>
              </div>
              </div>
</section>

            
        </>
    )
}

export default Contact
