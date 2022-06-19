import StyledClientList from "./styles/ClientList.styled";

const ClientList = ({ data }) => {

    return (
        <StyledClientList>
            <h2 className="client-heading">Clients</h2>
            <p className="client-text">
                We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.
            </p>
            <div className="client-grid">
                {data.map( brand => <img className="client-logo" key={brand.id} alt={`${brand.name} logo`} src={brand.logo_url} />)}
            </div>
        </StyledClientList>
    )
}

export default ClientList