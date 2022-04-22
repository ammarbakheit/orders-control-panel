### how to run the app

### 1- API

    - onpen api folder in vscode
    - run `npm install`
    - run `npx prisma migrate dev --name init --schema=./src/prisma/schema.prisma`
    run `npm run dev`

    it will open on http://localhost:2000

### 2- admin panel

    - open client folder in vs code
    - run `npm install`
    - run `npm start`

    it will run at http://localhost:3000

### 3- postman collection

    - import the file `orders-collection.postman_collection.json` into postman
