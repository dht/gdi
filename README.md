<p align="center">
  <br />
  <a href="https://usegdi.com/" target="blank"><img src="https://raw.githubusercontent.com/dht/gdi/main/clients/gdi-admin/public/Logo.webp" width="160" alt="gdi Logo" /></a>
</p>
<p align="center">
  An open-source & extendable content management system (CMS) written in ReactJS, hosted on <a href="https://firebase.google.com" target="_blank">Firebase</a>
</p>
<p align="center">
  <a href="https://usegdi.com/docs/docs/getting-started/installation" target="_blank">Getting Started</a>&nbsp;//&nbsp;
  <a href="https://usegdi.com/admin/demo" target="_blank">Demo</a>&nbsp;//&nbsp;
  <a href="https://usegdi.com/docs/" target="_blank">Documentation</a>&nbsp;//&nbsp;
  <a href="https://usegdi.com" target="_blank">Homepage</a>
</p>

# Installation

> Note: make sure you have all the [prerequisites](https://usegdi.com/docs/docs/getting-started/prerequisites.md) prepared before installation

## Install the CLI

```sh
npm install -g @gdi/cli
```

and rebuild the CLI's commands index:

```sh
gdi rebuild
```

## Create a new site

> Note: Make sure you have your Firebase web configuration ready for this stage

```sh
gdi create site [site-name]
```

> Note: this clones the template and installs dependencies and may take a few moments

This will create a new folder with two main packages:

-   `gdi-admin`: holds the admin UI
-   `gdi-site`: holds the public facing site

Change your `cwd` to your newly created `root` folder:

```sh
cd [site-name]
```

## Connect Firebase

In the `root` create a `/firebase.json` file with your `firebase` configuration:

> Note: `measurementId` can be excluded. It will only appear if you enabled `Google Analytics` in the Firebase project

```json title="firebase.json"
{
    "apiKey": "******",
    "authDomain": "******",
    "projectId": "******",
    "storageBucket": "******",
    "messagingSenderId": "******",
    "appId": "******",
    "measurementId": "******"
}
```

> Note: To retrieve this information follow the [Create a new firebase project](https://usegdi.com/docs/docs/how-tos/create-a-firebase-project) guide

Once your `firebase.json` is saved you can connect `firebase` to this site.

In the project's `root`:

```sh
gdi connect
```

## Seeding initial database

> Note: Make sure you have [enables Firestore Database](https://usegdi.com/docs/docs/how-tos/create-a-firebase-project#enable-firestore-database) in `Test mode`. If you receive a `permission error` or `bad request` while running the following command, try waiting around **2 minutes** for the rules to kick in

In the project's `root` run:

```sh
gdi seed --data
```

## Bootstrapping apps

> Note: This command refreshes the `vite` and `tsconfig` configuration for the installed apps. Every time you install a new `gdi` app, run this

```sh
gdi apps
```

## Running the Admin

In the project's `root` run:

```sh
gdi start
```

Navigate to [http://localhost:3000](http://localhost:3000)

> Note: If you receive `Firebase: Error(auth/configuration-not-found)` while trying to sign in with `Google`, follow the [Enable Sign-in with Google](https://usegdi.com/docs/docs/how-tos/create-a-firebase-project#enable-sign-in-with-Google)
> section in the `Create & setup a Firebase project` how-to

## Setting the admin user

Once you log in with your `Google` account, you'' be able to choose the site's admin.

To do so, in the project's `root`, run:

```sh
gdi setAdmin
```

## Deploying

To deploy your `admin` console and the `site` run
in the project's `root`:

```sh
gdi deploy
```

After a successful deployment, the `admin` console will be served from:

[https://FIREBASE_PROJECT_DOMAIN/admin](https://FIREBASE_PROJECT_DOMAIN/admin)

The `site` will be served from:

[https://FIREBASE_PROJECT_DOMAIN](https://FIREBASE_PROJECT_DOMAIN)

> Note: `gdi` image upload feature requires `cloud functions`, which in turn requires upgrading Firebase to the `Blaze` plan. If you wish to stay on the `Spark plan` (the free plan) and not use `image upload`, please refer to [these](https://usegdi.com/docs/docs/topics/image-upload#disabling-cloud-function) instructions.

## CLI commands

| Command                     | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| gdi create site [site-name] | Creates a new gDI repo with admin + site packages               |
| gdi connect                 | Validates and links site to Firebase                            |
| gdi seed --data             | Seeds the current site with data                                |
| gdi setAdmin                | Choose an admin for the current site                            |
| gdi list projects           | Shows Firebase projects. A wrapper for `firebase projects:list` |
| gdi start                   | Starts `gdi-admin` in development mode                          |
| gdi preview                 | Starts `gdi-site` in development mode                           |
| gdi deploy                  | Builds & deploy both `gdi-admin` and `gdi-site`                 |
| gdi apps                    | Scans for new apps and sets up the `vite` and `tsconfig` files  |
