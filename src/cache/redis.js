const ioredis = require('ioredis');

class Redis {
  constructor() {
    this.client = ioredis(process.env.REDIS_URL || 'redis://127.0.0.1:6379');
  }

  get(key, fallbackValue = 0) {
    return this.client
      .get(key)
      .then(value => JSON.parse(value))
      .catch(() => fallbackValue);
  }

  getAll() {
    return this.client.keys('*');
  }

  addSet(key, values) {
    return this.client.sadd(key, values);
  }

  getSet(key) {
    return this.client.smembers(key);
  }

  set(key, value) {
    return this.client.set(key, JSON.stringify(value));
  }

  setExpired(key, expirationInMilliseconds, value) {
    return this.client.set(key, JSON.stringify(value), 'px', expirationInMilliseconds);
  }

  purge() {
    return this.client.flushall();
  }
}

module.exports = new Redis();
