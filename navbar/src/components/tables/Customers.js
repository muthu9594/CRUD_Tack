import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// import Models from "./Models";

import { getCustomerDetails} from "../../services/getApi"

import {deleteCustomerDetails} from "../../services/deleteApi.js"
import Customersform from "../FORMS/CustomersForm";

import EditCustomersForm from "../EditFormss/EditCustomersForm"
class Customers extends Component {

    state={
        result:[]
    }
    
      componentDidMount(){
        const fetchData=async()=>{
          const response=await getCustomerDetails();
        
          this.setState({result:response.data})
          console.log("customers",this.state.result)
        }
        fetchData()
        
      }
    
      componentDidUpdate(prevProps, prevState){
        if (prevState.result !== this.state.result) {
          // Now fetch the new data here.
          const fetchData=async()=>{
            await getCustomerDetails();
          
          }
          fetchData()
          
        }
      }
    
       //delete api
     delete = async(id)=>{
      await deleteCustomerDetails(id);
        const response=await getCustomerDetails();
      
        this.setState({result:response.data})
        console.log(this.state.result)
        
      
    }
  render() {
    return (
      <div>
<div
          style={{
            float: "right",
            position: "relative",
            margin: "0px",
            padding: "0px",
            top: "0px",
          }}
        >
          {" "}
          <Customersform/>
          {/* <Models></Models> */}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>

              <th>NAME</th>
              <th>LICENSE</th>
              <th>CHANNEL PARTNER</th>
              <th>CPASS INFO</th>
              <th>DID COUNT</th>
              <th>ACCOUNT MANAGER</th>
              <th>ACTION</th>
              {/* <th>Account Manager</th> */}
              {/* <th>Technical Contact Manager</th> */}
            </tr>
          </thead>
          <tbody>
          {
              this.state.result.map((res)=>(
                <tr>
                  <td>{res.Name}</td>
                  <td>{res.License}</td>
                  <td>{res.ChannelPartner}</td>
                  <td>{res.CpassInfo}</td>
                  <td>{res.DidCount}</td>
                  <td>{res.AccountManager}</td>
                  <td>
                  <tr>
                <td>
                  <DeleteOutlineIcon
                  onClick={()=>this.delete(res._id)}
                    tool
                    style={{ color: "blueviolet", cursor: "pointer" }}
                  />
                </td>
                <td>
                 <EditCustomersForm 
                 id={res._id}
                 Name={res.Name}
                 License={res.License} 
                 ChannelPartner={res.ChannelPartner} 
                 CpassInfo={res.CpassInfo}
                 DidCount={res.DidCount}
                 AccountManager={res.AccountManager}/>
                </td>
              </tr>
                {/* <Button variant="danger" style={{ float: "right" , background : "red"}} onClick={()=>this.delete(res._id)}
>
                  Delete Details
                  </Button>{" "} */}
                </td>
                </tr>

             
              ))}
            {/* <tr>
              <td>Ajay</td>
              <td>Mr.</td>
              <td>Pune</td>
              <td>13-01-2023</td>
              <td>12-08-2022</td>
              <tr>
                <td>
                  <DeleteOutlineIcon
                    tool
                    style={{ color: "blueviolet", cursor: "pointer" }}
                  />
                </td>
                <td>
                  <DriveFileRenameOutlineIcon
                    onClick={this.editHandler}
                    style={{ color: "blueviolet", cursor: "pointer" }}
                  />
                </td>
              </tr>
            </tr> */}
           
           
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Customers;
