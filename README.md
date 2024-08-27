<img src="./public/assets/images/og.png"/>

# Build, Test, Deploy A Front End Ecommerce With Next 15, React 19 Clerk, Redux Toolkit, Framer Motion, ShadCn.

This is how it looks:

<table>
  <tr>
    <td>
      <a href='./public/assets/images/home.png'><img src="./public/assets/images/home.png" style="width: 300px"/></a>
    </td>
    <td>
      <a href='./readme/assets/images/products_list.png'><img src="./public/assets/images/products_list.png" style="width: 300px"/></a>
    </td>
    <td>
      <a href='./public/assets/images/product_detail.png'><img src="./public/assets/images/product_detail.png" style="width: 300px"/></a>
    </td>
  </tr>
</table>



This is a frontend Nextjs ecommerce app with a beautiful and amazing design ui. 

## Our goal

- Build beautiful Frontend Design UI &  High quality code 

## Core features 

- Responsive design and mobile optimization
- Performance optimization techniques
- Accessibility considerations in frontend development
- Testing and debugging frontend code

## Code organization and folder structure

The project contains all Next.js App Router pages and layouts, and takes care of the routing.

```
.
├───actions
├───app                 
│   └───(website)
│       ├───(auth)
│       │   ├───sign-in
│       │   │   └───[[...sign-in]]
│       │   └───sign-up
│       │       └───[[...sign-up]]
│       └───(pages)
│           ├───(home)
│           ├───account
│           │   ├───address
│           │   ├───dashboard
│           │   └───orders
│           ├───cart
│           ├───categories
│           │   └───[slug]
│           │       └───products
│           ├───checkout
│           ├───order
│           │   └───[id]
│           └───products
│               └───[slug]
├───components
│   ├───custom
│   ├───modules
│   │   └───website
│   │       ├───account
│   │       ├───cart
│   │       ├───categories
│   │       ├───Chechout
│   │       ├───footer
│   │       ├───header
│   │       ├───home
│   │       ├───order
│   │       ├───Product
│   │       ├───products
│   │       └───review
│   └───ui
├───constants
├───cypress
│   ├───e2e
│   ├───fixtures
│   ├───pages
│   ├───selectors
│   └───support
├───data
├───hooks
├───lib
├───providers
├───public
│   └───assets
│       └───images
├───store
├───types
└───_tests_
    └───ui

```

This structure enables efficient routing and organization of different parts of the app.

### `/actions` **directory**

This folder contains asynchronous functions that are executed on the server. They can be called in Server and Client Components to handle form submissions and data mutations in Next.js applications.

### `/app` **directory**

This folder is the Root directory of the app. it is also known as the app router.
It supports shared layouts, nested routing, loading states, error handling, and more.

─(website)    
    ├───(auth)   
    │   │   layout.tsx
    │   │   
    │   │
    │   ├───sign-in
    │   │   └───[[...sign-in]]
    │   │           page.tsx
    │   │
    │   └───sign-up
    │       └───[[...sign-up]]
    │               page.tsx
    │
    └───(pages)
    │   │   layout.tsx
    │   │ 
    │   │
    │   ├───(home)
    │   │       page.tsx
    │   │
    │   ├───account
    │   │   │   layout.tsx
    │   │   │ 
    │   │   │
    │   │   ├───address
    │   │   │       page.tsx
    │   │   │
    │   │   ├───dashboard
    │   │   │       page.tsx
    │   │   │
    │   │   └───orders
    │   │           page.tsx
    │   │
    │   ├───cart
    │   │       page.tsx
    │   │
    │   ├───categories
    │   │   └───[slug]
    │   │       └───products
    │   │               page.tsx
    │   │
    │   ├───checkout
    │   │       page.tsx
    │   │
    │   ├───order
    │   │   └───[id]
    │   │           page.tsx
    │   │
    │   └───products
    │        │   page.tsx
    │        │
    │        └───[slug]
    │                page.tsx
layout.ts
    │
error.ts
    │
globals.css
    │
fonts.tsx
    │
loading.tsx
    │
manifest.ts
    │
not-found.tsx
    │
robots.ts
    │
sitemap.ts
    │

### File conventions 

Next.js provides a set of special files to create UI with specific behavior in nested routes such as :

#### layout

	That is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render. 
  You can define a layout by default exporting a React component from a layout.js file. The component should accept a children prop that will be populated with a child layout (if it exists) or a page during rendering

  By default, layouts are nested, which means they wrap child layouts via their children prop. 

page       => 	Unique UI of a route and make routes publicly accessible
loading    => 	Loading UI for a segment and its children
not-found	 =>   Not found UI for a segment and its children
error	     =>   Error UI for a segment and its children


#### error

In Next js Errors can be divided into two categories: expected errors and unexpected  exceptions:
Expected errors can be handled with try or catch and UseActionState.
But uncaught exceptions is handled by using error.tsx and global-error.tsx files

unexpected errors that indicate bugs or issues that should not occur during the normal flow of your application.

in other words, Next.js uses error boundaries to handle unexpected exceptions. it catches errors and shows a fallback UI instead of the component tree that crashed.

### globals.css

This is the main css file of the application. 

### (Website) directory

In the app directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a Route Group to prevent the folder from being included in the route's URL path.

This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.
A route group can be created by wrapping a folder's name in parenthesis like this: (folderName)

This folder contains a 

#### (auth) directory

In next js you can nest folders inside each other. that is called nested route for instance we can create a folder called auth in the (website) folder. the auth folder become a route segment and his Root segment is website folder.


## Quick start

To spin up this example loccaly, follow these steps

### Clone

Use the ` git clone ` CLI to clone template directly  to your machine


### Run project on local


```bash
    npm install
    npm run dev
```

## Project Dev Steps

1. Environment Setup
   
   Create a env file on the root of project
   PUT THIS INSIDE

```bash

    NEXT_PUBLIC_SERVER_URL=
    NEXT_PUBLIC_API_URL=

    # Stripe integration 
    NEXT_PUBLIC_STRIPE_CLIENT_KEY=
    STRIPE_SECRET_KEY=

```

2.  Project Folders & Files Structure

2.  Setup JSdoc for Code documentation

3.  Setup Eslint & typscript
   
4.  Setup Jest

```bash

    # create jest config file 
    npm init jest@latest

    npm install --save-dev jest jest-environment-jsdom @testing-library/dom @testing-library/jest-dom 
    npm install --save-dev @testing-library/react@latest --legacy-peer-deps

     #Add to script in package json
    "test": "jest",
    "test:watch": "jest --watch"  

    #setup jest with nextjs
    npm init jest@latest

    #add this to jest.config
    import nextJest from "next/jest.js";
   
    # // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    const createJestConfig = nextJest({
     dir: './',
    })


    # // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
    export default createJestConfig(config)



# or

```

5. Setup Cypress

```bash
    #install
    npm install cypress --save-dev
    
    #add to pakage json
    "start:test": "cross-env NODE_ENV=test && next build && next start",
    "cypress:open": "cross-env NODE_ENV=test cypress open",
    "cypress:start": "start-server-and-test 'npm run start:test' 3000 'npm run cypress:open'  "

    #lauch 
    npm run cypress:open

    #Some files will be created;
    #add base url localhost to cypress.config
    baseUrl: "http://localhost:3000",

```
    
6. Setup ShadCn and Some Libraries

```bash
    #install
    npx shadcn-ui@latest init
    npm i @radix-ui/react-slot framer-motion react-hot-toast react-icons	--legacy-peer-deps

    #clerk go to site
    https://clerk.com/


```

7. Setup Frontend UI Kit ( Colors - Fonts - Container )

  - Setup Container screens

  ```bash

    screens here: https://tailwindcss.com/docs/screens
    screens: {
        xs: "360px",
        // => @media (min-width: 360px) { ... }

        sm: "575px",
        // => @media (min-width: 575px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1680px",
        // => @media (min-width: 1536px) { ... }

        "4xl": "1920px",
        // => @media (min-width: 1536px) { ... }
      },
    },

  ```

  - Setup layout for pages 
  
  ```bash

  import React from "react";
  import Container from "@/components/custom/Container";

  export default function layout() {
    return (
      <div className="border border-black">
        <Container>set up responsive layout</Container>
      </div>
    );
  }
  
  ```
  
   - Setup padding for screens 
  
  ```bash

  import React from "react";
  import Container from "@/components/custom/Container";

  export default function layout() {
    return (
      <div className="border border-black">
        <Container>set up responsive layout</Container>
      </div>
    );
  }
  
  ```
  
  
  - Setup colors
  
  ```bash

      https://tailwindcss.com/docs/customizing-colors

      https://coolors.co

      https://uicolors.app/create
  
  ```

8. Create  Home UI

  - Header component
  
  ```bash
  
  ```

9. Create  Product page UI

10. Create  Product Detail  UI

11. Create  Cart UI

12. Create  Checkout UI

13. Create  Payment UI

14. Create  Dashoard UI

15. Fixing bug 

16. Test Jest 

17. Test Cypress 

28. Deploy 



## Questions

If you have any issues or questions [Send a comment] (https://www.youtube.com/@sylvaincodes593) on Youtube or reach out me on [Discord](https://discord.com/channels/1234070993996091503/1234070994512248853)