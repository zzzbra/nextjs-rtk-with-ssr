// API
type ProductType = string; // would ordinarily elaborate these, e.g, "Hard Good" | "etc";
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

export type ProductData = {
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

// State

export type ProductState = ProductData & {
  quantity?: number;
};

export type ItemsInCart = {
  [id: ProductData["id"]]: number;
};
