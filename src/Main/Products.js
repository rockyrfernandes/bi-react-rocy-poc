import React, { Component } from "react";
import { fetchProductsData  } from './AppSvc';
import '../css/Customers.css';
 
class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      response: {
        result: []
      }
    };
  }

fetchData = () => {
  fetchProductsData()
    .then((response) => {      
      //console.log("product - success");
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
    //console.log("product - componentDidMount");    
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
            return <tr key={item.productID}>
              <td>{item.productID}</td>
              <td>{item.name}</td>
              <td>{item.productNumber}</td>
              <td>{item.standardCost}</td>
              <td>{item.color}</td>
              <td>{item.listPrice}</td>
              <td>{item.productModelID}</td>          
            </tr>
        });

        html = 
          <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Product #</th>
                    <th>Standard Cost</th>
                    <th>Color</th>
                    <th>List Price</th>
                    <th>Model</th>
                </tr>
            </thead>
            <tbody>{items}</tbody>
        </table>
      }
  }

    return (
      <div>
        <h2>Northwind Products</h2>
        {html}
      </div>
    );
  }
}
 
export default Products;