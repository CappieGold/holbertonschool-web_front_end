function createElement (data) {
    const paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    // Création de l'objet XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // URL de l'API pour obtenir l'extrait de l'article "Stack Overflow"
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    
    // Initialisation d'une requête GET
    xhr.open("GET", url, true);
    
    // Définition de la fonction à exécuter lorsque la requête se termine
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        // La requête a réussi, on parse la réponse JSON
        const response = JSON.parse(xhr.responseText);
        // La structure renvoyée contient l'extrait dans query.pages, dont la clef est inconnue (numéro de page)
        const pages = response.query.pages;
        const pageId = Object.keys(pages)[0]; // Récupère la première clé (ID de la page)
        const extract = pages[pageId].extract; // Extrait le contenu correspondant
        
        // Appelle le callback en lui passant l'extrait récupéré
        callback(extract);
      } else {
        console.error("Erreur, statut de la requête : " + xhr.status);
      }
    };
  
    // Gestion d'erreur en cas de problème réseau
    xhr.onerror = function () {
      console.error("La requête a échoué.");
    };
  
    // Envoie la requête
    xhr.send();
}

queryWikipedia(createElement);
