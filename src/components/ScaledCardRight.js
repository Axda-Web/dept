import StyledScaleCardRight from "./styles/ScaleCardRight.styled";

import ClientCard from "./ClientCard";
import ClientNoteContainer from "./ClientNoteContainer";

const ScaledCardRight = ({ card, notes }) => {

    return (
        <StyledScaleCardRight>
            <ClientNoteContainer data={notes}/>
            <ClientCard data={card}/>
        </StyledScaleCardRight>
    )
}

export default ScaledCardRight