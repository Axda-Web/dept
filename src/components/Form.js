import StyledForm from "./styles/Form.styled"

import { BsFillCheckCircleFill } from 'react-icons/bs'

const Form = ({ formValues, formErrors, formSubmit, handleFormChange, handleFormSubmit }) => {

    return (
        <StyledForm>
            <h2 className="form-heading">QUESTION? WE ARE HERE TO HELP!</h2>
            <form className="form" onSubmit={handleFormSubmit} noValidate>
                
                <div className="form__name">
                    <label htmlFor="name">NAME</label>
                    <input className={ formErrors.nameError ? 'invalid' : null } type="text" id="name" name="name" value={formValues.name} onChange={handleFormChange} />
                    <p className="form__error-message">{formErrors.nameError}</p>
                </div>
                <div className="form__email">
                    <label htmlFor="email">EMAIL</label>
                    <input className={ formErrors.emailError ? 'invalid' : null } type="email" id="email" name="email" value={formValues.email} onChange={handleFormChange} />
                    <p className="form__error-message">{formErrors.emailError}</p>
                </div>
                <div className="form__message">
                <label htmlFor="message">MESSAGE</label>
                <textarea className={ formErrors.messageError ? 'invalid' : null } name="message" id="message" rows="5" value={formValues.message} onChange={handleFormChange} />
                <p className="form__error-message">{formErrors.messageError}</p>
                </div>
                { Object.keys(formErrors).length === 0 && formSubmit ? (<p className="form__success-message">Your submission has been sent <BsFillCheckCircleFill style={{ color: '#5CB85C' }} /></p>) : null }

                <input className="form__btn" type="submit" value="SEND" />
            </form> 
        </StyledForm>
    )
}

export default Form