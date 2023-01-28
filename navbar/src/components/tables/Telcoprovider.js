import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// import Models from './Models';


import { getTelcoProviderDetails } from '../../services/getApi';
import { deleteTelcoProviderDetails } from '../../services/deleteApi';

import TelcoProvidersForm from '../FORMS/TelcoProvidersForm'

import EditTelcoProvidersForm from '../EditFormss/EditTelcoProvidersForm'

class Telcoprovider extends Component {

 
  state={
    result:[]
}

  componentDidMount(){
    const fetchData=async()=>{
      const response=await getTelcoProviderDetails();
    
      this.setState({result:response.data})
      console.log("telco",this.state.result)
    }
    fetchData()
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      // Now fetch the new data here.
      const fetchData=async()=>{
        await getTelcoProviderDetails();
      
      }
      fetchData()
      
    }
  }

   //delete api
 delete = async(id)=>{
  await deleteTelcoProviderDetails(id);
    const response=await getTelcoProviderDetails();
  
    this.setState({result:response.data})
    console.log(this.state.result)
    
  
}

  render() {
    return (
      <div className="">
         <div
          style={{
            float: "right",
            position: "relative",
            margin: "0px",
            padding: "0px",
            top: "0px",
          }}
        >
          <TelcoProvidersForm/>
          {/* <Models></Models> */}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>NAME</th>
              <th>IP</th>
              <th>PORT</th>
              <th>USER AND PASSWORD</th>
              <th>MEDIA IP</th>
              <th>SBC IP AND PORT</th>
              <th>GATEWAY IP</th>
              <th>DOMAIN</th>
              <th>ACCOUNT MANAGER</th>
              <th>TECHNICAL MANAGER</th>
              <th>ESCALATION MATRIX</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
          {
              this.state.result.map((res)=>(
                <tr>
                  <td>{res.Name}</td>
                  <td>{res.IP}</td>
                  <td>{res.Port}</td>
                  <td>{res.User},{res.Password }</td>
                  <td>{res.MediaIP}</td>
                  <td>{res.SBCIPAndPort}</td>
                  <td>{res.GatewayIP}</td>
                  <td>{res.Domain}</td>
                  <td>{res.AccountManager}</td>
                  <td>{res.TechnicalManager}</td>
                  <td>{res.escalation_matrix_email},{res.escalation_matrix_name},{res.escalation_matrix_phoneno}</td>
                  <td>
                  <tr  className=''>
                <td>
                  <DeleteOutlineIcon onClick={()=>this.delete(res._id)} tool style={{ color: "blueviolet", cursor : "pointer" }} />
                </td>
                <td>
               <EditTelcoProvidersForm Name={res.Name} 
               id={res._id}
               IP={res.IP}
               Port={res.Port}
               User={res.User}
               Password={res.Password}
               MediaIP={res.MediaIP}
               SBCIPAndPort={res.SBCIPAndPort}
               GatewayIP={res.GatewayIP}
               Domain={res.Domain}
               AccountManager={res.AccountManager}
               TechnicalManager={res.TechnicalManager}
               escalation_matrix_email={res.escalation_matrix_email}
               escalation_matrix_name={res.escalation_matrix_name}
               escalation_matrix_phoneno={res.escalation_matrix_phoneno}
               />
                  
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
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <td>abc</td>
              <tr  className=''>
                <td>
                  <DeleteOutlineIcon tool style={{ color: "blueviolet", cursor : "pointer" }} />
                </td>
                <td>
                <DriveFileRenameOutlineIcon
                    onClick={this.editHandler}
                    style={{ color: "blueviolet", cursor : "pointer" }}
                  />
                  
                </td>
              </tr>
            </tr>
             */}
           
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Telcoprovider;
