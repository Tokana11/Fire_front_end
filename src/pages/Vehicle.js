import React, {useEffect, useState} from "react";
import {Button, Container, FormControl, InputGroup} from "react-bootstrap";
import Cards from "../components/Cards";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSearch, faTruck} from "@fortawesome/free-solid-svg-icons";
import TruckModal from "../components/TruckModal";
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
                        .search(query.toLowerCase()) !== -1)}/>
                }

                <Button className={"add-truck-btn"}
                        variant={"accent"}
                        onClick={() => setModalOpen(true)}
                >
                    <FontAwesomeIcon icon={faPlus}/>{" "}
                    <FontAwesomeIcon icon={faTruck}/>
                </Button>

                <TruckModal show={modalOpen}
                            onHide={() => setModalOpen(false)}
                />
            </Container>
        </>
    );
}

export default Vehicle;