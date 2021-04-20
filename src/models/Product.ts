import * as Yup from 'yup';

export type Product = {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
};

export const ProductSchema = Yup.object().shape({
  id: Yup.number().required(),
  title: Yup.string().required(),
  description: Yup.string(),
});
