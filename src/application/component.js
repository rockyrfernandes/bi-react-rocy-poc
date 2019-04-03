import React, { Component } from 'react'
import {
  NavLink
} from "react-router-dom";

import './style.css';

export default class extends Component {
  render() {
    return (
      <div>
        <h1>Power BI - Sample - Client - React</h1>
        <p>Demonstrate how to embed reports using the react library for powerbi. <a href="https://github.com/Microsoft/PowerBI-React" target="_blank">react-powerbi</a></p>
        
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

        {this.props.children}
      </div>
    )
  }
}