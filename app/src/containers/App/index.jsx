import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { testGet } from '../../services';
import Layout from '../Layout/Index.jsx'; //TODO why do i have to import like this
import About from '../About';
import Projects from '../Projects';
import Ceramics from '../Ceramics';
import Contact from '../Contact';
import Landing from '../Landing';

const App = ({ className }) => {
    return (
        <Router className={className}>
            <Layout className="App">
                {/* <header className="App-header">
                    something here
                    <button onClick={() => testGet()}>click me</button>
                </header> */}
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/projects"><Projects /></Route>
                    <Route path="/ceramics"><Ceramics /></Route>
                    {/* <Route path="/musings"><Musings /></Route> */} //TODO do this later on
                    <Route path="/contact"><Contact /></Route>
                    <Route path="/"><Landing /></Route>
                </Switch>
            </Layout>
        </Router>

    );
}

export default App;
  