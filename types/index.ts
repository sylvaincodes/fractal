import { z, ZodType } from "zod";

export type FormData = {
  name: string;
  email: string;
  password: string;
};

// register
export const userSchema: ZodType<FormData> = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Min lenght 3!" })
    .max(60, { message: "Max lenght 60!" }),
  email: z
    .string()
    .trim()
    .min(3, { message: "Min lenght 3!" })
    .email({ message: "Invalid email!" }),
  password: z
    .string()
    .trim()
    .min(3, { message: "Min lenght 3!" })
    .max(60, { message: "Max lenght 60!" }),
  // role: z.enum(["user", "admin"]),
});

export type sendEmailTypes = {
  subject: string;
  email: string;
  message: string;
};

export type INewsletter = {
  email: string;
};

export type Category = {
  _id: string;
  name: string;
  link: string;
  slug: string;
  image: string;
  createdAt?: string;
  submenu?: SubCategory[];
};

//1. types
export type ISubCategory = {
  name: string;
  slug: string;
  link: string;
  parent: Category;
};

export type SubCategory = {
  _id: string;
  name: string;
  slug: string;
  link: string;
  parent?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type SubPage = {
  _id?: string;
  name: string;
  slug: string;
  link: string;
  parent?: string;
  createdAt?: string;
};

export type Page = {
  _id: string;
  name: string;
  slug: string;
  link: string;
  subpage?: SubPage[];
  createdAt?: string;
};

export type Slide = {
  _id: string;
  name: string;
  link: string;
  slug: string;
  title: string;
  description: string;
  subtitle: string;
  btn: string;
  image: string;
  textColor: string;
  createdAt?: string;
};

export type FormValues = {
  search: string;
};

export type ICategory = {
  _id: string;
  sales?: number;
  name: string;
  slug: string;
  link: string;
  image: string;
  submenu?: string[];
};

export type IBlogCategory = {
  _id: string;
  name: string;
  slug: string;
  link: string;
  image: string;
};

export type BlogCategory = {
  name: string;
  slug: string;
  link: string;
  image: string;
};

export type ISubPage = {
  name: string;
  slug: string;
  link: string;
  parent: string;
};

export type IPage = {
  name: string;
  slug: string;
  link: string;
  subpage: string;
};

export type IDetail = {
  name: string;
  value: string;
};

export type Detail = {
  name: string;
  value: string;
};

export type IQuestion = {
  name: string;
  value: string;
};

export type Question = {
  name: string;
  value: string;
};

export type IStyle = {
  name: string;
  color: string;
  image: string;
};

export type IOptions = {
  qty: number;
  price: number;
  sold: number;
  option: string;
  images: string[];
  discount: number;
};

export type IAddress = {
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  zipCode: string;
  address: string;
  phoneNumber: string;
  state: string;
};

export type Address = {
  _id: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  zipCode: string;
  address: string;
  phoneNumber: string;
  state: string;
};

export type IUser = {
  name: string;
  email: string;
  password: string;
  role: string;
  image: string;
  emailVerified: boolean;
  defaultPaymentMethod: string;
  address: IAddress;
  resetCode: string;
};

export type User = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  image: string;
  emailVerified: boolean;
  defaultPaymentMethod?: string;
  address: Address;
  resetCode?: string;
  createdAt?: string;
  confirm_password?: string;
};

export type clerkUser = {
  id: string;
  imageUrl: string;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
};

export type IReview = {
  rating: number;
  review: string;
  likes: IUser[];
  reviewBy: IUser;
};

export type ISubProduct = {
  sku: string;
  style: IStyle;
  options: IOptions[];
};

export type IBrand = {
  name: string;
  link: string;
  slug: string;
  image: string;
};

export type IBlog = {
  name: string;
  link: string;
  slug: string;
  image: string;
  content: string;
  postBy: IUser;
  category: IBlogCategory;
};

export type Blog = {
  name: string;
  link: string;
  slug: string;
  image: string;
  content: string;
  postBy: IUser;
  category: BlogCategory;
  createdAt: string;
};

export type Review = {
  _id: string;
  reviewBy: {
    id: string;
    imageUrl: string;
    fullName: string;
  };
  rating: number;
  review: string;
  likes: string[];
  createdAt: Date;
  updatedAt: string;
};

export type Style = {
  name: string;
  color: string;
  image: string;
};

export type Options = {
  qty: number;
  price: number;
  sold: number;
  option: string;
  images: string[];
  discount: number;
  _id: string;
};

export type SubProduct = {
  sku: string;
  style: Style;
  options: Options[];
  _id: string;
};

export type Brand = {
  _id?: string;
  name: string;
  link: string;
  slug: string;
  image: string;
};

export type IProduct = {
  featured?: boolean;
  name: string;
  slug: string;
  description: string;
  category: ICategory;
  subCategories: ISubCategory[];
  brand: IBrand;
  content: string;
  details: IDetail[];
  questions: IQuestion[];
  reviews: IReview[];
  subProducts: ISubProduct[];
  sales?: number;
};

export type Product = {
  _id: string;
  name: string;
  featured: boolean;
  slug: string;
  description: string;
  category: Category;
  subCategories: SubCategory[];
  brand: Brand;
  content: string;
  details: Detail[];
  questions: Question[];
  reviews: Review[];
  subProducts: SubProduct[];
};

export type ISlide = {
  name: string;
  link: string;
  slug: string;
  title: string;
  subtitle: string;
  btn: string;
  image: string;
  textColor: string;
};

export type IpRegistry = {
  location: {
    country: {
      flag: {
        emojitwo: string;
      };
      name: string;
    };
  };
  currency: {
    code: string;
  };
};

export type Cart = {
  cartItems: CartItem[];
  cartTotal: number;
  products: Product[];
};

export type ICart = {
  cartItems: CartItem[];
  user: User;
  totalAfterDiscount: number;
  cartTotal: number;
  products: Product[];
};

export type CartItem = {
  product: string;
  name: string;
  desription: string;
  optionBefore: number;
  option: string;
  slug: string;
  sku: string;
  shipping: string;
  images: string[];
  style: Style;
  price: number;
  priceBefore: number;
  qty: number;
  stock: number;
  brand: string;
  likes: string[];
  _uid: string;
};

export type Payment = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  slug: string;
};

export type Coupon = {
  _id?: string;
  coupon: string;
  startDate?: Date;
  endDate?: Date;
  discount: number;
  createdAt?: string;
  status?: string;
};

export type ICoupon = {
  _id?: string;
  coupon: string;
  startDate?: Date;
  endDate?: Date;
  discount: number;
  createdAt?: string;
  status?: string;
};

export type Delivery = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  times: string;
  price: number;
};

export type IOrder = {
  user: User;
  products: IProductOrder[];
  paymentMethod: string;
  total: number;
  shippingPrice: number;
  taxPrice: number;
  isPaid: boolean;
  paidAt: Date;
  deliveredAt: Date;
  status: string;
  totalBeforeDiscount: number;
  couponApplied: Coupon;
  shippingStatus: string;
  paymentResult: paymentResult;
  shippingTimes: string;
  shippingAddress: Address;
  createdAt: string;
};

export type paymentResult = {
  id: string;
  status: string;
  email_address: string;
};

export type IProductOrder = {
  product: string;
  name: string;
  images: string;
  option: string;
  qty: number;
  style: Style;
  price: number;
};

export type Order = {
  _id: string;
  user: User;
  products: IProductOrder[];
  paymentMethod: string;
  total: number;
  shippingPrice: number;
  taxPrice: number;
  isPaid: boolean;
  status: string;
  totalBeforeDiscount: number;
  couponApplied: Coupon;
  shippingStatus: string;
  paymentResult: paymentResult;
  shippingTimes: string;
  shippingAddress: Address;
  createdAt: string;
};

export type ProductOrder = {
  _id?: string;
  product: string;
  name: string;
  images: string;
  option: string;
  qty: number;
  style: Style;
  price: number;
};

export type companyCategory = {
  id: string;
  title: string;
  slug: string;
};

export type ICompanyInfo = {
  _id?: string;
  name?: string;
  category?: string;
  logo?: string;
  description?: string;
};
