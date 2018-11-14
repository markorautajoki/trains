export const getTrains = station => fetch(`/api/trains?station=${station}&category=Long-distance`).then(res => res.json());

export const getStations = () => fetch('/api/stations').then(res => res.json());
