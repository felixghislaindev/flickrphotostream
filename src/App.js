import './App.css';
import React from 'react';
import Card from './components/card/Card-component'

function App() {
  const [flickrPhotos,setFlickrPhotos] = React.useState([
    {
      "title":"in the park",
      "author":"Mike",
      "description":"Nice walk at the park",
      "tags":["run","walk","morning"]
  },
  {
    "title":"in the forest",
    "author":"Marta",
    "description":"Nice walk at the rainy forest",
    "tags":["run","walk","morning coffee"]
},
{
  "title":"in the sun ",
  "author":"jsosh",
  "description":"Nice walk on the beach",
  "tags":["run","walk","barcelona","sun"]
},
{
  "title":"cold mornings",
  "author":"Fabian",
  "description":"Snowy morning",
  "tags":["run","walk","cold","coffee"]
}
  ])
  return (
    <div className="App">
    <div className="flickr-photo-card">
    {
      flickrPhotos.map((flickrPhoto, index) =>(
      <Card key={index} index={index} card={flickrPhoto}/>
      ))
      }
    </div>
      
    </div>
  );
}

export default App;
