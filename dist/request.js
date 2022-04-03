const axios = require('axios').default;
function getItems(id) {
    return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${id}`)
        .then(function (response) {
        return (response.data.results);
    })
        .catch(function (error) { console.log("Ha ocurrido un error", error); });
}
function getItem(id) {
    return axios.get(`https://api.mercadolibre.com/items/${id}`)
        .then(function (response) {
        return (response.data);
        console.log(response.data);
    })
        .catch(function (error) { console.log("Ha ocurrido un error", error); });
}
module.exports = { getItems, getItem };
//# sourceMappingURL=request.js.map