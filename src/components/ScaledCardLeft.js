import StyledScaleCardLeft from "./styles/ScaledCardLeft.styled";

import ClientCard from "./ClientCard";
import ClientNoteContainer from "./ClientNoteContainer";

const ScaledCardLeft = ({ card, notes }) => {

    return (
        <StyledScaleCardLeft>
            <ClientCard data={card} />
            <ClientNoteContainer data={notes} />
        </StyledScaleCardLeft>
    )
}

export default ScaledCardLeft