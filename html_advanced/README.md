# Advanced HTML

## Learning Objectives

At the end of this project, you are expected to be able to `explain to anyone`, without the help of Google:
- Which guidelines to follow for HTML
- How to create the skeleton of an HTML5 page
- How to use semantic HTML tags to structure a web page
- Which use cases to use `div` vs `span`
- The semantic value’s of `header`, `main`, `footer`, `article`, `nav`, `section`, `aside`
- How to use headings (and why it’s important to follow the hierarchical order)
- How to make lists in HTML
- The differences between medias (SVG, GIF, PNG, JPG)
- How to structure data in a table
- How to integrate a video in a webpage
- How to integrate an audio file in a webpage
- How to embed external content
- How to correctly structure an HTML page

### Guidelines for HTML
- Always use a DOCTYPE declaration.
- Use semantic HTML where possible.
- Ensure accessibility by using alt attributes for images, labels for form controls, etc.
- Validate your HTML using a service like W3C's validator.
- Keep your code clean and well-commented.

### Skeleton of an HTML5 Page
```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

### Using Semantic HTML Tags
- Use `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>` to define the structure of your page.
- These tags help in making the content more accessible and understandable both for users and search engines.

### Div vs. Span
- Use `<div>` for block-level elements (it takes the full available width).
- Use `<span>` for inline elements (it takes only as much width as necessary).

### Semantic Value of Specific Tags
- `<header>`: Represents a group of introductory or navigational aids.
- `<main>`: Specifies the main content of a document.
- `<footer>`: Represents a footer for its nearest ancestor sectioning content or sectioning root.
- `<article>`: Represents a self-contained composition in a document.
- `<nav>`: Represents a section of a page that links to other pages or parts within the page.
- `<section>`: Represents a standalone section of functionality or content.
- `<aside>`: Represents a portion of a document whose content is only indirectly related to the document's main content.

### Using Headings
- Use headings (`<h1>` to `<h6>`) to structure your content hierarchically.
- `<h1>` should be used for the main title of the page, followed by `<h2>` for subheadings, and so on.
- This hierarchy helps users and search engines understand the importance and organization of your content.

### Making Lists in HTML
- Use <ul> for unordered lists, <ol> for ordered lists, and <li> for list items.

### Differences Between Media Types
- `SVG`: Scalable Vector Graphics, great for logos and icons.
- `GIF`: Good for small animations.
- `PNG`: Supports transparency, good for web graphics.
- `JPG`: Best for photographs.

### Structuring Data in a Table
- Use `<table>`, `<tr>` (table row), `<th>` (table header), and `<td>` (table data) tags.
- Use `<thead>`, `<tbody>`, and `<tfoot>` to structure your table's content.

### Integrating a Video
- Use the `<video>` tag, with src pointing to your video file. Include controls attribute to allow user interaction.

### Integrating an Audio File
- Use the `<audio>` tag similarly to the `<video>` tag, setting `src` to your audio file's location.

### Embedding External Content
- Use the `<iframe>` tag to embed content from another source into your webpage.

### Correctly Structuring an HTML Page
- Follow the logical order: `<header>`, `<nav>`, `<main>` (with sections and articles as needed), `<aside>`, and `<footer>`.
- Ensure that your content flows logically and is accessible, using semantic tags to enhance the structure and meaning of your content.

## Requirements
- A `README.md` file at the root of the folder of the project is mandatory
- Your code should be W3C compliant and validate with `W3C-Validator`
- `Techium` will be the name of the company we will use across our webpages.

## Sitemap of the project
