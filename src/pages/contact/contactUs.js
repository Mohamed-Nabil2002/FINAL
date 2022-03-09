import axios from 'axios';
import {React , useState} from 'react'
import 'react-bootstrap-icons'
import { validEmail} from './regx';
import './contact.css'
import * as Icon from 'react-bootstrap-icons';

export default function ContactUs (){
    const [formValues, setFormValues] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Message: "",
    });
    const [formValuesErrors, setFormValuesErrors] = useState({
        FirstNameErr: null,
        LastNameErr: null,
        EmailErr: null,
        MessageErr: null,
    });
    const handleFormChange = (event) => {
        switch (event.target.name) {
            case "FirstName":
                    setFormValues({
                        ...formValues,
                        FirstName: event.target.value,
                    });
                    setFormValuesErrors({
                        ...formValuesErrors,
                        FirstNameErr:
                        event.target.value.length === 0 ?
                        "This field is required"
                        :event.target.value.length < 3 ?
                        "First name must be at least 3 characters"
                        : null,
                    });
                    break;
                    case "LastName":
                    setFormValues({
                        ...formValues,
                        LastName: event.target.value,
                    });
                    setFormValuesErrors({
                        ...formValuesErrors,
                        LastNameErr:
                        event.target.value.length === 0 ?
                        "This field is required"
                        :event.target.value.length < 3 ?
                        "Last name must be at least 3 characters"
                        : null,
                    });
                    break;
                    case "Email":
                        setFormValues({
                            ...formValues,
                            Email: event.target.value,
                        });
                        setFormValuesErrors({
                            ...formValuesErrors,
                            EmailErr:
                            event.target.value.length === 0
                            ? "This field is required"
                            : validEmail.test(event.target.value) === false ? " Email must be as xxx@xxx.xxx"
                            : null,
                        });
                        break;
                case "Message":
                    setFormValues({
                    ...formValues,
                    Message:event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    MessageErr:
                    event.target.value.length === 0 ?
                    "This field is required":
                    event.target.value.length >= 100 ? 
                    " Maximum lenght of characters is 100 characters":
                    null,
                })
                break;
                default:
                break;

        };
    }; 
    const handleSubmitForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users',({FirstName:e.target.firstName,
        LastName:e.target.lastName, Email:e.target.email,Message:e.target.message}))
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    };  
    return (
        <>
        <section id="contact">
       
            <div className="container p-1 psm-3">
                <div className="row">
                    <div className="col-12 text-primary">
                        <h2 className="contact-text" >Contact Us </h2>

                    </div>
                </div>
            </div>
        
       

        <div className="form-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form  onSubmit={(e) => handleSubmitForm(e)} className="form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                <input
                    placeholder="First Name"
                    type="text" 
                    id="firstNameInput" 
                    className="form-control form-control-lg" 
                    value={formValues.FirstName}
                    onChange={(e) => handleFormChange(e)}
                    name="FirstName"
                    />
                        {
                        formValuesErrors.FirstNameErr&&(
                            <div id="FirstNameHelp" className="form-text text-danger border-danger">
                                {formValuesErrors.FirstNameErr}
                            </div>
                        )}
                                </div>
                                <div className="form-group col-md-6">
                                <input 
                    placeholder="Last Name"
                    type="text" 
                    id="lastNameInput" 
                    className="form-control form-control-lg"
                    value={formValues.LastName}
                    onChange={(e) => handleFormChange(e)}
                    name="LastName"
                    />
                    {formValuesErrors.LastNameErr&&(
                        <div id="LastNameHelp" className="form-text text-danger">
                            {formValuesErrors.LastNameErr}
                        </div>
                    )}
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="form-group col-md-12">
                                <input
                    type="email"
                    placeholder="Email"
                    className="form-control form-control-lg"
                    id="EmailInput"
                    aria-describedby="EmailHelp"
                    value={formValues.Email}
                    onChange={(e) => handleFormChange(e)}
                    name="Email"
                />

                {formValuesErrors.EmailErr && (
                    <div id="EmailHelp" className="form-text text-danger">
                        {formValuesErrors.EmailErr}
                    </div>
                )}
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <textarea
                                    type="text"
                                    id="MessageInput"
                                    aria-describedby="MessageHelp"
                                    value={formValues.Message}
                                    onChange={(e) => handleFormChange(e)}
                                    className="form-control form-control-lg" 
                                    rows="4" placeholder="Message" required
                                    name="Message"
                                    />
                                    {formValuesErrors.MessageErr && (
                            <div id="MessageHelp" className="form-text text-danger">
                            {formValuesErrors.MessageErr}
                            </div>
                        )}
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group col-md-12 text-center">
                                <button 
                                type="submit"
                                className="btn btn-primary"
                                disabled={formValuesErrors.EmailErr || 
                                formValuesErrors.LastNameErr || formValuesErrors.FirstNameErr ||
                                formValuesErrors.Message} > Send Message</button>
                            </div>
                        </form>
                    </div>
                    
                <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"><Icon.HouseFill size={30}  position="absolute"/></i>
                <h4>Address:</h4>
                <p> Minya</p>
              </div>

              <div className="email">
              <i className="icofont-phone"><Icon.EnvelopeFill size={30}  position="absolute"/></i>
                <h4>Email:</h4>
                <p>xxx@gmail.com</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"><Icon.PhoneFill size={30}  position="absolute"/></i>
                <h4>Phone:</h4>
                <p>+20 95589 55488</p>
              </div>
            </div>
                </div>
            </div>
            </div>
            
            </div>
        
        </section>
        </>
    )
}