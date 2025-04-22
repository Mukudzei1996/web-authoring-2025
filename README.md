# Responsive & Accessible Product Gallery

## Description

This project is a responsive and accessible product gallery built using modern CSS techniques. It demonstrates a strong understanding of CSS3 features while adhering to best practices for web design, accessibility, and responsiveness. The gallery uses reusable color themes, responsive layouts, CSS variables, and modern enhancements such as nesting, transitions, animations, and container queries.

---

## Features

- **Responsive Layout**: Utilizes CSS Grid and Flexbox to create a product gallery layout that adapts to various screen sizes.
- **CSS Variables**: A consistent theming system using variables for colors, text, and backgrounds.
- **Accessible Design**: Semantic HTML and proper color contrast for enhanced usability.
- **Modern Enhancements**: Includes transitions, animations, and container queries for a modern user experience.

---

## Page Structure

- **Header**: Contains the site title/logo and a responsive navigation menu.
- **Nav**: Provides links to other pages within the site.
- **Main**: Hosts a product gallery with at least six products.
- **Footer**: Displays contact information and/or additional links.

---

## Product Card Details

Each product card includes:
- A product image
- Product name
- Price
- "View Details" button with hover effect

---

## Styling Highlights

### Color Palette

Defined in the `:root` selector using CSS variables:
- `--primary-color`
- `--secondary-color`
- `--accent-color`
- `--light-text`
- `--dark-text`

> All color combinations are tested for adequate contrast using the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

### Reusability

- Reusable color classes: `.card-primary`, `.card-secondary`, etc.
- Theming consistency across headers, buttons, and backgrounds using variables.

### Modern CSS Techniques

- **Nesting**: CSS rules are organized for readability and maintainability.
- **Typography**: Responsive font sizes implemented using the `clamp()` function.
- **Borders & Shadows**: Use of `border-radius` and `box-shadow` for visual enhancement.
- **Container Queries**: Components adapt based on container size.
- **Transitions**: Smooth hover effects on interactive elements.
- **Animations**: At least one element (not a button or image) animated using `@keyframes`.

---

## Accessibility Features

- Semantic HTML elements (e.g., `<main>`, `<nav>`, `<footer>`, `<section>`)
- Appropriate ARIA roles (where necessary)
- Text and background colors tested for sufficient contrast

---

## Color Palette Reference

A dedicated reference page is included to display each color in the palette along with its intended usage (e.g., primary buttons, headers, backgrounds, etc.).

---

## Getting Started

To view the project:
1. Clone the repository or download the files.
2. Open `index.html` in a web browser.
3. Explore the responsive layout and interactive features.

---

## Author

Mukudzei Chisenwa

---