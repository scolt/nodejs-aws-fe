import * as Yup from 'yup';

export type Product = {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  count?: number;
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.number().required().min(0),
  image: Yup.string().required(),
  count: Yup.number().required().min(0).integer()
});
