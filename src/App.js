import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom'

import Blog from './containers/Blog/Blog';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common["Authorization"]='AUTH TOKEN';
axios.defaults.headers.post['Content-Type']='application/json';

axios.interceptors.request.use(requestConfig => {
  console.log(requestConfig);
  return requestConfig;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
})

axios.interceptors.response.use(responseConfig => {
  console.log(responseConfig);
  return responseConfig;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
})

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
