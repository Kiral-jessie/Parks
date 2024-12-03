import React, { useState } from 'react';

function ParkingReservation() {
  // Available parking spots (just an example)
  const allSpots = ['Vip', 'Corner2', 'Splendid3', 'palaceB', 'Soweto', 'CynthiaSuite', 'Garage4','Money6','gear6','Breadspot','LITA'];

  // Initializing state variables
  const [name, setName] = useState(''); // Store the user's name
  const [parkingSpace, setParkingSpace] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Dynamically store reserved spots, initially empty
  const [reservedSpots, setReservedSpots] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on submit

    // Check if the parking spot is already reserved by someone else
    if (reservedSpots[parkingSpace]) {
      setErrorMessage(`Sorry, Spot ${parkingSpace} is already reserved by ${reservedSpots[parkingSpace]}. Please choose another spot.`);
    } else if (!name) {
      setErrorMessage('Please enter a name before making a reservation.');
    } else {
      setErrorMessage(''); // Clear the error message
      console.log("Reservation Details:", { parkingSpace, reservationDate, reservationTime });

      // Simulate reservation by adding the username to reservedSpots
      setReservedSpots((prevReservedSpots) => ({
        ...prevReservedSpots,
        [parkingSpace]: name, // Store the username as the reservation for that spot
      }));

      // Clear the form after successful reservation
      setParkingSpace('');
      setReservationDate('');
      setReservationTime('');
    }
  };

  return (
    <div>
      <h2>Reserve Your Parking Spot</h2>

      {/* User registration (enter username) */}
      <div>
        <label>Enter The Name You Registered With:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name"
        />
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Choose Parking Spot:</label>
          <select 
            value={parkingSpace} 
            onChange={(e) => setParkingSpace(e.target.value)}
          >
            <option value="">Select Spot</option>
            {allSpots.map((spot, index) => (
              <option key={index} value={spot}>
                {reservedSpots[spot] ? `${spot} (Reserved by ${reservedSpots[spot]})` : spot}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Reservation Date:</label>
          <input 
            type="date" 
            value={reservationDate} 
            onChange={(e) => setReservationDate(e.target.value)} 
          />
        </div>

        <div>
          <label>Reservation Time:</label>
          <input 
            type="time" 
            value={reservationTime} 
            onChange={(e) => setReservationTime(e.target.value)} 
          />
        </div>

        <button type="submit">Reserve Spot</button>
      </form>

      {/* Show error message if the selected spot is unavailable */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default ParkingReservation;