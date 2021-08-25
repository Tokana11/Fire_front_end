import React, {Component} from "react"
import FuelingsTable from "../components/FuelingsTable";
import {Container, FormControl, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import DateInput from "../components/DateInput";

class Fueling extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
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
                    <InputGroup.Text>
                        <DateInput/> {" ..."}
                    </InputGroup.Text>

                </InputGroup>


                <Container className="mt-5">
                    <FuelingsTable/>
                </Container>
            </>
        );
    }
}

export default Fueling;