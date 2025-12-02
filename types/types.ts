export interface ICamper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  lenght: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: IGalleryImage[];
  reviews: IReview[];
}

export interface IGalleryImage {
  thumb: string;
  original: string;
}
export interface IReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}
