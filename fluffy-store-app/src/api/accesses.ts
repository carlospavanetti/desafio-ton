import FluffyAxios from './fluffyAxios';

async function hit(): Promise<void> {
  return FluffyAxios.get('/accesses/hit');
}

export default { hit };
