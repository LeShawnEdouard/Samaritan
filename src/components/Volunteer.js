import React from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
// import { URLSearchParams } from 'url';


class Volunteer extends React.Component {
  state = {
    users: [],
    isLoading: true,
    errors: null
  };


  getUsers = () => {
    console.log("sanity check");
    axios
    .get("https://api.data.charitynavigator.org/v2/Organizations?app_id=c9d3a7e3&app_key=a1eab8e3f23bac67609bf0168595f301")
  
      // .then(response => {
      //   console.log(response, "response");

      //   response.data.results.map(users => ({
      //     charityName: `${users.charityName}`,
      //     charityNavigatorURL: `${users.charityNavigatorURL}`,
      //     mailingAddress: `${users.mailingAddress}`
          
      //   }))
      // })
      // .then(users => {
        .then(res => {
          console.log(res, "resultss");
        this.setState({
          users: res.data
        });
      })
      .catch(error => {
        // this.setState({ error, isLoading: false })
        console.log(error)
      })
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
    <div>
      <div>
      <h2>Volunteer Page</h2>
      <Calendar />
       </div>
  
      <React.Fragment>
        <h2>Random User</h2>
        <div>
          { this.state.users ? (
            this.state.users.map(user => {
              // const { charityName, charityNavigatorURL, mailingAddress } = user;
              return (
                <div key={user.charityName}>
                  <p>{user.charityName}</p>
                  <div>
                  <p>{user.charityNavigatorURL})</p>
                  </div>
                  <p>{user.mailingAddress.city}, {user.mailingAddress.stateOrProvince}</p>
                  <hr /> 
                </div>
              );
            })
            // <p>working</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
      </div>
    );
  }
}


// ReactDOM.render(<Volunteer />, document.getElementById("root"));
         
  export default Volunteer;


