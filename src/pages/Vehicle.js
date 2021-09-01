import React, {useEffect, useState} from "react";
import {Button, Container, FormControl, InputGroup} from "react-bootstrap";
import Cards from "../components/vehicle/Cards";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSearch, faTruck} from "@fortawesome/free-solid-svg-icons";
import AddTruckModal from "../components/vehicle/AddTruckModal";
import {AXIOS} from "../constants";

function Vehicle() {

    const [cards, setCards] = useState([]);
    const [query, setQuery] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        AXIOS.get('/vehicle').then((response) => {
            response.status === 200 ? setCards(response.data) : setCards([])
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    function deleteVehicle(id) {
        AXIOS.delete('/vehicle/' + id).then((response) => {
            response.status === 200 ? setCards(cards.filter((card) => card.id !== id)) : alert(response.data.message)
        }).catch((error) => {
            alert(error)
        })
    }

    function editVehicle(vehicle) {
        console.log('Edit vehicle data: ', vehicle)

    }

    function addVehicle(vehicle) {
        console.log("Add vehicle data:", vehicle)
    }

    return (
        <>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">
                    <FontAwesomeIcon icon={faSearch}/>
                </InputGroup.Text>
                <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </InputGroup>
            <Container>
                {
                    <Cards cards={cards.filter(({regNumber}) => regNumber.toLowerCase()
                        .search(query.toLowerCase()) !== -1)} editVehicle={editVehicle} deleteVehicle={deleteVehicle}/>
                }

                <Button className={"add-truck-btn"}
                        variant={"accent"}
                        onClick={() => setModalOpen(true)}
                >
                    <FontAwesomeIcon icon={faPlus}/>{" "}
                    <FontAwesomeIcon icon={faTruck}/>
                </Button>

                {<AddTruckModal show={modalOpen}
                                onHide={() => setModalOpen(false)}
                                addVehicle={addVehicle}
                />}

            </Container>
        </>
    );
}

export default Vehicle;