import {Button, ButtonGroup, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const RepairTable = () => {
    return (
        <Table hover bordered responsive="lg">
            <thead>
            <tr>
                <th>№</th>
                <th>Автомобил</th>
                <th>Дата</th>
                <th>Описание</th>
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
export default RepairTable;