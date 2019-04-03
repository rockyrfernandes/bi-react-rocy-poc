import React from 'react';
import ReactDOM from 'react-dom';
import {  Route, NavLink,  HashRouter} from 'react-router-dom';
import App from './application/component';
import Index from './index/component';
import Dynamic from './dynamic/component';
import PageNavigation from './pagenavigation/component';
import Filters from './filters/component';
import Defaults from './defaults/component';
import Settings from './settings/component';
import DataSelected from './dataselected/component';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <h2>Scenarios:</h2>
    <ul id="navigation" className="nav nav-pills">
        <li id="pageLinkStatic"><NavLink to="/" >Scenario 1: Static Embed</NavLink></li>
        <li id="pageLinkDynamic"><NavLink to="/dynamic">Scenario 2: Dynamic Embed</NavLink></li>
        <li id="pageLinkPageNav"><NavLink to="/pagenavigation" >Scenario 3: Custom Page Navigation</NavLink></li>
        <li id="pageLinkFilters"><NavLink to="/filters" >Scenario 4: Custom Filter Pane</NavLink></li>
        <li id="pageLinkDefaults"><NavLink to="/defaults" >Scenario 5: Default Page and/or Filter</NavLink></li>
        <li id="pageLinkSettings"><NavLink to="/settings" >Scenario 6: Update Settings</NavLink></li>
        <li id="pageLinkDataSelection"><NavLink to="/dataselected" >Scenario 7: Data Selection</NavLink></li>
    </ul>
    <div>
        <Route exact path="/" component={Index} />
        <Route path="/dynamic" component={Dynamic} />
        <Route path="/pagenavigation" component={PageNavigation} />
        <Route path="/filters" component={Filters} />
        <Route path="/defaults" component={Defaults} />
        <Route path="/settings" component={Settings} />
        <Route path="/dataselected" component={DataSelected} />
    </div>
  </HashRouter>,
  
  document.getElementById('root')
);
