import StyledClientNote from "./styles/ClientNote.styled";

const ClientNote = ({ data }) => {

    return (
        <StyledClientNote>
            <h3 className="note__brand">{data.brand}</h3>
            <p className="note__title">{data.title}</p>
            <div className="note__link"><img src="./assets/img/point-circle.svg" alt="" /> <a href=""> Read more</a></div>
        </StyledClientNote>
    )

}

export default ClientNote