import './App.css';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Equipment from "./pages/Equipmnet";
import Employees from "./pages/Employees";
import Engines from "./components/Engines";

const Layout = props => (
    <>
        <Header/>
        {props.children}
    </>
);

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Layout>
            <Home/>
        </Layout>
    },
    {
        path: '/vehicle',
        main: () => <Layout>
            <Engines/>
        </Layout>
    },
    {
        path: '/equipment',
        exact: true,
        main: () => <Layout>
            <Equipment/>
        </Layout>
    },
    {
        path: '/employees',
        exact: true,
        main: () => <Layout>
            <Employees/>
        </Layout>
    },

];

const getRoutes = () => {
    return routes.map((route, index) => {
        return <Route
            exact={route.exact}
            key={index}
            path={route.path}>
            {route.main}
        </Route>
    })
};

function App() {
    return (
        <Router>
            <Switch>
                {getRoutes()}
            </Switch>
        </Router>
    );
}

export default App;


