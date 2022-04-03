# Sobre
Api intermedia básica usando Express y Typescript.
La api hace llamados a los productos de Mercado Libre según la busqueda y los detalles del producto.

# Uso

Clonar el repo: `git clone https://github.com/Marcos-Iorio/api-intermedia.git`
Instalar paquetes  `npm install`

Para iniciar el programa `npm run dev`

Se abrirá en `http://localhost:5000`

# Llamadas

**Items**

| Method | Endpoint                    | Información        |
|--------|-----------------------------|--------------------|
| GET    | /api/items?search=:busqueda | Lista de productos |

Consulta a `https://api.mercadolibre.com/sites/MLA/search?q=${id}`

- Resultado
```
{
    “author”: {
        “name”: String
        “lastname”: String
    },
    categories: [String, String, String, ...],
    “item”: {
        "id": String,
        "title": String,
        "price": {
            "currency": String,
            "amount": Number,
            "decimals": Number,
        },
        “picture”: String,
        "condition": String,
        "free_shipping": Boolean,
        "sold_quantity", Number
        "description": String
    }
}
```

**Item**

| Method | Endpoint                    | Información        |
|--------|-----------------------------|--------------------|
| GET    | /api/item/:id | Detalle del producto |

Consulta a `https://api.mercadolibre.com/items/${id}`

- Resultado

```
{
    “author”: {
        “name”: String
        “lastname”: String
    },
    categories: [String, String, String, ...],
    “item”: {
        "id": String,
        "title": String,
        "price": {
            "currency": String,
            "amount": Number,
            "decimals": Number,
        },
        “picture”: String,
        "condition": String,
        "free_shipping": Boolean,
        "sold_quantity", Number
        "description": String
    }
}
```
