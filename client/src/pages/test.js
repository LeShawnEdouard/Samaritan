import React, { Component } from 'react';

class TestTable extends Component {
    render() {
        return (
            <div>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Host</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>About</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.events.map(item => {
                            return (
                                <tr>
                                    <td key={item.event_name}>{item.event_name}</td>
                                    <td key={item.event_host}>{item.event_host}</td>
                                    <td key={item.event_time}>{item.event_time}</td>
                                    <td key={item.event_location}>{item.event_location}</td>
                                    <td data-width="250px" key={item.event_about}>{item.event_about}</td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </div>
        )
    }
}