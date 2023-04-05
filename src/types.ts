type ProductType = "Hard Good";
type ProductImage = {
  id: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  alt: string | null;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
};

type ProductData = {
  id: number;
  title: string;
  body: string;
  vendor: string;
  product_type: ProductType;
  price: number;
  tags: string;
  images: ProductImage[];
  thumbnail: ProductImage;
};

type RecomendationData = ProductData;

export type ShopApiData = {
  products: ProductData[];
  recommendations: RecomendationData[];
};
