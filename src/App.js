import './App.css';
import React, { Component } from 'react';
import Destination from "./Destination/Desitination";
import Via from "./Via/Via"


/*fetch('https://api.comparatrip.eu/cities/autocomplete/?q=A')
.then((Response) => {
  return Response.json()
})
.then((result)=> {
  console.log(result)
})*/


/*fetch('https://api.comparatrip.eu/cities/popular/5 ')
.then((Response) => {
  return Response.json()
})
.then((result)=> {
  console.log(result)
})
*/

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clouds:[]
    }
  }

  componentDidMount() {
    var url = "https://api.comparatrip.eu/cities/popular/5://demo8192935.mockable.io/mockApi";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(d => {
        this.setState({ clouds: d });
        console.log("state", this.state.clouds)
      })
      .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div>
        {
          this.state.clouds.map(((cloud, index) =>
            <th key={`${cloud.cloud}${index}`}>
              <div>
                <div>
                  {cloud.cloud}
                  <div>
                    {
                      cloud.data_centers.map(d => (
                        <div>
                          {d.title}
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </th>
          ))
        }
      </div>
    );
  }
}
export default App;
