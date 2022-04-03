const axios = require('axios').default;

type Product = {
    id: string;
    price: number;
    shipping: {
      free_shipping: boolean
    }
  }
  
  type QueryResult = {
    data: {
      results: Product[]
    }
  }

function getItems(id: string) {
    return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${id}`)
        .then(function(response : QueryResult) {
            return(response.data.results);
        })
        .catch(function(error: String){ console.log("Ha ocurrido un error", error) })
}

function getItem<QueryResult>(id:String){
    return axios.get(`https://api.mercadolibre.com/items/${id}`)
        .then(function(response : any) {
            return(response.data);
            console.log(response.data);
        })
        .catch(function(error: String){ console.log("Ha ocurrido un error", error) })
}

module.exports = {getItems, getItem}