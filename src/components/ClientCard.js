import StyledClientCard from "./styles/ClientCard.styled";


const ClientCard = ({ data }) => {
  return (
    <StyledClientCard backgroundImg={data.img_url}>
        <div className="card-text">
            <h3 className="card__brand">{data.brand}</h3>
            <p className="card__title">{data.title}</p>
            <div className="card__link"><img src="./assets/img/point-circle.svg" alt="" /> <a href=""> Read more</a></div>
        </div>

    </StyledClientCard>
  );
}

export default ClientCard;