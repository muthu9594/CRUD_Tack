import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import Models1 from './ModelsServerDetails';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";


import { getdidDetails } from '../../services/getApi';
import { deletedidDetails } from '../../services/deleteApi';

import DidForm from "../FORMS/DidForm"
import EditDidForm from "../EditFormss/EditDidForm"


class Did extends Component {

    state={
        result:[]
    }
    
      componentDidMount(){
        const fetchData=async()=>{
          const response=await getdidDetails();
        
          this.setState({result:response.data})
          console.log("did",this.state.result)
        }
        fetchData()
        
      }
    
      // componentDidUpdate(prevProps, prevState){
      //   if (prevState !== this.state.result) {
      //     // Now fetch the new data here.
      //     const fetchData=async()=>{
      //       await getdidDetails();
          
      //     }
      //    fetchData()
          
      //   }
      // }
    
       //delete api
     delete = async(id)=>{
      await deletedidDetails(id);
        const response=await getdidDetails();
      
        this.setState({result:response.data})
        console.log(this.state.result)
        
      
    }

  render() {

    const result = { name : "Prabhas", age : 25 }
    return (
      <div class=""> 
       <div
          style={{
            float: "right",
            position: "relative",
            margin: "0px",
            padding: "0px",
            top: "0px",
          }}
        >
          <DidForm/>
          {/* <Models1></Models1> */}
        </div>
        <Table striped bordered hover  >
      <thead>
        <tr className=' '>
          <th>NAME</th>
          <th>INITIAL</th>
          <th className=''>ACTION</th>
        </tr>
      </thead>
      <tbody>

      {
              this.state.result.map((res)=>(
                <tr>
                  <td>{res.listing}</td>
                  <td>{res.used}</td>
                  <td>
                  <td>
                  <DeleteOutlineIcon tool onClick={()=>this.delete(res._id)} style={{ color: "blueviolet", cursor : "pointer" }} />
                </td>
                <td>
                <EditDidForm
                id={res._id}
                 listing={res.listing} 
                 used={res.used}/>
                  
                </td>
                {/* <Button variant="danger" style={{ float: "right" , background : "red"}} onClick={()=>this.delete(res._id)}
>
                  Delete Details
                  </Button>{" "} */}
                </td>
                </tr>

             
              ))}
        {/* <tr className=''>
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
        </tr> */}
    </tbody>
    </Table>
    
    
    
    
    
    </div>
    )
  }
}

export default Did