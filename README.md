[![Netlify Status](https://api.netlify.com/api/v1/badges/91450e5b-84af-4fdf-9b8a-20c917ff719d/deploy-status)](https://app.netlify.com/sites/unruffled-rosalind-21eb10/deploys)

# Front-end APP created for ITCrowd challenge

https://unruffled-rosalind-21eb10.netlify.app/

## Intro

    This APP was created to fullfil the objetives of the challenge. Done using React as main framework this app can handle all the basic communication with a server.
    It has done with a basic layout, that has a fixed header/navigation bar, and a dynamic main container that changes when the user interacts. It's an SPA APP,
    which does never forces the user to leave the main page, only using reloads to refresh data from DB.
    The APP was done trying to use good practices and having SOLID principles in mind, using lastest version React Functional Components.

## Resources

- **Basic languages:** HTML/CSS/JavaScript

    Based both Front-end and Back-end in MERN stack.

- **Frameworks:** React.js

    Chosed because of experience using it.

- **Libraries:** 
    1. Bootstrap: Allowed the creation of some nice buttons and forms with ease.
    2. Sweet Alert2: It's a nice library to feedback the user.

- **Missing:** It could had been nice to use Material UI, but i do still lack some experience with it and i honestly wanted to show some HTML/CSS skills

## Functionalities

    The APP can handle most of the basic functionalities of a product catalog. It doesn't have a cart, so it can't be considered a webshop.

- **The APP do:**
    1. Shows a homepage with some carrousel photos, with a dynamic scrolling component.
    2. Shows all the products with different filters, it does implement a secondary navigation bar to go back and apply new filters.
    3. Shows a contact form with the basic information.
    4. Have login functionality, with and Admin view implemented using a JWT token.
    5. Have Admin View where the user can create/modify/delete products, as well as delete users, with the exception of admin user.
    6. Have a main animated navigation bar with all the seccions avaliable for easy access, fixed to the initial position.

## Architecture

    The APP is divided into:

    ```mermaid
    graph LR
    A[root] --> B[src] --> D[components]
    A --> C[public] --> G[img]
    B --> E[container]
    B --> F[controllers]
    ```

- **root:** Contains package data and this readme.
- **src:** Contains index.js and App.js to handle APP loading.
- **public:** Contains main page.
- **img:** Contains favicon.
- **components:** Contains every react functional component that doesn't have a child, from buttons, forms, dropdowns, etc.
- **container:** Contains every parent of a functional component, and whose handle page navigation.
- **controllers:** Contains JS functions to handle communication with the server.

## To-Do List

    Many features are lacking, as they would take time and there was not enough to implement then.

- **cart:** The APP need a cart to be considered a shop.
- **filters:** Actual filters are basic, they were done without knowing what to store, so changing the filters to manage cars on an easier manner would be almost top priority.
- **pagination:** Needs some client side pagination to avoid loading all the products at one, with compatibility with filters. 
- **MaterialUI:** This library would not only optimize the APP but also would give it a better look.
- **Optimization:** This APP requires optimization, many hooks could be done into custom hooks and many components could be simplified.
- **Testing:** There should be a testing sessions before going live.

## How to run it

    Simply create a new folder and do run console:
    > npm start

## Deploy

    APP is deployed in Netlify, doesn't need to do a production build.
