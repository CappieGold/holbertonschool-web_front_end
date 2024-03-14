# Advanced CSS

## Learning Objectives

At the end of this project, you are expected to be able to `explain to anyone`, without the help of Google:
- Selectors, properties, and values
- The difference between block and inline styling
- How to ensure consistency across all browers (CSS reset)
- How to setup CSS variables
- The differences between inline, embeded and external CSS
- How grid systems work (with floats)
- The difference between icons webfonts and SVG icons
- The difference between pseudo-classes and pseudo-elements
- How to make background gradients
- How to animate elements in CSS
- How to transform (2d, 3d) elements
- What vendor prefixes are

### Selectors, Properties, and Values
- In CSS, selectors are used to target HTML elements you want to style. Properties are the aspects of the elements you want to change (like `color`, `margin`, `padding`), and values are the settings you apply to those properties (like `red`, `20px`).

### Block vs. Inline Styling
- Block elements (like `<div>` and `<p>`) occupy the full width available and start on a new line, whereas inline elements (like `<span>` and `<a>`) do not break the flow of content and only take up as much width as necessary.

### Consistency Across Browsers (CSS Reset)
- A CSS reset removes the built-in browser styling to provide a consistent baseline across different browsers. This involves setting margins, paddings, font sizes of HTML elements to 0 or another specific value.

### Setting up CSS Variables
- CSS variables, also known as custom properties, are declared by prefixing the property name with two dashes (e.g., `--main-color: blue;`) and can be accessed using the `var()` function (e.g., `color: var(--main-color);`).

### Inline, Embedded, and External CSS
- Inline CSS is written directly within an HTML element's `style` attribute.
- Embedded CSS is written within a `<style>` block in the HTML document.
- External CSS is written in separate `.css` files and linked to the HTML document using a `<link>` tag.

### Grid Systems with Floats
- Before Flexbox and Grid, layouts were often built using `float`. Elements are floated to the left or right, with other elements wrapping around them. Grid systems based on floats use a series of containers, rows, and columns to structure and align content.

### Icons: Webfonts vs. SVG Icons
- Webfont icons are font files that contain symbols and glyphs instead of letters. They scale well and can be styled with CSS.
- SVG icons are vector graphics that scale well at any resolution and can be styled and scripted with CSS and JavaScript.

### Pseudo-classes vs. Pseudo-elements
- Pseudo-classes (like `:hover`, `:focus`) define the state of an element.
- Pseudo-elements (like `::before`, `::after`) allow you to style certain parts of an element or insert content.

### Background Gradients
- You can create gradients using the `background-image` property, specifying a gradient type (linear or radial), direction, and color stops (e.g., `background-image: linear-gradient(to right, red, yellow);`).

### Animating Elements in CSS
- You can use the `@keyframes` rule to define animations and the `animation` properties to apply it to elements. You specify the name of the animation, duration, timing function, and fill mode.

### Transform (2D, 3D) Elements
- The `transform` property applies 2D or 3D transformations to an element. Common functions include `translate()`, `rotate()`, `scale()`, and `skew()` for 2D transformations, and `translate3d()`, `rotate3d()`, etc., for 3D transformations.

### Vendor Prefixes
- These are prefixes added to CSS properties to ensure compatibility with different browsers (e.g., `-webkit-` for Chrome and Safari, `-moz-` for Firefox). They are used for features that are experimental or don't have standardized support yet.

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `VSCode`, `Atom`
- All your files will be interpreted on Chrome (version 78.x)
- All your files should end with a new line
- All your files should start by a comment describing the task
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should be W3C compliant and validate with `W3C-Validator`

## End goal of the project
