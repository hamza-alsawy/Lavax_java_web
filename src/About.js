import React from 'react'

export const About =() =>
    (
        <div>
            <h2> Welcom to About page  </h2>
            <h3> Build an E-Commerce App </h3>
            <p>Pick a few of your favorite sites and I guarantee at least one of them has an e-commerce app embedded in it, even if it's just a small storefront. E-commerce apps are ubiquitous and I bet that you'll be called upon to build one at one time or another in your career as a developer.

It is tempting to build an impressive, large-scale e-commerce platform like Amazon, but I would recommend working on something smaller and more focused. Instead of a marketplace that provides all things to all people, go with an industry that interests you. For example, if you like home goods, you might take a look at what Crate & Barrel or Williams-Sonoma have built for their sites.

Aside from products, e-commerce apps may provide a service to consumers. If it is a service that is provided locally, an interactive map could be added to the app to provide for the service provider and customer to know each others' location. Food delivery applications such as UberEats and Doordash, which require the location of the person ordering the food come to mind.

Regardless of what's being sold, whether it's physical or virtual, every e-commerce app will consist of some storefront with the product or service details. If users can purchase multiple products at once, it should have a shopping cart where users can manage the products they want to buy. Finally, every e-commerce app needs a checkout process where users can either purchase their products anonymously or once they are authenticated.</p>
        

            <r></r>
            
            <p> Popular examples: Airbnb, Uber, UberEats, Doordash, Etsy, Udemy

Technologies to utilize:

Create React App or Gatsby for the storefront and displaying products
Stripe with the package react-stripe-elements for handling payment processing
Serverless function like Netlify / AWS Lambda to handle checkout process
Algolia for lightning-fast product searching
Snipcart for easily creating a cart and managing cart products</p>
           </div>
    )