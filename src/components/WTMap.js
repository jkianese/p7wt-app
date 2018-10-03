import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  
    state = {
      venues: []
    }
  
    componentDidMount() {
      this.getVenues()
      // this.loadMap()
    }
  
    loadMap = () => { // script on index.html. Can I ref that?
      loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBj5AzHYC1kUPRnvaT6G6zsAONHSpKmoqQ&callback=initMap")
      window.initMap = this.initMap
    }

    getVenues = () => {
      const endPoint = "https://api.foursquare.com/v2/venues/explore?"
      const parameters = {
        client_id: "F1BIU3KU3RZFBQKCLKJ2MX1AT2ZRZFYRUXTJUMFGA1YUS5ZF",
        client_secret: "N1HLP0MSWYJJATAS3CBQTTSZ2WLME5RB2TAUWHGE2UXZ5A1E",
        query: "outdoors",
        ll: "28.385299, -81.563874",
        v: "20181012"
      }
      // npm install axios to run
      axios.get(endPoint + new URLSearchParams(parameters))
        .then(response => {
          this.setState({
            venues: response.data.response.groups[0].items
          }, this.loadMap())
        })
        .catch(error => {
          console.log("Error: " + error)
        })
    }
    
    initMap = () => {
      // create a map 
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: 28.385299, lng: -81.563874},
        zoom: 13
      })
      
      // create an infowindow
    var infowindow = new window.google.maps.InfoWindow()

    // display dynamic markers
    // eslint-disable-next-line
    this.state.venues.map(myVenue => {

    var contentString = `${myVenue.venue.name}` // Removed Place Name in WT 

    var marker = new window.google.maps.Marker({
      position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
      map: map,
      title: myVenue.venue.name
    })

    // click on a marker
    marker.addListener('click', function() {
      
    // Change the Content
    infowindow.setContent(contentString)
    
    // Open an InfoWindow
    infowindow.open(map, marker)
    })
  });  
      
}      

  render () {
    return (
      <main>
        <div id="map">
          
        </div>
      </main>  
    )
  }
}

function loadScript(source) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = source
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App