import React,{useState} from 'react'
import './trainerForm.css'
import axios from 'axios';

function TrainerForm  () {
    const [file, setFile] = useState()
    const [description, setDescription] = useState("")

    const formData = new FormData()
    formData.append("image", file)
    formData.append("description", description)


    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        experience: "",
        job: "",
        about: "",
        trainerImage:""
    });
    

    const [formValuesErrors, setFormValuesErrors] = useState({
        firstNameErr: null,
        lastNameErr: null,
        emailErr: null,
        experienceErr: null,
        jobErr: null,
        aboutErr: null,
        trainerImageErr: null
    });
    const handleFormChange = (event) => {
        switch (event.target.name) {
            case "email":
                setFormValues({
                    ...formValues,
                    email: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    emailErr:
                        event.target.value.length === 0
                            ? "This field is required"
                                : null,
                });
                break;
            case "firstName":
                setFormValues({
                    ...formValues,
                    firstName: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    firstNameErr:
                        event.target.value.length === 0
                            ? "This field is required"
                            :event.target.value.length < 3 ?
                            "First name must be at least 3 characters"
                            : null,
                });
                break;
                case "lastName":
                    setFormValues({
                        ...formValues,
                        lastName: event.target.value,
                    });
                    setFormValuesErrors({
                        ...formValuesErrors,
                        lastNameErr:
                        event.target.value.length === 0 ?
                        "This field is required"
                        :event.target.value.length < 3 ?
                        "First name must be at least 3 characters"
                        : null,
                    });
                    break;
                    case "experience":
                    setFormValues({
                        ...formValues,
                        experience: event.target.value,
                    });
                    setFormValuesErrors({
                        ...formValuesErrors,
                        experienceErr:
                        event.target.value.length === 0 ?
                        "This field is required"
                        : null,
                    });
                    break;

            case "job":
                setFormValues({
                    ...formValues,
                    job: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    jobErr:
                    event.target.value.length === 0
                        ? "This field is required"
                        : null,
                });
                break;
            case "about":
                setFormValues({
                    ...formValues,
                    about: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    aboutErr:
                        event.target.value.length === 0
                        ? "This field is required"
                        : null,
                });
                break;
                case "trainerImage":
                    setFormValues({
                        ...formValues,
                        trainerImage: event.target.value,
                    });
                    setFormValuesErrors({
                        ...formValuesErrors,
                        trainerImageErr:
                            event.target.value.length === 0
                            ? "This field is required"
                            : null,
                    });
                break;
                default:
                break;
        }
    };
    const submit = async (e) => {
        e.preventDefault();
        
            const result = await axios.post('/trainer-form', formData, 
            { headers: {'Content-Type': 'multipart/form-data'}}
            )
            console.log(result.data) 
}

return (
    <> 
    <section className="intro">
<div className="bg-image-vertical h-100 back-style" >
    <div className="mask d-flex align-items-center h-100">
        <div className="container ">
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
            <div className="card cont-style" style={{borderRadius: "10rem;"}}>
                <div className="card-body p-5">

                <h1 className="mb-5 text-center sammly-style">Sammly Form</h1>

                <form  onSubmit={(e) => submit(e)}>
                    <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                        <div className="form-outline">
                        <input placeholder="First Name"
                        type="text" 
                        id="firstNameInput" 
                        className="form-control my-input" 
                        value={formValues.firstName}
                        onChange={(e) => handleFormChange(e)}
                        name="firstName"
                        />
                        {
                        formValuesErrors.firstNameErr&&(
                            <div id="FirstNameHelp" className="form-text text-danger border-danger">
                                {formValuesErrors.firstNameErr}
                            </div>
                        )}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                        <div className="form-outline">
                        <input 
                        placeholder="Last Name"
                        type="text" 
                        id="lastNameInput" 
                        className="form-control "
                        value={formValues.lastName}
                        onChange={(e) => handleFormChange(e)}
                        name="lastName"
                        />
                        {formValuesErrors.lastNameErr&&(
                        <div id="LastNameHelp" className="form-text text-danger">
                            {formValuesErrors.lastNameErr}
                        </div>
                    )}
                        </div>
                    </div>
                    </div>
                    <div className="form-outline mb-4">
                        <input 
                        type="email"
                        placeholder="Email"
                        className="form-control "
                        id="EmailInput"
                        aria-describedby="EmailHelp"
                        value={formValues.email}
                        onChange={(e) => handleFormChange(e)}
                        name="email"
                        />
                        {formValuesErrors.emailErr && (
                    <div id="EmailHelp" className="form-text text-danger">
                        {formValuesErrors.emailErr}
                    </div>
                )}
                    </div>
                    <div className="form-outline mb-4">
                        <input 
                        type="text" 
                        id="form6Example4" 
                        className="form-control" 
                        placeholder="Job"
                        value={formValues.job}
                        onChange={(e) => handleFormChange(e)}
                        name="job"
                        />
                        {formValuesErrors.jobErr && (
                    <div id="EmailHelp" className="form-text text-danger">
                        {formValuesErrors.jobErr}
                    </div>
                )}
                    </div>
                    <div className="form-outline mb-4">
                        <input 
                        type="text" 
                        id="form6Example5" 
                        className="form-control" 
                        placeholder="Experience"
                        value={formValues.experience}
                        onChange={(e) => handleFormChange(e)}
                        name="experience"
                        />
                        {formValuesErrors.experienceErr && (
                    <div id="EmailHelp" className="form-text text-danger">
                        {formValuesErrors.experienceErr}
                    </div>
                )}
                    </div>
                
                    <div class="input-group mb-3">
                        <input 
                        class="form-control" 
                        type="file"
                        filename={file} 
                        id="formFileMultiple"
                        onChange={e => setFile(e.target.files[0])} 
                        multiple/>
                        <button 
                        className="btn btn-outline-secondary" 
                        type="button" id="button-addon2"
                        onClick={()=>setFile(null)}
                        >Remove</button>
                    </div>

                    <div className="form-outline mb-4">
                        <textarea 
                        placeholder="About"
                        className="form-control" 
                        id="form6Example7" 
                        rows="4"
                        value={formValues.about}
                        onChange={(e) => handleFormChange(e)}
                        name="about"
                        />
                        {formValuesErrors.aboutErr && (
                    <div id="EmailHelp" className="form-text text-danger">
                        {formValuesErrors.aboutErr}
                    </div>
                )}
                    </div>
                    <button 
                    type="submit" 
                    className="btn btn-primary btn-rounded btn-primary btn-lg btn submit-style"
                    disabled={
                        formValuesErrors.emailErr ||
                        formValuesErrors.firstNameErr||
                        formValuesErrors.lastName||
                        formValuesErrors.experienceErr||
                        formValuesErrors.aboutErr||
                        formValuesErrors.jobErr||
                        formValuesErrors.trainerImageErr
                    }
                    >Submit</button>

                </form>

            </div>
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


export default TrainerForm;