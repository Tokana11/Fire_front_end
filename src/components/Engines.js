import {Route, Switch, useRouteMatch} from "react-router-dom";
import Vehicle from "../pages/Vehicle";
import Service from "../pages/Service";
import Repair from "../pages/Repair";
import Fueling from "../pages/Fueling";
import {Container} from "react-bootstrap";
import Navigation from "./Navigation";

function Engines() {
    let {path} = useRouteMatch();
    return (
        <Container className="mt-5">
            <Navigation activeKey="vehicle"/>
            <br/>
            <Switch>
                <Route exact path={path}>
                    <Vehicle/>
                </Route>
                <Route path={`${path}/service`}>
                    <Service/>
                </Route>
                <Route path={`${path}/repair`}>
                    <Repair/>
                </Route>
                <Route path={`${path}/fueling`}>
                    <Fueling/>
                </Route>
            </Switch>
        </Container>

    );
}

export default Engines;