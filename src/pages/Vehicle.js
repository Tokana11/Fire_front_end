import {Component} from "react";
import {Container, FormControl, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Navigation from "../components/Navigation";

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
    state = {
        cards: [],
        query: ''
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
                    </Container>
                </Container>
            </>
        );
    }
}

export default Vehicle;