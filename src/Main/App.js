import React from 'react';
import ReactDOM from 'react-dom';
import {  Route, NavLink, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import App1 from '../bi/application/component';
import Index from '../bi/index/component';
import Dynamic from '../bi/dynamic/component';
import PageNavigation from '../bi/pagenavigation/component';
import Filters from '../bi/filters/component';
import Defaults from '../bi/defaults/component';
import Settings from '../bi/settings/component';
import DataSelected from '../bi/dataselected/component';
import Blank from "./Blank";
import Home from "./Home";
import Stuff from "./Stuff";
import Customers from "./Customers";
import Products from "./Products";
import User from "./User";
import '../css/index.css';
import '../css/nav.css';
import '../bi/application/style.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <nav className="nav nav-pills">
        <ul>        
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li>
            <NavLink to="/bi/static" >Power BI</NavLink>
            <ul id="navigation">
              <li id="pageLinkStatic"><NavLink to="/bi/static" >Static Embed</NavLink></li>
              <li id="pageLinkDynamic"><NavLink to="/bi/dynamic">Dynamic Embed</NavLink></li>
              <li id="pageLinkPageNav"><NavLink to="/bi/pagenavigation" >Custom Page Navigation</NavLink></li>
              <li id="pageLinkFilters"><NavLink to="/bi/filters" >Custom Filter Pane</NavLink></li>
              <li id="pageLinkDefaults"><NavLink to="/bi/defaults" >Default Page and/or Filter</NavLink></li>
              <li id="pageLinkSettings"><NavLink to="/bi/settings" >Update Settings</NavLink></li>
              <li id="pageLinkDataSelection"><NavLink to="/bi/dataselected" >Data Selection</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/user">User</NavLink></li>
          <li><NavLink to="/customers">Customers</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
        </ul>
      </nav>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/stuff" component={Stuff}/>
        <Route path="/user" component={User}/>
        <Route path="/customers" component={Customers}/>
        <Route path="/products" component={Products}/>
        <Route path="/bi/static" component={Index} />
        <Route path="/bi/dynamic" component={Dynamic} />
        <Route path="/bi/pagenavigation" component={PageNavigation} />
        <Route path="/bi/filters" component={Filters} />
        <Route path="/bi/defaults" component={Defaults} />
        <Route path="/bi/settings" component={Settings} />
        <Route path="/bi/dataselected" component={DataSelected} />
      </div>
      </div>
      </BrowserRouter>
    );
  }
}
 
export default App;