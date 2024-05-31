# How to run the application locally

## Setting Up the Project

### 1. Clone the Repository:

bash

`git clone <repository_url>`

### 2. Navigate to the project directory:

bash

`cd <file name>`

### 3. Install dependencies:

bash

`npm install`

### 4. Set up environment variables:

- Create a .env file in the root directory.
- Define the following environment variables:

```
PORT=5000
DATABASE_URL=your_mongodb_connection_link
```

### 5. Build the TypeScript files:

bash

`npm run build`

### 6. Start the server

bash

`npm run start:prod`

### 7. The server should now be running. You can access the API endpoints at http://localhost:5000.

## API Endpoints

## Product Management:

### 1. Create a new product

- End points: `/api/products`
- Method: `POST`
- Sample Body Request:

```
{
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
    }
}

```

### 2. Retrieve a List of All Products

- End points: `/api/products`

* Method: `GET`

### 3. Retrieve a Specific Product by ID

- End points: `/api/products/:productId`

* Method: `GET`

### 4. Update Product Information

- End points: `/api/products/:productId`

* Method: `PUT`

### 5. Delete a Product

- End points: `/api/products/:productId`

* Method: `DELETE`

### 2. Search a product

- End points: `/api/products?searchTerm=iphone`

* Method: `GET`
