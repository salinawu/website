import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import Layout from '../Layout/Index.jsx'; //TODO why do i have to import like this
import About from '../About';
import Projects from '../Projects';
import Ceramics from '../Ceramics';
import Contact from '../Contact';
import Landing from '../Landing';
// import Musings from '../Musings';
import PageNotFound from '../PageNotFound';

// TODO why won't linking work on mobile
const UnstyledApp = ({ className }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <Router className={className}>
            <Layout className="App" isMobile={isMobile}>
                {/* <header className="App-header">
                    something here
                    <button onClick={() => testGet()}>click me</button>
                </header> */}
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/projects"><Projects /></Route>
                    <Route path="/ceramics"><Ceramics /></Route>
                    {/* <Route path="/musings"><Musings /></Route> //TODO do this later on */}
                    <Route path="/contact"><Contact /></Route>
                    <Route exact path="/"><Landing /></Route>
                    <Route><PageNotFound /></Route>
                </Switch>
            </Layout>
        </Router>

    );
}

const App = styled(UnstyledApp)`
    // margin: 12px;
`;

export default App;
  