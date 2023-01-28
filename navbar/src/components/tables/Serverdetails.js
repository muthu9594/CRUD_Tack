import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../Table.css";
import Models from "../../Models";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// import Models1 from "./Models1";


import {getServerDetails} from "../../services/getApi"

import {deleteServerDetails} from "../../services/deleteApi.js"

import {getServerData} from "../../services/EditApi"


import ServerDetailsModel from "../FORMS/ServerForm"

import UpdataModal from "../EditFormss/UpdataModal"

class Serverdetails extends Component {
  constructor(){
    super()
    this.state = {
      showTooltip: false,
      result:[],
      presult:[],
      id:null,
      ipAddresses : ''
    };
  }

 
  handleMouseEnter = () => {
    this.setState({ showTooltip: true });
  }

  handleMouseLeave = () => {
    this.setState({ showTooltip: false });
  }


  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.setState({
        brand: this.state.cars[rowIndex].brand,
        model: this.state.cars[rowIndex].model,
        color: this.state.cars[rowIndex].color,
        topspeed: this.state.cars[rowIndex].top,
      });
    },
  };

  myClickHandler = (e,row) =>{
    
    e.preventDefault()
    this.setState({ipAddresses : row.ipAddresses })
    console.log("pt e.target.value",row)
  }




  componentDidMount(){
    const fetchData=async()=>{
      const response=await getServerDetails();
    
     this.setState({result:response.data})
    //  console.log(this.state.result)
   
    }
    fetchData()
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.result !== this.state.result) {
      // Now fetch the new data here.
      const fetchData=async()=>{
        await getServerDetails();
      
      }
      fetchData()
      
    }
  }


  //delete api
delete = async(id)=>{
  await deleteServerDetails(id);
    const response=await getServerDetails();
  
    this.setState({result:response.data})
    // console.log(this.state.result)
    
  
}

//getdatabyid
// getParticulardata = async (id)=>{
//   // e.preventDefault()
//  const response=await getServerData(id)
//     this.setState({presult:response})
//   // console.log(response)
// // window.location.href = "/ServerDetails";
// }

  render() {
    return (
      <div className="">
        {/* <Link to="/serverdetailsform">
          {" "}
          <Button variant="" style={{ float: "right" }}>
            <AddCircleIcon 
            style={{ float: "right" , color : "blueviolet"}}
            create
            ></AddCircleIcon>create
          </Button>
        </Link> */}

        <div
          style={{
            float: "right",
            position: "relative",
            margin: "0px",
            padding: "0px",
            top: "0px",
          }}
        >
          <ServerDetailsModel/>
          {/* <Models></Models> */}
        </div>
        {/* <h1>Server Details</h1> */}
        <Table striped bordered hover className="" w-auto>
          <thead>
            <tr>
              <th>IP ADDRESS</th>
              <th>PROVIDERS</th>
              <th>TYPE</th>
              <th>INTERFACES</th>
              <th>RAM</th>
              <th>CORE</th>
              <th>HDD</th>
              <th>SERVER TYPE</th>
              <th colSpan="2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            
          {
              this.state.result.map((res, index)=>(
                <tr key={index}>
                  <td>{res.ipAddresses}</td>
                  <td>{res.providers}</td>
                  <td>{res.type}</td>
                  <td>{res.Interfaces}</td>
                  <td>{res.Ram}</td>
                  <td>{res.Core}</td>
                  <td>{res.Hdd}</td>
                  <td>{res.ServerType}</td>
                  <td>
                <tr>
                <td>
                  <DeleteOutlineIcon  onClick={()=>this.delete(res._id)} tool style={{ color: "blueviolet", cursor : "pointer" }} />
                </td>
                <td>
                  <UpdataModal 
                  id={res._id}
                 ipAddresses={res.ipAddresses} 
                 providers={res.providers}
                  type={res.type} 
                  Interfaces={res.Interfaces} 
                   Ram={res.Ram} 
                   Core={res.Core} 
                   Hdd={res.Hdd}
                   ServerType={res.ServerType}
                   />
                </td>
                
                </tr>
                </td>

                
                   {/* <ServerDetailsModel1 data={this.state.ipAddresses}  > */}
                  {/* <button onClick={(e) =>  this.myClickHandler(e,res)}>
                

                  </button> */}
                    {/* <ServerDetailsModel1 data={this.state.ipAddresses}  /> */}
                  {/* <Link to="/serverdEdit/:id"> */}
                  {/* <button onClick={(e) =>  this.myClickHandler(e,res)}>edit</button> */}
                 
                  {/* </Link> */}
                    {/* {console.log(this.state.id)} */}
                  
                
              
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
              <td>Fast server</td>

              <tr>
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
              
            </tr> */}

            
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Serverdetails;

