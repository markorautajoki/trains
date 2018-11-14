import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { getTrains, getStations } from "../api";
import { TrainList, trainListType } from "../components/train_list";

import styles from './main.css';

const DEFAULT_STATION = 'TPE';

const REFRESH_INTERVAL = 5000;

class App extends Component {
  constructor() {
    super();
    this.state = {
      arriving: [],
      departing: [],
      stations: [],
      selectedStation: DEFAULT_STATION
    };

    this.onStationChange = this.onStationChange.bind(this);
    this.onRefreshInterval = this.onRefreshInterval.bind(this);
  }

  async updateArrivingAndDeparting(selectedStation) {
    const { arriving, departing } = await getTrains(selectedStation);

    this.setState({ arriving, departing });
  }

  async componentDidMount() {
    const stations = await getStations();

    this.setState({ stations });

    await this.updateArrivingAndDeparting(DEFAULT_STATION);

    setInterval(this.onRefreshInterval, REFRESH_INTERVAL);
  }

  onRefreshInterval() {
    this.updateArrivingAndDeparting(this.state.selectedStation);
  }

  onStationChange(e) {
    const selectedStation = e.target.value;

    this.setState({ selectedStation });

    this.updateArrivingAndDeparting(selectedStation);
  }

  renderStationSelectorOption({stationShortCode, stationName}) {
    return <option
      key={stationShortCode}
      value={stationShortCode}>{stationName}</option>;
  }

  renderStationSelector(stations, selectedStation) {
    return (
      <select value={selectedStation} onChange={this.onStationChange}>
        { stations.map(station => this.renderStationSelectorOption(station, selectedStation)) }
      </select>
    );
  }

  render() {
    return (
      <div>
        <div className={styles.stationSelectorContainer}>
        Asema: { this.renderStationSelector(this.state.stations, this.state.selectedStation) }
        </div>
        <div className={styles.mainContainer}>
          <TrainList trains={this.state.arriving} title="Saapuvat kaukojunat" type={trainListType.ARRIVAL}/>
          <TrainList trains={this.state.departing} title="Lähtevät kaukojunat" type={trainListType.DEPARTURE}/>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
