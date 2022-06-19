import StyledForm from "./styles/Form.styled"

const Form = ({ form, handleFormChange, handleFormSubmit }) => {

    return (
        <StyledForm>
            <h2 className="form-heading">QUESTION? WE ARE HERE TO HELP!</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <label htmlFor="name">NAME</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleFormChange} />

                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleFormChange} />

                <label htmlFor="message">MESSAGE</label>
                <textarea name="message" id="message" rows="5" value={form.message} onChange={handleFormChange} />

                <input className="form__btn" type="submit" value="SEND" />
            </form> 
        </StyledForm>
    )
}

export default Form