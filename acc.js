document.addEventListener("DOMContentLoaded", function() {
    const rssUrl = 'https://www.nasa.gov/rss/dyn/breaking_news.rss';  // Flux RSS des actualités de la NASA
    const newsContainer = document.getElementById('nasa-news');

    // Utilisation de Fetch pour récupérer le flux RSS
    fetch(rssUrl)
        .then(response => response.text())
        .then(xmlText => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "application/xml");

            // Récupération des éléments <item> du flux RSS
            const items = xmlDoc.getElementsByTagName('item');

            // Créer une liste d'actualités
            const newsList = document.createElement('ul');

            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const title = item.getElementsByTagName('title')[0].textContent;
                const link = item.getElementsByTagName('link')[0].textContent;
                const description = item.getElementsByTagName('description')[0].textContent;

                // Créer un élément de liste pour chaque article
                const listItem = document.createElement('li');
                const titleElement = document.createElement('h2');
                const linkElement = document.createElement('a');
                linkElement.href = link;
                linkElement.target = '_blank';
                linkElement.textContent = title;
                titleElement.appendChild(linkElement);

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = description;

                listItem.appendChild(titleElement);
                listItem.appendChild(descriptionElement);
                newsList.appendChild(listItem);
            }

            // Ajouter la liste des actualités à la page
            newsContainer.appendChild(newsList);
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des actualités RSS :", error);
            newsContainer.innerHTML = "Impossible de charger les actualités de la NASA.";
        });
});
