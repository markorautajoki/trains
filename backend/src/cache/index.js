const { promisify } = require('util');
var redis = require('redis');

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST
});

redisClient.on("error", (err) => console.log(`Error: ${err}`));

const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

const setCacheItem = async (key, item) => {
  try {
    await setAsync(key, JSON.stringify(item));
  } catch(err) {
    console.log(err);
  }
};

const getCacheItem = async key => {
  try {
    const item = await getAsync(key);
    return JSON.parse(item);
  } catch(err) {
    console.log(err);
  }
};

module.exports = {
  setCacheItem,
  getCacheItem
}