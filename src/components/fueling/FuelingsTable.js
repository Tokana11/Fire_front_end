import {Button, ButtonGroup, Table} from "react-bootstrap";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FuelingsTable = () => {
    return (
        <Table hover bordered responsive="md">
            <thead>
            <tr>
                <th>№</th>
                <th>Автомобил</th>
                <th>Дата</th>
                <th>Количество</th>
                <th>Цена</th>
                <th>Опции</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>
                    <ButtonGroup size={"sm"}>
                        <Button variant="outline-primary">
                            <FontAwesomeIcon icon={faEdit}/>
                        </Button>{' '}
                        <Button variant="outline-danger">
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </Button>{' '}
                    </ButtonGroup>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>
                    <ButtonGroup size={"sm"}>
                        <Button variant="outline-primary">
                            <FontAwesomeIcon icon={faEdit}/>
                        </Button>{' '}
                        <Button variant="outline-danger">
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </Button>{' '}
                    </ButtonGroup>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>
                    <ButtonGroup size={"sm"}>
                        <Button variant="outline-primary">
                            <FontAwesomeIcon icon={faEdit}/>
                        </Button>{' '}
                        <Button variant="outline-danger">
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </Button>{' '}
                    </ButtonGroup>
                </td>
            </tr>
            </tbody>
        </Table>
    );
}
export default FuelingsTable;