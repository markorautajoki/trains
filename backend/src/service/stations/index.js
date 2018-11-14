const api = require('../../avoindata_api');
const cache = require('../../cache');

const STATIONS_METADATA_CACHE_KEY = 'STATIONS_METADATA_CACHE_KEY';
const STATION_NAME_PART_TO_REMOVE = ' asema';

const getStationsMetatada = async () => {
  let stationsMetatada = await cache.getCacheItem(STATIONS_METADATA_CACHE_KEY);

  if (!stationsMetatada) {
    stationsMetatada = await api.getStationsMetadata();

    await cache.setCacheItem(STATIONS_METADATA_CACHE_KEY, stationsMetatada);
  }

  return stationsMetatada;
};

const getStationsList = async () => {
  const stationsMetadata = await getStationsMetatada();

  return stationsMetadata.map(({ stationShortCode, stationName }) =>
    ({ stationShortCode, stationName: stationName.replace(STATION_NAME_PART_TO_REMOVE, '') }));
};

module.exports = {
  getStationsList
};

