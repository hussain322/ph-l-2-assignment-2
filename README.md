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
MONGODB_URI=your_mongodb_connection_link
```

### 5. Build the TypeScript files:

bash

`npm run build`

### 6. Start the server

bash

`npm run start:prod`

### 7. The server should now be running. You can access the API endpoints at http://localhost:5000.
