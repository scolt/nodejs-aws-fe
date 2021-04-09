import * as Yup from 'yup';

export type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  attributes: {
    [key: string]: string | number;
    price: number;
    type: string;
  };
};

export const ProductSchema = Yup.object().shape({
  id: Yup.number().required(),
  name: Yup.string().required(),
  description: Yup.string(),
});
