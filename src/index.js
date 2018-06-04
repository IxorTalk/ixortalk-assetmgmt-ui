import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Switch, Route} from 'react-router-dom';


import { Provider } from 'react-redux';
import store from './store';


import Layout from "./components/Layout";

import About from "./pages/About"
import AssetList from "./pages/AssetList"
import AssetDetailWrapper from "./pages/AssetDetailWrapper"
import AssetNew from "./pages/AssetNew"


const App = () => (
    <div>
        <Layout>
            <main>
                <Switch>
                    <Route exact path="/" component={AssetList} />
                    <Route path="/new" component={AssetNew} />
                    <Route path="/assets/:assetId" component={AssetDetailWrapper} />
                    <Route path="/about" component={About} />
                </Switch>
            </main>
        </Layout>
    </div>
);


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
