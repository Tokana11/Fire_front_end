import {Row,} from "react-bootstrap";
import TruckCard from "./TruckCard";

const Cards = ({cards, editVehicle, deleteVehicle}) => {
    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {cards.map((card) => (<TruckCard key={card.id}
                                                 id={card.id}
                                                 card={card}
                                                 editVehicle={editVehicle}
                                                 deleteVehicle={deleteVehicle}/>))}
            </Row>
        </>
    );
}
export default Cards;