
import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './MapContainer.css';


const MapContainer = ({ google }) => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    phoneNumber: '',
    latitude: '',
    longitude: ''
  });

  const handleAddCustomer = () => {
    const { name, phoneNumber, latitude, longitude } = newCustomer;
    const customer = {
      name,
      phoneNumber,
      location: {
        lat: Number(latitude),
        lng: Number(longitude)
      }
    };
    setCustomers([...customers, customer]);
    setNewCustomer({
      name: '',
      phoneNumber: '',
      latitude: '',
      longitude: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='container'>
      <div className='add-customer'>
        <h2>Add Customer</h2>
        <div className='form-group'>
          <label>Name: </label>
          <input type="text" name="name" value={newCustomer.name} onChange={handleInputChange} />
        </div>
        <div className='form-group'>
          <label>Phone Number: </label>
          <input
            type="text"
            name="phoneNumber"
            value={newCustomer.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label>Latitude: </label>
          <input
            type="text"
            name="latitude"
            value={newCustomer.latitude}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label>Longitude: </label>
          <input
            type="text"
            name="longitude"
            value={newCustomer.longitude}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn" onClick={handleAddCustomer}>Add Customer</button><br/><br/>
      </div>
      <div className="map-container" style={{ height: '400px', width: '100%' }}>
        <Map
          google={google}
          style={{ height: '100%', width: '100%' }}
          initialCenter={{ lat:15.852760 , lng:74.511124  }}
          zoom={10}
        >
          {customers.map((customer, index) => (
            <Marker
              key={index}
              position={customer.location}
              title={customer.name}
            />
          ))}
        </Map>
      </div>
      <div>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCwsjST0PHN3SSlDcqwVfXpuEaPeKGERSA',
})(MapContainer);
