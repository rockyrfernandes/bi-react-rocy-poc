
import React, { Component } from "react";
import { user } from './AppSvc';

class User extends Component {
    render() {        
        
        const userProfile= user.profile;
        const items = Object.keys(userProfile).map(function(key) {
            return <tr key={key}><td>{key}</td><td>{userProfile[key]}</td></tr>
        });

      return (
        <div>
            <h1>User Claims Info</h1>
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        </div>
        );
    }
}

  export default User;