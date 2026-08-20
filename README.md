# Plate Pal

Build a modern, responsive food delivery website with a clean, premium, user-friendly design.

Main Goal

Create a complete food delivery experience where users can browse restaurants/food items, search for food, filter by categories, add items to a cart, and proceed toward checkout.

Homepage

Create an attractive homepage with:

Modern navbar

Logo and website name: Foodie

Search bar with placeholder: "Search for food, restaurants..."

Location selector

Cart icon with item count

User/profile icon

Hero section with a large food image and headline:
"Delicious food, delivered to your door"

CTA button: "Order Now"

Popular food categories

Featured restaurants

Popular food items

Special offers/deals section

Footer with useful links, contact information, and social media icons

Food Categories

Add a horizontal category filter with attractive icons/images.

Categories:

All

Pizza

Burgers

Biryani

Indian

Chinese

Desserts

Beverages

Healthy

Clicking a category should dynamically filter the displayed food items.

Search

Implement a functional search bar.

Users should be able to search by:

Food name

Restaurant name

Category

Show matching results instantly and display a friendly "No results found" message when nothing matches.

Food Cards

Each food card should contain:

Food image

Food name

Short description

Restaurant name

Rating

Price

Veg/non-veg indicator where appropriate

Add to Cart button

When the user clicks Add to Cart, update the cart count immediately and show a small confirmation/toast such as "Added to cart!"

Shopping Cart

Create a slide-out cart or dedicated cart page.

The cart should include:

Food item image

Item name

Price

Quantity controls (+ / −)

Remove item button

Subtotal

Delivery fee

Discount

Total price

Proceed to Checkout button

The cart should update totals dynamically whenever quantity changes or an item is removed.

Checkout

Create a simple checkout page containing:

Delivery address

Contact information

Order summary

Payment method selection

Promo code field

Total amount

Place Order button

After placing an order, show a clean order-success screen with an order confirmation message.

Design

Use a modern food-delivery aesthetic.

Color palette:

Primary: warm orange/red

Secondary: dark charcoal

Background: white/light cream

Accent: green for vegetarian indicators and success states

Use:

Rounded cards

Subtle shadows

High-quality food imagery

Smooth hover effects

Micro animations

Clean typography

Plenty of whitespace

Responsive grid layouts

Responsive Design

The website must work beautifully on:

Desktop

Tablet

Mobile

On mobile:

Make the navigation mobile-friendly

Keep the cart easily accessible

Make category filters horizontally scrollable

Use a responsive food-card grid

Functionality

Implement real frontend interactions for:

Search

Category filtering

Add to cart

Remove from cart

Increase/decrease quantity

Dynamic cart count

Dynamic pricing

Toast notifications

Checkout flow

Order confirmation

Use reusable components and clean, maintainable code. Use realistic sample restaurants and food items rather than placeholder text.

The final result should feel like a polished, production-quality food delivery platform similar to a modern Swiggy/Zomato-style experience, but with its own unique visual identity.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/51b23603-399e-4635-b2b8-ea2802123b33).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
