import {Button, ButtonGroup, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const ServiceTable = () => {
    return (
        <Table hover bordered responsive="lg">
            <thead>
            <tr>
                <th>№</th>
                <th>Автомобил</th>
                <th>Двиг. масло</th>
                <th>V/л.</th>
                <th>Хидр. масло</th>
                <th>V/л.</th>
                <th>Масло помпа</th>
                <th>V/л.</th>
                <th>Дифернц. масло</th>
                <th>V/л.</th>
                <th>Трансм. масло.</th>
                <th>V/л.</th>
                <th>Спирачна т-ст</th>
                <th>V/л.</th>
                <th>Антифриз</th>
                <th>V/л.</th>
                <th>Километраж</th>
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
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
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
export default ServiceTable;