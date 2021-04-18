export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

type ListResponse = {
  products: Array<Product>;
};

async function list(): Promise<ListResponse> {
  return {
    products: [
      {
        id: 1,
        name: 'Gato fofinho',
        description: 'Uma besta que não passa de um besta',
        image: 'https://i.pinimg.com/474x/6b/86/74/6b867435a30b4a0014ac476733bc79f4.jpg',
      },
      {
        id: 2,
        name: 'Gato sedutor',
        description: 'Nem sexy, nem vulgar',
        image: 'https://i.pinimg.com/474x/60/fb/53/60fb5367c092e79e58eddab67d25ccb3.jpg',
      },
    ],
  };
}

export default { list };
