function changeMode(size, weight, transform, background, color) {
    // This function returns a closure that, when executed,
    // changes the page's style according to the provided parameters.
    return function() {
      document.body.style.fontSize = size + "px";
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }
  
  function main() {
    // Create closures for different themes
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  
    // Add a paragraph with the text "Welcome Holberton!"
    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);
  
    // Create and add the "Spooky" button
    const buttonSpooky = document.createElement("button");
    buttonSpooky.textContent = "Spooky";
    buttonSpooky.addEventListener("click", spooky);
    document.body.appendChild(buttonSpooky);
  
    // Create and add the "Dark mode" button
    const buttonDark = document.createElement("button");
    buttonDark.textContent = "Dark mode";
    buttonDark.addEventListener("click", darkMode);
    document.body.appendChild(buttonDark);
  
    // Create and add the "Scream mode" button
    const buttonScream = document.createElement("button");
    buttonScream.textContent = "Scream mode";
    buttonScream.addEventListener("click", screamMode);
    document.body.appendChild(buttonScream);
  }
  
  // Call main to add elements to the page and set up the event handlers
  main();
  