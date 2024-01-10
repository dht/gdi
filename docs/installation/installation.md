# Installation Guide for GDI

Follow these steps to get GDI up and running locally.

## Cloning the Repository

Begin by cloning the GDI repository and navigate into the directory:

```bash
git clone git@github.com:dht/gdi.git
cd gdi
```

## Install Dependencies:

Install the necessary dependencies using npm:

```
npm i
```

## Initializing firebase

Set up Firebase for the project:

```
firebase init
```

## Configuration Environment Variables

You will need a new Firebase project at this stage. Create .env files and populate them with your Firebase project values.

### Main Environment File

Create a `.env` file with the following structure:

```
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_ID=your_firebase_app_id
VITE_MEASUREMENT_ID=your_firebase_measurement_id
VITE_BOARDS_ROOT_URL=https://raw.githubusercontent.com/dht/gdi-assets/main/boards
VITE_ASSETS_ROOT_URL=https://raw.githubusercontent.com/dht/gdi-assets/main
VITE_DOCS_ROOT_URL=https://raw.githubusercontent.com/dht/gdi/main/docs
VITE_ENABLE_ANALYTICS=false
```

### Development Environment

Create a `.env.development` file:

```
VITE_USE_EMULATOR=true
VITE_ENABLE_ANALYTICS=false
VITE_DOCS_ROOT_URL=http://localhost:3001
```

## Running the Project

Finally, start the project locally:

```
npm start
```

This will launch GDI on your local development server.
