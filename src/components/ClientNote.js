import StyledClientNote from "./styles/ClientNote.styled";

const ClientNote = ({ data }) => {

    return (
        <StyledClientNote>
            <h3 className="note__brand">{data.brand}</h3>
            <p className="note__title">{data.title}</p>
            <p className="note__link"> <a href=""> Read more</a></p>
        </StyledClientNote>
    )

}

export default ClientNote