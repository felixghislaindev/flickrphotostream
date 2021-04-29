import './App.css';
import React from 'react';
import axios from 'axios'
import { v4 } from 'uuid';
import FlickrPhotoCard from './components/card/FlickrPhotoCard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flickrphotos:[]
    };
  }

  

  componentDidMount() {
    const api = axios.create({
      withCredentials: false,
      headers: {
        "content-type": "application/json; charset=utf-8",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      
    })
   
    api.get('/services/feeds/photos_public.gne?format=json&nojsoncallback=true')
    .then(res => {
      this.setState(() => {
        return {flickrphotos:res.data.items}
      })
    })
  }


  render() {
    return (
      <div className="App">
      <h1>Flickr Photo Stream</h1>
      <div className="flickr-photo-cards">
        {this.state.flickrphotos.map((flickrPhoto, index) =>(
      <FlickrPhotoCard key={v4()} index={index} photo={flickrPhoto}/>
      ))}
      </div>
      </div>
    );
  }
}

export default App
