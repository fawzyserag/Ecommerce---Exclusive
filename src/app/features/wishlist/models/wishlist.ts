export interface Wishlist {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  sold: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  slug: string;
  imageCover: string;
  images: string[];
  createdAt: string;

  brand: {
    _id: string;
    name: string;
    image: string;
    slug: string;
  };

  category: {
    _id: string;
    name: string;
    image: string;
    slug: string;
  };
}
