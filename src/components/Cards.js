import {Row,} from "react-bootstrap";
import TruckCard from "./TruckCard";

const Cards = ({cards}) => {
    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {cards.map((card) => (<TruckCard key={card.id} card={card}/>))}
            </Row>
        </>
    );
}
export default Cards;