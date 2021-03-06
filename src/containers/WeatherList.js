import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class WeatherList extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { cityData: 'London' }

    //     this.renderWeather = this.renderWeather.bind(this);
    // }

    renderWeather(cityData) {
        return (
            <tr>
                <td>{cityData.city.name}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList)