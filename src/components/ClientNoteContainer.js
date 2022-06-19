import StyledClientNoteContainer from './styles/ClientNoteContainer.styled'

import ClientNote from './ClientNote'

const ClientNoteContainer = ({ data }) => {

    return (
        <StyledClientNoteContainer>
            { data.slice(5, 8).map( work => <ClientNote key={work.id} data={work} /> ) }
        </StyledClientNoteContainer>
    )
}

export default ClientNoteContainer