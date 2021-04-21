const fetch = require('node-fetch');
const Config = require('../../config');

const key = Config.Accesses.Key;
const namespace = Config.Accesses.Namespace;
const endpoint = (method) => `https://api.countapi.xyz/${method}/${namespace}/${key}`;

async function count() {
  const response = await fetch(endpoint('get'), { method: 'GET' });
  const { value } = await response.json();
  return value;
}

async function hit() {
  const response = await fetch(endpoint('hit'), { method: 'GET' });
  const { value } = await response.json();
  return value;
}

module.exports = { count, hit };
