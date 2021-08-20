import { Container } from '@material-ui/core';
import React from 'react';
import "../css/Info.css";
function Info() {
    return (
        <div className="Info_Box">
            <Container>
                <h1>Welcome User</h1>
                <h3>You have already booked a room.</h3>
                <h2>Your Room Details are as follows:</h2>
                <div>
                    <h2>Hostel No: X</h2>
                    <h2>Room NO  : Y</h2>
                </div>
            </Container>
        </div>
    )
}

export default Info
