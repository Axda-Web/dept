import StyledClientNoteContainer from './styles/ClientNoteContainer.styled'

import ClientNote from './ClientNote'

const ClientNoteContainer = ({ data }) => {

    return (
        <StyledClientNoteContainer>
            { data.map( work => <ClientNote key={work.id} data={work} /> ) }
        </StyledClientNoteContainer>
    )
}

export default ClientNoteContainer