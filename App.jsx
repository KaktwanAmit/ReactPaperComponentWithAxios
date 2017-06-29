import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
const style = {
 width:'100%',
 height:'100%',
 marginLeft:120,
 marginTop:50,
};

const PaperStyle={
  height: 500,
  width: 350,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
  float:'left',
  background:'#eee'
}

const personalStyle={
  height: 150,
  width: 350,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
  float:'left'
}
const travelStyle={
  height: 330,
  width: 350,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
  float:'left'
}
const organizationInfoStyle={
  height: 200,
  width: 350,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
  float:'left'
}
const organizationGroupStyle={
  height: 200,
  width: 350,
  margin: 10,
  textAlign: 'left',
  display: 'inline-block',
  float:'left'
}
const insideDivStyle={
  margin:25,
  marginLeft:50,
}
const styleCard={
  width:360,
  height:220,
  float:'left',
}
const imgCircle={
  borderRadius:'50%',
  margin:'auto',
  display:'block',
}
const imgDiv={
  marginTop:20,
}
const materialIcon={
  marginTop:10,
  marginLeft:10,
}

class PaperExample extends React.Component{
  constructor(props){
    super(props);
    this.state={person:[],bloodGroup:'',mobile:'',email:'',address:'',dob:'',primarySupervisor:'',supervisorId:'',passwordArray:[]}
    this.getProfileDetails();

    console.log(props,this);
  }

  
  getProfileDetails(){
   axios({
            method: 'post',
            url: 'https://c4tneplantest.azure-api.net/org/org/getUserMandatoryDetailsForProfile',
            data: {
                "key": '9d8d5b316dbae6a3c9faf18531ca34ce'

            },
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Trace': 'false',
                'Ocp-Apim-Subscription-Key': 'a2fe1cf9de1348a2bb328fbebe01a4fa'
            }

        }).then((response)=> {
          console.log("response", response);  
          this.setState({person:response.data.data[0]});
          this.setState({empId:response.data.data[0].General_Details.value.empId.value});
          this.setState({mobile:response.data.data[0].General_Details.value.mobileNo.value});
          this.setState({email:response.data.data[0].General_Details.value.email.value});
          this.setState({address:response.data.data[0].General_Details.value.homeAddr.value});
          this.setState({dob:response.data.data[0].Personal_Details.value.dateOfBirth.value});
          this.setState({primarySupervisor:response.data.data[0].Organisation_Details.value.primarySuprvsrName.value});
          this.setState({supervisorId:response.data.data[0].Organisation_Details.value.primarySupervisorId.value});
          this.setState({groupType:response.data.data[0].Groups_Details[0].groupTypeName});
          this.setState({groupType1:response.data.data[0].Groups_Details[1].groupTypeName});
          // for(var i=0;i<response.data.data[0].Passport_Details[0].length)
          this.setState({passwordArray:response.data.data[0].Passport_Details});
          console.log('passwordArrayyyy',this.state.passwordArray);
          console.log('object',this.state.person);
          console.log('personnnn',this.state.person.Personal_Details.value.bloodGroup.value); 
          

        })
}
  render(){
    return(
      <div style={style}>
      <h3><i className="material-icons">account_circle</i>My Profile</h3>
      <div>
      <Paper style={PaperStyle} zDepth={2}>
      <div style={imgDiv}><img style={imgCircle} src={'/images/staylor.jpg'} alt="no image found"></img></div>
   
       <div style={insideDivStyle}><i className="material-icons"><span>book</span></i>{this.state.empId}</div>
    
       <div style={insideDivStyle}><i className="material-icons"><span>phone</span></i>{this.state.mobile}</div>
       
      <div style={insideDivStyle}><i className="material-icons"><span>email</span></i>{this.state.email}</div>
      
      <div style={insideDivStyle}><i className="material-icons"><span>room</span></i>{this.state.address}</div>
       </Paper>
       </div>

       {/*Personal Information Card*/}

       <div style={styleCard}>
       <Paper style={personalStyle} zDepth={2}>
       <div style={materialIcon}>
      <i className="material-icons">perm_contact_calendar</i>Personal
      </div>

      <div style={insideDivStyle}>Date of Birth : {this.state.dob}</div>
       <Divider/>
       </Paper>
       {/*travel Information*/}
       <Paper style={travelStyle} zDepth={2}>
       <div style={materialIcon}><i className="material-icons">airplanemode_active</i>Travel</div>        <div>
          {this.state.passwordArray.map((numbers)=>
            <div key={numbers.passportCityIssued} >
           <div style={insideDivStyle}>Passport No : {numbers.passportNo}</div>
           <Divider/>
            <div style={insideDivStyle}>Issue Date : {numbers.issuingDate}</div>
            <Divider/>
            <div style={insideDivStyle}>Expiry Date : {numbers.expiryDate}</div>
            <Divider/>
            <div style={insideDivStyle}>Nationality : {numbers.passportNationality}</div>
            <Divider/>
            </div>
            )}
        </div>
       </Paper>
       </div>
       {/*orgnation Information*/}
       <div style={styleCard}>
         <Paper style={organizationInfoStyle} zDepth={2}>
      <div style={materialIcon}><i className="material-icons">business_center</i>Organization Info</div> 
      <div style={insideDivStyle}>        
        Primary Supervisor : {this.state.primarySupervisor} </div>
        <Divider/>
        <div style={insideDivStyle}>        
        Supervisor Id : {this.state.supervisorId} </div>
        <Divider/>
       </Paper>
       {/*organization Group*/}
       <Paper style={organizationGroupStyle} zDepth={2}>
       <div style={materialIcon}><i className="material-icons">domain</i>Organization Group</div>
       <div style={insideDivStyle}>        
       groupType : {this.state.groupType} </div>
        <Divider/>
       <div style={insideDivStyle}>        
       groupType : {this.state.groupType1} </div>
        <Divider/>
       </Paper>
       </div>
      </div>
   
     )
  }
}

class App extends React.Component {

render() {
return (

<div>
<MuiThemeProvider>
<div>
<PaperExample/>
</div>
</MuiThemeProvider>
</div>


);
}
}


export default App;
