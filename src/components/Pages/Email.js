import React, { Component } from 'react'
import GoogleMap from 'google-map-react'

//import {BrowserRouter as Router} from 'react-router-dom'
import Marker from '../Map/Marker'
import EmailPolyline from '../Map/EmailPolyline'
//import Navbar from '../Navbar/Navbar'

class Email extends Component {
  
  
  constructor (props) {
    super(props)
    this.state = {
      mapsLoaded: false,
      map: null,
      maps: null
    }
  }

  onMapLoaded (map, maps) {
    this.fitBounds(map, maps)

    this.setState({
      ...this.state,
      mapsLoaded: true,
      map: map,
      maps: maps
    })
  }

  fitBounds (map, maps) {
    var bounds = new maps.LatLngBounds()
    for (let marker of this.props.markers) {
      bounds.extend(
        new maps.LatLng(marker.lat, marker.lng)
      )
    }
    map.fitBounds(bounds)
  }

  afterMapLoadChanges () {
    return (
      <div style={{display: 'none'}}>
        <EmailPolyline
          map={this.state.map}
          maps={this.state.maps}
          markers={this.props.markers} />
      </div>
     
    )
  }

  render () {
    return (
      
      <GoogleMap
        className = "address"
        bootstrapURLKeys={{key: 'AIzaSyDvBhuI7xmurWc9U5i0PtM2jPb_bQBPC3E'}}
        style={{height: '91.5vh',position: 'relative', left:'13%',  width: '87%'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps)}>
        <Marker text={'Deepak'} lat={25.1698297} lng={80.840106} />
        <Marker text={'sara'} lat={19.1159478} lng={72.8397314} />
        <Marker text={'saraaa'} lat={19.2096532} lng={72.7939621} />
        
        {this.state.mapsLoaded ? this.afterMapLoadChanges() : ''}
      </GoogleMap>
    )
    
  }
}

Email.defaultProps = {
  markers: [
    {lat: 25.1698297, lng: 80.840106},
    {lat: 19.1159478, lng: 72.8397314},
    {lat: 25.1698297, lng: 80.840106},
    {lat: 19.1159478, lng: 72.8397314}

  ],
  center: [19.1159478, 72.8397314],
  zoom: 4
}


export default Email



