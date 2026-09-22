export type PropertyImage = {
  url: string;
  id?: number;
};

export type PropertiesType = {
  id: number;
  name: string;
  price: number;
  host: string;
  rating?: number;
  latitude?: number;
  longitude?: number;
  localization: string;
  description: string;
  images: PropertyImage[];
};

export type Categories = {
  title: string;
  image: string;
  properties: PropertiesType[];
};