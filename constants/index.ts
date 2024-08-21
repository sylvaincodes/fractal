//constants here
export const Slides = [
  {
    _id: "66bf3d40375b0b03ee11a3d5",
    name: "Banner home 1",
    slug: "banner-home",
    link: "categories/consoles/products",
    title: "",
    subtitle: "classic exclusive",
    btn: "show now",
    image:
      "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1723991795/ecommerce-carrefour/women_collection_mvmr9c.png",
    textColor: "#ffffff",
    createdAt: "2024-08-16T11:51:28.526Z",
    updatedAt: "2024-08-18T14:37:10.344Z",
    __v: 0,
  },
  {
    _id: "66bf3c97375b0b03ee11a3d0",
    name: "Banner home 2",
    slug: "banner-home",
    link: "categories/watches/products",
    title: "women's collection",
    subtitle: "UP TO 40% OFF",
    btn: "shop now",
    image:
      "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1723992193/ecommerce-carrefour/women_2_siyhrf.png",
    textColor: "#ffffff",
    createdAt: "2024-08-16T11:48:39.420Z",
    updatedAt: "2024-08-18T14:43:19.166Z",
    __v: 0,
  },
];

export const Products = [
  {
    _id: "66ac3bd37821c5f37137dc97",
    featured: false,
    name: "apple airpods max wireless over-ear headphones, active noise cancelling, transparency mode",
    slug: "apple-airpods-max-wireless-over-ear-headphones-active-noise-cancelling-transparency-mode",
    description:
      "apple airpods max wireless over-ear headphones, active noise cancelling, transparency mode, personalized spatial audio, dolby atmos, bluetooth headphones for iphone – pink",
    category: {
      _id: "668545aa6c0c5a9794adb778",
      name: "headphones",
      slug: "headphones",
      createdAt: "2024-07-03T12:35:54.957Z",
      updatedAt: "2024-08-02T01:52:04.396Z",
      __v: 0,
      link: "headphones",
      submenu: ["66ac3bc47821c5f37137dc81"],
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1721652259/AejJcBztvGVJchDp3EXwbSyN82q7IWr6fW2SijJC_ifgnkq.jpg",
    },
    subCategories: [],
    brand: {
      _id: "668ad981ed4b0a535cfa6018",
      name: "apple",
      slug: "apple",
      link: "apple",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375678/product-images/apple_buk0pp.png",
      createdAt: "2024-07-07T18:08:01.717Z",
      updatedAt: "2024-07-07T18:08:01.717Z",
      __v: 0,
    },
    details: [
      {
        name: "Color",
        value: "Silver Space Gray Sky Blue Pink Green",
        _id: "66ac3dd07821c5f37137dd10",
      },
      {
        name: "Audio Technology",
        value:
          "Apple-designed dynamic driver Active Noise Cancellation Transparency mode Personalized Spatial Audio with dynamic head tracking Adaptive EQ",
        _id: "66ac3dd07821c5f37137dd11",
      },
      {
        name: "Size and Weight",
        value:
          "AirPods Max, including cushions Height : 7.37 inches (187.3 mm) Width : 6.64 inches (168.6 mm) Depth : 3.28 inches (83.4 mm) Weight : 13.6 ounces (384.8 grams) Smart Case Weight: 4.74 ounces (134.5 grams)",
        _id: "66ac3dd07821c5f37137dd12",
      },
    ],
    questions: [],
    reviews: [
      {
        _id: "66ac3f6d7821c5f37137dfba",
        rating: 4,
        review:
          "I recently made the decision to upgrade my laptop, and after much research and anticipation, I finally got my hands on the M2 MacBook Pro 13 Inch – and let me tell you, it's been an cutie!  From the moment I opened the sleek packaging, I was captivated by the elegant design of the laptop. The slim profile, premium build quality, and the iconic Apple logo gave me an instant sense of satisfaction. But the real magic began when I powered it on.  The performance of the M2 chip truly left me in awe. Apps launch almost instantly, and multitasking feels seamless. Whether I'm running resource-intensive software, editing high-resolution photos, or streaming 4K videos, the laptop handles it all effortlessly. The speed and responsiveness of this machine have undoubtedly boosted my productivity and allowed me to breeze through my tasks.",
        likes: [],
        reviewBy: "668f91e6e70f42541e4c747d",
        createdAt: "2024-08-02T02:07:41.405Z",
        updatedAt: "2024-08-02T02:07:41.405Z",
        __v: 0,
      },
      {
        _id: "66bb8650c69f7baa70a069e0",
        rating: 5,
        review: "Good",
        likes: [
          "66b518032cb028a4cb5eaa39",
          "66b518032cb028a4cb5eaa39",
          "66b518032cb028a4cb5eaa39",
          "66b518032cb028a4cb5eaa39",
        ],
        reviewBy: "66b518032cb028a4cb5eaa39",
        createdAt: "2024-08-13T16:14:08.851Z",
        updatedAt: "2024-08-18T07:24:14.765Z",
        __v: 0,
      },
      {
        _id: "66bc89154fa7dd97c25495cf",
        rating: 5,
        review: "nice",
        likes: ["66bb8d085ec134309bd68fc4"],
        reviewBy: "66bb8d085ec134309bd68fc4",
        createdAt: "2024-08-14T10:38:13.977Z",
        updatedAt: "2024-08-15T11:57:08.099Z",
        __v: 0,
      },
      {
        _id: "66bd6d5733e03e62c550bc39",
        rating: 3,
        review: "Good ",
        likes: [],
        reviewBy: "66bb8d085ec134309bd68fc4",
        createdAt: "2024-08-15T02:52:07.187Z",
        updatedAt: "2024-08-15T02:52:07.187Z",
        __v: 0,
      },
    ],
    subProducts: [
      {
        sku: "TRT46TI",
        style: {
          color: "#9f2b68",
          image:
            "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563574/ecommerce-carrefour/81NIpE9-5mL._AC_SL1500__mykcbn.jpg",
          name: "Pink",
        },
        options: [
          {
            qty: 4,
            price: 299.99,
            sold: 0,
            option: "with apple care",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563701/ecommerce-carrefour/81NIpE9-5mL._AC_SL1500__ziwkq5.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563710/ecommerce-carrefour/81jw08zdEgL._AC_SL1500__xzlz50.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563717/ecommerce-carrefour/71_Z69HbGhL._AC_SL1500__ljxxvl.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563723/ecommerce-carrefour/81mT7xT5FyL._AC_SL1500__vg0nib.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563728/ecommerce-carrefour/71QlK_ujnDL._AC_SL1500__fxnd2u.jpg",
            ],
            discount: 12,
            _id: "66ac3cbc426c777f00b00c7a",
          },
          {
            qty: 4,
            price: 199.99,
            sold: 0,
            option: "without apple care",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563701/ecommerce-carrefour/81NIpE9-5mL._AC_SL1500__ziwkq5.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563710/ecommerce-carrefour/81jw08zdEgL._AC_SL1500__xzlz50.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563717/ecommerce-carrefour/71_Z69HbGhL._AC_SL1500__ljxxvl.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563723/ecommerce-carrefour/81mT7xT5FyL._AC_SL1500__vg0nib.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563728/ecommerce-carrefour/71QlK_ujnDL._AC_SL1500__fxnd2u.jpg",
            ],
            discount: 0,
            _id: "66ac3cbc426c777f00b00c7b",
          },
        ],
        _id: "66ac3cbc426c777f00b00c79",
      },
      {
        sku: "02938NAZ",
        style: {
          color: "#08724f",
          image:
            "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563800/ecommerce-carrefour/81jqUPkIVRL._AC_SL1500__foffn3.jpg",
          name: "green",
        },
        options: [
          {
            qty: 10,
            price: 388.99,
            sold: 0,
            option: "with apple care",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563835/ecommerce-carrefour/81jqUPkIVRL._AC_SL1500__y7dr0f.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563842/ecommerce-carrefour/81S533RgkwL._AC_SL1500__bktgo8.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563850/ecommerce-carrefour/71aAV-Vhg8L._AC_SL1500__dculii.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563858/ecommerce-carrefour/71urS8imiUL._AC_SL1500__dqyo7e.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563865/ecommerce-carrefour/91lPKrrfwYS._AC_SL1500__onmy05.jpg",
            ],
            discount: 0,
            _id: "66ac3d377821c5f37137dcb7",
          },
          {
            qty: 4,
            price: 288.99,
            sold: 0,
            option: "without apple care",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563835/ecommerce-carrefour/81jqUPkIVRL._AC_SL1500__y7dr0f.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563842/ecommerce-carrefour/81S533RgkwL._AC_SL1500__bktgo8.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563850/ecommerce-carrefour/71aAV-Vhg8L._AC_SL1500__dculii.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563858/ecommerce-carrefour/71urS8imiUL._AC_SL1500__dqyo7e.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563865/ecommerce-carrefour/91lPKrrfwYS._AC_SL1500__onmy05.jpg",
            ],
            discount: 6,
            _id: "66ac3d377821c5f37137dcb8",
          },
        ],
        _id: "66ac3d377821c5f37137dcb6",
      },
    ],
    createdAt: "2024-08-02T01:52:19.949Z",
    updatedAt: "2024-08-15T02:52:07.296Z",
    __v: 0,
    content:
      "Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode, Personalized Spatial Audio, Dolby Atmos, Bluetooth Headphones for iPhone – Pink",
  },
  {
    _id: "66ac3bd37821c5f37137dc97",
    featured: false,
    name: "apple airpods max wireless over-ear headphones, active noise cancelling, transparency mode",
    slug: "apple-airpods-max-wireless-over-ear-headphones-active-noise-cancelling-transparency-mode",
    description:
      "apple airpods max wireless over-ear headphones, active noise cancelling, transparency mode, personalized spatial audio, dolby atmos, bluetooth headphones for iphone – pink",
    category: {
      _id: "668545aa6c0c5a9794adb778",
      name: "headphones",
      slug: "headphones",
      createdAt: "2024-07-03T12:35:54.957Z",
      updatedAt: "2024-08-02T01:52:04.396Z",
      __v: 0,
      link: "headphones",
      submenu: ["66ac3bc47821c5f37137dc81"],
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1721652259/AejJcBztvGVJchDp3EXwbSyN82q7IWr6fW2SijJC_ifgnkq.jpg",
    },
    subCategories: [],
    brand: {
      _id: "668ad981ed4b0a535cfa6018",
      name: "apple",
      slug: "apple",
      link: "apple",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375678/product-images/apple_buk0pp.png",
      createdAt: "2024-07-07T18:08:01.717Z",
      updatedAt: "2024-07-07T18:08:01.717Z",
      __v: 0,
    },
    details: [
      {
        name: "Color",
        value: "Silver Space Gray Sky Blue Pink Green",
        _id: "66ac3dd07821c5f37137dd10",
      },
      {
        name: "Audio Technology",
        value:
          "Apple-designed dynamic driver Active Noise Cancellation Transparency mode Personalized Spatial Audio with dynamic head tracking Adaptive EQ",
        _id: "66ac3dd07821c5f37137dd11",
      },
      {
        name: "Size and Weight",
        value:
          "AirPods Max, including cushions Height : 7.37 inches (187.3 mm) Width : 6.64 inches (168.6 mm) Depth : 3.28 inches (83.4 mm) Weight : 13.6 ounces (384.8 grams) Smart Case Weight: 4.74 ounces (134.5 grams)",
        _id: "66ac3dd07821c5f37137dd12",
      },
    ],
    questions: [],
    reviews: [
      {
        _id: "66ac3f6d7821c5f37137dfba",
        rating: 4,
        review:
          "I recently made the decision to upgrade my laptop, and after much research and anticipation, I finally got my hands on the M2 MacBook Pro 13 Inch – and let me tell you, it's been an cutie!  From the moment I opened the sleek packaging, I was captivated by the elegant design of the laptop. The slim profile, premium build quality, and the iconic Apple logo gave me an instant sense of satisfaction. But the real magic began when I powered it on.  The performance of the M2 chip truly left me in awe. Apps launch almost instantly, and multitasking feels seamless. Whether I'm running resource-intensive software, editing high-resolution photos, or streaming 4K videos, the laptop handles it all effortlessly. The speed and responsiveness of this machine have undoubtedly boosted my productivity and allowed me to breeze through my tasks.",
        likes: [],
        reviewBy: "668f91e6e70f42541e4c747d",
        createdAt: "2024-08-02T02:07:41.405Z",
        updatedAt: "2024-08-02T02:07:41.405Z",
        __v: 0,
      },
      {
        _id: "66bb8650c69f7baa70a069e0",
        rating: 5,
        review: "Good",
        likes: [
          "66b518032cb028a4cb5eaa39",
          "66b518032cb028a4cb5eaa39",
          "66b518032cb028a4cb5eaa39",
          "66b518032cb028a4cb5eaa39",
        ],
        reviewBy: "66b518032cb028a4cb5eaa39",
        createdAt: "2024-08-13T16:14:08.851Z",
        updatedAt: "2024-08-18T07:24:14.765Z",
        __v: 0,
      },
      {
        _id: "66bc89154fa7dd97c25495cf",
        rating: 5,
        review: "nice",
        likes: ["66bb8d085ec134309bd68fc4"],
        reviewBy: "66bb8d085ec134309bd68fc4",
        createdAt: "2024-08-14T10:38:13.977Z",
        updatedAt: "2024-08-15T11:57:08.099Z",
        __v: 0,
      },
      {
        _id: "66bd6d5733e03e62c550bc39",
        rating: 3,
        review: "Good ",
        likes: [],
        reviewBy: "66bb8d085ec134309bd68fc4",
        createdAt: "2024-08-15T02:52:07.187Z",
        updatedAt: "2024-08-15T02:52:07.187Z",
        __v: 0,
      },
    ],
    subProducts: [
      {
        sku: "TRT46TI",
        style: {
          color: "#9f2b68",
          image:
            "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563574/ecommerce-carrefour/81NIpE9-5mL._AC_SL1500__mykcbn.jpg",
          name: "Pink",
        },
        options: [
          {
            qty: 4,
            price: 299.99,
            sold: 0,
            option: "with apple care",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563701/ecommerce-carrefour/81NIpE9-5mL._AC_SL1500__ziwkq5.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563710/ecommerce-carrefour/81jw08zdEgL._AC_SL1500__xzlz50.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563717/ecommerce-carrefour/71_Z69HbGhL._AC_SL1500__ljxxvl.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563723/ecommerce-carrefour/81mT7xT5FyL._AC_SL1500__vg0nib.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563728/ecommerce-carrefour/71QlK_ujnDL._AC_SL1500__fxnd2u.jpg",
            ],
            discount: 12,
            _id: "66ac3cbc426c777f00b00c7a",
          },
          {
            qty: 4,
            price: 199.99,
            sold: 0,
            option: "without apple care",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563701/ecommerce-carrefour/81NIpE9-5mL._AC_SL1500__ziwkq5.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563710/ecommerce-carrefour/81jw08zdEgL._AC_SL1500__xzlz50.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563717/ecommerce-carrefour/71_Z69HbGhL._AC_SL1500__ljxxvl.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563723/ecommerce-carrefour/81mT7xT5FyL._AC_SL1500__vg0nib.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563728/ecommerce-carrefour/71QlK_ujnDL._AC_SL1500__fxnd2u.jpg",
            ],
            discount: 0,
            _id: "66ac3cbc426c777f00b00c7b",
          },
        ],
        _id: "66ac3cbc426c777f00b00c79",
      },
      {
        sku: "02938NAZ",
        style: {
          color: "#08724f",
          image:
            "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563800/ecommerce-carrefour/81jqUPkIVRL._AC_SL1500__foffn3.jpg",
          name: "green",
        },
        options: [
          {
            qty: 10,
            price: 388.99,
            sold: 0,
            option: "with apple care",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563835/ecommerce-carrefour/81jqUPkIVRL._AC_SL1500__y7dr0f.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563842/ecommerce-carrefour/81S533RgkwL._AC_SL1500__bktgo8.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563850/ecommerce-carrefour/71aAV-Vhg8L._AC_SL1500__dculii.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563858/ecommerce-carrefour/71urS8imiUL._AC_SL1500__dqyo7e.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563865/ecommerce-carrefour/91lPKrrfwYS._AC_SL1500__onmy05.jpg",
            ],
            discount: 0,
            _id: "66ac3d377821c5f37137dcb7",
          },
          {
            qty: 4,
            price: 288.99,
            sold: 0,
            option: "without apple care",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563835/ecommerce-carrefour/81jqUPkIVRL._AC_SL1500__y7dr0f.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563842/ecommerce-carrefour/81S533RgkwL._AC_SL1500__bktgo8.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563850/ecommerce-carrefour/71aAV-Vhg8L._AC_SL1500__dculii.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563858/ecommerce-carrefour/71urS8imiUL._AC_SL1500__dqyo7e.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563865/ecommerce-carrefour/91lPKrrfwYS._AC_SL1500__onmy05.jpg",
            ],
            discount: 6,
            _id: "66ac3d377821c5f37137dcb8",
          },
        ],
        _id: "66ac3d377821c5f37137dcb6",
      },
    ],
    createdAt: "2024-08-02T01:52:19.949Z",
    updatedAt: "2024-08-15T02:52:07.296Z",
    __v: 0,
    content:
      "Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode, Personalized Spatial Audio, Dolby Atmos, Bluetooth Headphones for iPhone – Pink",
  },
  {
    _id: "66ac3bd37821c5f37137dc97",
    featured: false,
    name: "apple airpods max wireless over-ear headphones, active noise cancelling, transparency mode",
    slug: "apple-airpods-max-wireless-over-ear-headphones-active-noise-cancelling-transparency-mode",
    description:
      "apple airpods max wireless over-ear headphones, active noise cancelling, transparency mode, personalized spatial audio, dolby atmos, bluetooth headphones for iphone – pink",
    category: {
      _id: "668545aa6c0c5a9794adb778",
      name: "headphones",
      slug: "headphones",
      createdAt: "2024-07-03T12:35:54.957Z",
      updatedAt: "2024-08-02T01:52:04.396Z",
      __v: 0,
      link: "headphones",
      submenu: ["66ac3bc47821c5f37137dc81"],
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1721652259/AejJcBztvGVJchDp3EXwbSyN82q7IWr6fW2SijJC_ifgnkq.jpg",
    },
    subCategories: [],
    brand: {
      _id: "668ad981ed4b0a535cfa6018",
      name: "apple",
      slug: "apple",
      link: "apple",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375678/product-images/apple_buk0pp.png",
      createdAt: "2024-07-07T18:08:01.717Z",
      updatedAt: "2024-07-07T18:08:01.717Z",
      __v: 0,
    },
    details: [
      {
        name: "Color",
        value: "Silver Space Gray Sky Blue Pink Green",
        _id: "66ac3dd07821c5f37137dd10",
      },
      {
        name: "Audio Technology",
        value:
          "Apple-designed dynamic driver Active Noise Cancellation Transparency mode Personalized Spatial Audio with dynamic head tracking Adaptive EQ",
        _id: "66ac3dd07821c5f37137dd11",
      },
      {
        name: "Size and Weight",
        value:
          "AirPods Max, including cushions Height : 7.37 inches (187.3 mm) Width : 6.64 inches (168.6 mm) Depth : 3.28 inches (83.4 mm) Weight : 13.6 ounces (384.8 grams) Smart Case Weight: 4.74 ounces (134.5 grams)",
        _id: "66ac3dd07821c5f37137dd12",
      },
    ],
    questions: [],
    reviews: [
      {
        _id: "66ac3f6d7821c5f37137dfba",
        rating: 4,
        review:
          "I recently made the decision to upgrade my laptop, and after much research and anticipation, I finally got my hands on the M2 MacBook Pro 13 Inch – and let me tell you, it's been an cutie!  From the moment I opened the sleek packaging, I was captivated by the elegant design of the laptop. The slim profile, premium build quality, and the iconic Apple logo gave me an instant sense of satisfaction. But the real magic began when I powered it on.  The performance of the M2 chip truly left me in awe. Apps launch almost instantly, and multitasking feels seamless. Whether I'm running resource-intensive software, editing high-resolution photos, or streaming 4K videos, the laptop handles it all effortlessly. The speed and responsiveness of this machine have undoubtedly boosted my productivity and allowed me to breeze through my tasks.",
        likes: [],
        reviewBy: "668f91e6e70f42541e4c747d",
        createdAt: "2024-08-02T02:07:41.405Z",
        updatedAt: "2024-08-02T02:07:41.405Z",
        __v: 0,
      },
      {
        _id: "66bb8650c69f7baa70a069e0",
        rating: 5,
        review: "Good",
        likes: [
          "66b518032cb028a4cb5eaa39",
          "66b518032cb028a4cb5eaa39",
          "66b518032cb028a4cb5eaa39",
          "66b518032cb028a4cb5eaa39",
        ],
        reviewBy: "66b518032cb028a4cb5eaa39",
        createdAt: "2024-08-13T16:14:08.851Z",
        updatedAt: "2024-08-18T07:24:14.765Z",
        __v: 0,
      },
      {
        _id: "66bc89154fa7dd97c25495cf",
        rating: 5,
        review: "nice",
        likes: ["66bb8d085ec134309bd68fc4"],
        reviewBy: "66bb8d085ec134309bd68fc4",
        createdAt: "2024-08-14T10:38:13.977Z",
        updatedAt: "2024-08-15T11:57:08.099Z",
        __v: 0,
      },
      {
        _id: "66bd6d5733e03e62c550bc39",
        rating: 3,
        review: "Good ",
        likes: [],
        reviewBy: "66bb8d085ec134309bd68fc4",
        createdAt: "2024-08-15T02:52:07.187Z",
        updatedAt: "2024-08-15T02:52:07.187Z",
        __v: 0,
      },
    ],
    subProducts: [
      {
        sku: "TRT46TI",
        style: {
          color: "#9f2b68",
          image:
            "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563574/ecommerce-carrefour/81NIpE9-5mL._AC_SL1500__mykcbn.jpg",
          name: "Pink",
        },
        options: [
          {
            qty: 4,
            price: 299.99,
            sold: 0,
            option: "with apple care",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563701/ecommerce-carrefour/81NIpE9-5mL._AC_SL1500__ziwkq5.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563710/ecommerce-carrefour/81jw08zdEgL._AC_SL1500__xzlz50.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563717/ecommerce-carrefour/71_Z69HbGhL._AC_SL1500__ljxxvl.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563723/ecommerce-carrefour/81mT7xT5FyL._AC_SL1500__vg0nib.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563728/ecommerce-carrefour/71QlK_ujnDL._AC_SL1500__fxnd2u.jpg",
            ],
            discount: 12,
            _id: "66ac3cbc426c777f00b00c7a",
          },
          {
            qty: 4,
            price: 199.99,
            sold: 0,
            option: "without apple care",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563701/ecommerce-carrefour/81NIpE9-5mL._AC_SL1500__ziwkq5.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563710/ecommerce-carrefour/81jw08zdEgL._AC_SL1500__xzlz50.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563717/ecommerce-carrefour/71_Z69HbGhL._AC_SL1500__ljxxvl.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563723/ecommerce-carrefour/81mT7xT5FyL._AC_SL1500__vg0nib.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563728/ecommerce-carrefour/71QlK_ujnDL._AC_SL1500__fxnd2u.jpg",
            ],
            discount: 0,
            _id: "66ac3cbc426c777f00b00c7b",
          },
        ],
        _id: "66ac3cbc426c777f00b00c79",
      },
      {
        sku: "02938NAZ",
        style: {
          color: "#08724f",
          image:
            "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563800/ecommerce-carrefour/81jqUPkIVRL._AC_SL1500__foffn3.jpg",
          name: "green",
        },
        options: [
          {
            qty: 10,
            price: 388.99,
            sold: 0,
            option: "with apple care",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563835/ecommerce-carrefour/81jqUPkIVRL._AC_SL1500__y7dr0f.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563842/ecommerce-carrefour/81S533RgkwL._AC_SL1500__bktgo8.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563850/ecommerce-carrefour/71aAV-Vhg8L._AC_SL1500__dculii.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563858/ecommerce-carrefour/71urS8imiUL._AC_SL1500__dqyo7e.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563865/ecommerce-carrefour/91lPKrrfwYS._AC_SL1500__onmy05.jpg",
            ],
            discount: 0,
            _id: "66ac3d377821c5f37137dcb7",
          },
          {
            qty: 4,
            price: 288.99,
            sold: 0,
            option: "without apple care",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563835/ecommerce-carrefour/81jqUPkIVRL._AC_SL1500__y7dr0f.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563842/ecommerce-carrefour/81S533RgkwL._AC_SL1500__bktgo8.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563850/ecommerce-carrefour/71aAV-Vhg8L._AC_SL1500__dculii.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563858/ecommerce-carrefour/71urS8imiUL._AC_SL1500__dqyo7e.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722563865/ecommerce-carrefour/91lPKrrfwYS._AC_SL1500__onmy05.jpg",
            ],
            discount: 6,
            _id: "66ac3d377821c5f37137dcb8",
          },
        ],
        _id: "66ac3d377821c5f37137dcb6",
      },
    ],
    createdAt: "2024-08-02T01:52:19.949Z",
    updatedAt: "2024-08-15T02:52:07.296Z",
    __v: 0,
    content:
      "Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode, Personalized Spatial Audio, Dolby Atmos, Bluetooth Headphones for iPhone – Pink",
  },
];
