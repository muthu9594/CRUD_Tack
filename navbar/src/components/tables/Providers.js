import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../Table.css";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import Models from "./Models";

import { getProvidersDetails} from "../../services/getApi"

import {deleteProvidersDetails} from "../../services/deleteApi.js"
import Providersform from "../FORMS/ProvidersForm";

import moment from "moment";

import EditProvidersForm from "../EditFormss/EditProvidersForm"
class Providers extends Component {

      
  state={
    result:[]
}

  componentDidMount(){
    const fetchData=async()=>{
      const response=await getProvidersDetails();
    
      this.setState({result:response.data})
      console.log("providers",this.state.result)
    }
    fetchData()
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      // Now fetch the new data here.
      const fetchData=async()=>{
        await getProvidersDetails();
      
      }
      fetchData()
      
    }
  }

   //delete api
 delete = async(id)=>{
  await deleteProvidersDetails(id);
    const response=await getProvidersDetails();
  
    this.setState({result:response.data})
    console.log(this.state.result)
    
  
}
  render() {
    return (
      <div>
        {/* <Link to="/providersform">
          <Button
            variant="primary"
            style={{ float: "right", background: "green" }}
          >
            Add Details
          </Button>{" "}
        </Link>{" "} */}
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
          <Providersform/>
          {/* <Models></Models> */}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NAME</th>
              <th>INITIAL</th>
              <th>LOCATION</th>
              <th>CURRENT DATE</th>
              <th>UPDATE DATE</th>
              <th>ACCOUNT MANAGER</th>
              <th>TECHNICAL CONTACT MANAGER</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
          {
              this.state.result.map((res)=>(
                <tr>
                  <td>{res.Name}</td>
                  <td>{res.Initial}</td>
                  <td>{res.Location}</td>
                  <td>{moment(res.CurrentDate).utc().format('yyyy-MM-DD')}</td>
                  <td>{moment(res.UpdateDate).utc().format('yyyy-MM-DD')}</td>
                  <td>{res.AccountManager}</td>
                  <td>{res.TechnicalContactManager}</td>
                  <td>
                  <tr>
                <td>
                  <DeleteOutlineIcon onClick={()=>this.delete(res._id)} tool style={{ color: "blueviolet", cursor : "pointer" }} />
                </td>
                <td>
                <EditProvidersForm 
                Name={res.Name} 
                Initial={res.Initial}
                 Location={res.Location} 
                 CurrentDate={res.CurrentDate} 
                 UpdateDate={res.UpdateDate} 
                 AccountManager={res.AccountManager} 
                 id={res._id}
                 TechnicalContactManager={res.TechnicalContactManager}/>
                {/* <DriveFileRenameOutlineIcon
                    onClick={this.editHandler}
                    style={{ color: "blueviolet", cursor : "pointer" }}
                  /> */}
                  
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
              <td>pqr</td>
              <td>abc</td>
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

export default Providers;
