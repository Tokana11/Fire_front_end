import {Component} from "react";
import {Button, Container, FormControl, InputGroup} from "react-bootstrap";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Navigation from "../components/Navigation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSearch, faTruck} from "@fortawesome/free-solid-svg-icons";
import TruckModal from "../components/TruckModal";

const cards = (
    [{
        id: "1",
        regNumber: "PB0001AS",
        brand: "Renault Midlum 270 dxi",
        type: "Fire engine"

    },
        {
            id: "2",
            regNumber: "PB0003GF",
            brand: "Iveco Euro Cargo",
            type: "Fire engine"

        },
        {
            id: "3",
            regNumber: "PB0005TT",
            brand: "Scania P360",
            type: "Fire engine"

        },
        {
            id: "4",
            regNumber: "PB0007PB",
            brand: "Magirus",
            type: "Fire leather"

        }]
);

class Vehicle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            query: '',
            modalShow: false
        }
        this.modalOpen = this.modalOpen.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    modalOpen() {
        this.setState({
            modalShow: true
        })
    }

    hideModal() {
        this.setState({
            modalShow: false
        })
    }


    render() {
        return (
            <>
                <Header/>
                <Container className="mt-5">
                    <Navigation/>
                    <br/>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">
                            <FontAwesomeIcon icon={faSearch}/>
                        </InputGroup.Text>
                        <FormControl
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            value={this.state.search}
                            onChange={e => this.setState({
                                query: e.target.value
                            })}
                        />
                    </InputGroup>
                    <Container>
                        {
                            <Cards cards={cards.filter(({regNumber}) => regNumber.toLowerCase()
                                .search(this.state.query.toLowerCase()) !== -1)}/>
                        }

                        <Button className={"add-truck-btn"}
                                variant={"action-secondary"}
                                onClick={this.modalOpen}
                        >
                            <FontAwesomeIcon icon={faPlus}/>{" "}
                            <FontAwesomeIcon icon={faTruck}/>
                        </Button>

                        <TruckModal show={this.state.modalShow}
                                    onHide={this.hideModal}
                        />
                    </Container>
                </Container>
            </>
        );
    }
}

export default Vehicle;