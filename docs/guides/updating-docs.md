# Update the Docs

The docs are located in the `docs` directory. They are written in markdown and are rendered using `react-markdown`.

## Setup Environment

Change the `.env.development` file to point to the local docs directory:

```
VITE_DOCS_ROOT_URL=http://localhost:3001
```

> Mobile: if you want to access the boards from a mobile device, you will need to update the `.env.development` file with your local IP address. For example: `VITE_DOCS_ROOT_URL=http://192.0.10.20:3001`

## Serve the Docs

Run the following command to serve the `docs` path on port `3001`:

```bash
npm run serve:docs
```

## Start the Development Server

In the `gdi` root, start the development server:

```
npm start
```

Now any change you make to the docs will be reflected in the development server.
