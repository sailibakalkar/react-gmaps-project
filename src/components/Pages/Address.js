import React, { Component } from 'react'
import GoogleMap from 'google-map-react'

//import {BrowserRouter as Router} from 'react-router-dom'
import Marker from '../Map/Marker'
import Polyline from '../Map/Polyline'
//import Navbar from '../Navbar/Navbar'
import InfoWindow from '../Map/InfoWindow'
import AddressPolyline from "../Map/AddressPolyline"

class Address extends Component {
  
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
        <AddressPolyline
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
        style={{height: '91.5vh',position: 'fixed', left:'13%',  width: '87%'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps)}>
        <Marker text={'Saili'} lat={19.1196225} lng={72.8152608} />
        <Marker text={'Sara'} lat={19.1159478} lng={72.8397314} />
        <Marker text={'Deepak'} lat={19.2096532} lng={72.7939621} />
        
        {this.state.mapsLoaded ? this.afterMapLoadChanges() : ''}
        
      </GoogleMap>
    )
    
  }
}

Address.defaultProps = {
  markers: [
    {lat: 19.1196225, lng: 72.8152608},
    {lat: 19.1159478, lng: 72.8397314},
    {lat: 19.2096532, lng: 72.7939621},
    {lat: 19.1159478, lng: 72.8397314}

  ],
  center: [19.1159478, 72.8397314],
  zoom: 4
}


export default Address


