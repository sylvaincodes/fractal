<img src="./public/assets/images/og.png"/>

# Build, Test, Deploy A Front End Ecommerce With Next 15, React 19 Clerk, Redux Toolkit, Framer Motion, ShadCn.

This is how it looks:

<table>
  <tr>
    <td>
      <a href='./public/assets/images/og.png'><img src="./public/assets/images/og.png" style="width: 300px"/></a>
    </td>
    <td>
      <a href='./readme/assets/images/og.png'><img src="./public/assets/images/og.png" style="width: 300px"/></a>
    </td>
    <td>
      <a href='./public/assets/images/og.png'><img src="./public/assets/images/og.png" style="width: 300px"/></a>
    </td>
  </tr>
</table>



This is a frontend Nextjs app with a beautiful and amazing design ui. 

## Our goal

- Build beautiful Frontend Design UI &  High quality code 
- Test with Jest and Cypress.

## Core features 

- Learn how to start a next js  project from scratch
- Learn how to set SEO to Next Js Project
- Learn how to set up Tailwind Css and Next Js Project
- Learn how to create React components with Tailwind CSS
- Learn how to create React components with framer motion
- Learn how to Test your app with Jest, Cypress
- Learn how to build consume API 

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
    npm i framer-motion react-hot-toast react-icons	--legacy-peer-deps
    npm install @clerk/nextjs


```

7. Setup Frontend UI Kit ( Colors - Fonts - Container )

8. Create  Home UI

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