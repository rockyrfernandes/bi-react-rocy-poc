import React, { Component } from "react";
import { fetchCustomersData  } from './AppSvc';
import '../css/Customers.css';
 
class Customers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      response: {
        result: []
      }
    };
  }

  /*
  fetchData = () => {
    adalApiFetch(fetch, 'https://feedbackauthpocapi-rocky.azurewebsites.net/api/Northwind/Customers', {})
      //.then(response => response.json())
      .then((response) => {
        // This is where you deal with your API response. In this case, we            
        // interpret the response as JSON, and then call `setState` with the
        // pretty-printed JSON-stringified object.
        response.json()
          .then((responseJson) => {
            this.setState({ data: responseJson });
          });
        console.log("success");
      })
      .catch((error) => {

        // Don't forget to handle errors!
        console.error(error);
      })
  };
*/

fetchData = () => {
  fetchCustomersData()
    //.then(response => response.json())
    .then((response) => {
      // This is where you deal with your API response. In this case, we            
      // interpret the response as JSON, and then call `setState` with the
      // pretty-printed JSON-stringified object.
      //console.log("customer - success");
      response.json()
        .then((responseJson) => {
          this.setState({ hasData: true, response: responseJson });
        });
    })
    .catch((error) => {
      // Don't forget to handle errors!
      //console.error(error);
      this.setState({ hasData: true, response: {hasError: true, error: error} });
    })
};

  componentDidMount() {
    //console.log("customer - componentDidMount");    
    this.fetchData();    
  }

  render() {
    let html = 'loading...';
    if(this.state.hasData){
      if(this.state.response.hasError){
        html = this.state.response.error;
      }
      else{
        const items = this.state.response.result.map(function(item) {
            return <tr key={item.customerID}>
              <td>{item.customerID}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.companyName}</td>
              <td>{item.phone}</td>
              <td>{item.emailAddress}</td>
            </tr>
        });

        html = 
          <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company</th>
                    <th>Phone</th>
                    <th>Email Address</th>
                </tr>
            </thead>
            <tbody>{items}</tbody>
        </table>
      }
    }
    
    return (
      <div>
        <h2>Northwind Customers</h2>
        {html}
      </div>
    );
  }
}
 
export default Customers;