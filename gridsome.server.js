// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
    const axios = require("axios");

    api.loadSource(async actions => {
        const { data } = await axios.get("https://icanhazdadjoke.com/search?limit=50", {
            headers: { Accept: "application/json" }
        });

        const collection = actions.addCollection("Joke");

        for (const item of data.results) {
            collection.addNode({
                id: item.id,
                joke: item.joke
            });
        }

    });

    api.createPages(({ createPage }) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    });
};