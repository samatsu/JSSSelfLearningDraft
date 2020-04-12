import React, { Component } from 'react';
import config from '../../temp/config';
import { dataFetcher } from '../../dataFetcher';
import Axios, {AxiosRequestConfig} from 'axios';
import * as  qs from 'querystring';

class Appendix2Component extends Component{
  constructor(props){
    super(props);
    this.state = {
      domain: "sitecore",
      username : "",
      password: ""
    }
  }
  setName = (event) => {
    this.setState({username : event.target.value} ); 
  }
  setPassword = (event) => {
    this.setState({password: event.target.value});
  }
  login = () =>{
    console.log(this.state);
    let loginUrl = `${config.sitecoreApiHost}/sitecore/api/ssc/auth/login?sc_apikey=${config.sitecoreApiKey}`;
    // dataFetcher(loginUrl, this.state);
    Axios.post(loginUrl, qs.stringify(this.state), {
      withCredentials : true,
      headers : {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then((result) => console.log(result)).catch((err) => console.log(err));
  }
  render(){
    return (<React.Fragment>
      <h3>Login Form</h3>
      <div>
        <span>UserName:</span>
        <input type="text" name="username" onChange={this.setName} value={this.state.username} />
      </div>
      <div>
        <span>Password:</span>
        <input type="password" name="password" onChange={this.setPassword} value={this.state.password} />
      </div>
      <button onClick={this.login}>Log In</button>
    </React.Fragment>);
  }
}
// const Appendix2Component = (props) => (
//   <div>
//     <p>Appendix2Component Component</p>
//     <h>login form</h>
//   </div>
// );

export default Appendix2Component;
