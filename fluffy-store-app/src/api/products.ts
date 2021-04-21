import FluffyAxios from './fluffyAxios';

export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

type ListResponse = {
  products: Array<Product>;
  lastKey?: string;
};

type Pagination = { after?: string; limit?: number };

async function list({ after, limit }: Pagination = {}): Promise<ListResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const response = await FluffyAxios.get('/products', { params: { after, limit } });
  return response.data;
}

export default { list };
