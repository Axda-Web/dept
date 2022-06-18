import StyledClientCardContainer from "./styles/ClientCardContainer.styled";

import ClientCard from "./ClientCard";


const ClientCardContainer = ({ data }) => {

    const sortData = data.slice(0, 5)
    console.log(sortData)

    return (
        <StyledClientCardContainer>
            { data.slice(0, 5).map( work => <ClientCard key={work.id} data={work} />) }
        </StyledClientCardContainer>
    )
}

export default ClientCardContainer