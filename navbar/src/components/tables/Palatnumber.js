import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import Models from './Models';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";


import { getPalatNumberDetails } from '../../services/getApi';
import { deletePalatNumberDetails } from '../../services/deleteApi';
 import PalatNumber from "../FORMS/PalatNumber"
 import EditPalatNumberForm from "../EditFormss/EditPalatNumberForm"



class Palatnumber extends Component {

    state={
        result:[]
    }
    
      componentDidMount(){
        const fetchData=async()=>{
          const response=await getPalatNumberDetails();
        
          this.setState({result:response.data})
          console.log("palat",this.state.result)
        }
        fetchData()
        
      }
    
      componentDidUpdate(prevProps, prevState){
        if (prevState.result !== this.state.result) {
          // Now fetch the new data here.
          const fetchData=async()=>{
            await getPalatNumberDetails();
          
          }
          fetchData()
          
        }
      }
    
       //delete api
     delete = async(id)=>{
      await deletePalatNumberDetails(id);
        const response=await getPalatNumberDetails();
      
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
          <PalatNumber/>
          {/* <Models></Models> */}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>DID NUMBER</th>
              <th>CHANNELS</th>
              <th>ACTION</th>
             
            </tr>
          </thead>
          <tbody>

          {
              this.state.result.map((res)=>(
                <tr>
                  <td>{res.did_number}</td>
                  <td>{res.channel}</td>
                 
                  <td>
                  <tr  className=''>
                <td>
                  <DeleteOutlineIcon tool onClick={()=>this.delete(res._id)} style={{ color: "blueviolet", cursor : "pointer" }} />
                </td>
                <td>
                <EditPalatNumberForm id={res._id} channel={res.channel} did_number={res.did_number} />
                  
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

export default Palatnumber;
