![gDI Logo](https://raw.githubusercontent.com/dht/gdi/main/clients/gdi-admin/public/Logo.webp)

An open-source & extendable content management system (CMS) written in ReactJS, hosted on Firebase //

- [Installation](#installation)
- [Admin UI](#admin-ui)
- [Site](#site)
- [Deploying](#deploying)
  - [First run](#first-run)
  - [Troubleshooting](#troubleshooting)
    - [Blaze plan](#blaze-plan)
- [Cloud Functions](#cloud-functions)

## Installation

1. Install the CLI:

    ```sh
    npm install -g @gdi/cli
    ```

    and rebuild the CLI's commands index:

    ```sh
    gdi rebuild
    ```

2. Create a new project:
    ```sh
    gdi create site [project-name]
    ```
    > Note: this will clone the template and install dependencies and may take a few moments
3. Create an `.env` file in both `gdi-admin` and `gdi-site` folder with the following format:

    ```env
    VITE_FIREBASE_API_KEY=******
    VITE_FIREBASE_AUTH_DOMAIN=******
    VITE_FIREBASE_DATABASE_URL=******
    VITE_FIREBASE_PROJECT_ID=******
    VITE_FIREBASE_STORAGE_BUCKET=******
    VITE_FIREBASE_MESSAGING_SENDER_ID=******
    VITE_FIREBASE_APP_ID=******
    VITE_FIREBASE_MEASUREMENT_ID=******
    ```

    > Note: this information is available once you create a new web app in your [Firebase console](https://console.firebase.google.com/). Settings => Project settings => Add app

4. In your [Firebase console](https://console.firebase.google.com/) enable Firestore Database by pressing "Get started". Choose `Test mode` so you can seed your database.
5. Connect your Firebase project to the directory:

    - See the list of available projects:

        Inside `gdi-admin` run:

        ```sh
        firebase projects:list
        ```

        > Expected result: A table will appear with the relevant project IDs

    - Connect the project to the directory:
        ```sh
        firebase use [projectId]
        ```

6. Seed your Firestore database:

    ```sh
    gdi seed
    ```

7. Enable `authentication` and setup `Google-Signin` authentication in [Firebase console](https://console.firebase.google.com/).
8. Run the `Admin UI`:

    Inside `gdi-admin` run:

    ```sh
    npm run dev
    ```

    Navigate to [http://localhost:3000](http://localhost:3000).

9. Login with your `Google Account`
10. Set your account as admin.

    Inside `gdi-admin` run:

    ```sh
    gdi seedAdmin
    ```

    > Expected result: you should be able to choose your account's email from a list

## Admin UI

**Dev Mode**

To run your `Admin UI` in dev mode:

Within the `gdi-admin` folder run:

```sh
npm run dev
```

**Building**

> Note: deploying from `root` runs the build process. You can build manually if you want to test the output of the build or perhaps investigate build issues

To build your `Admin UI`:

Within the `gdi-admin` folder run:

```sh
npm run build
```

## Site

**Dev Mode**

To run your `site` in dev mode:

Within the `gdi-site` folder run:

```sh
npm run dev
```

**Building**

To build your `site`:

Within the `gdi-site` folder run:

```sh
npm run build
```

## Deploying

To deploy your admin console and site:
In the `root` of the project run:

```sh
npm run deploy
```

The admin console will be served from:

[https://firebasedomain.com/admin](https://firebasedomain.com/admin)

The site will be served from:

[https://firebasedomain.com](https://firebasedomain.com)

### First run

For the first run you'd need to deploy the `Cloud functions` by running in the `root`:

```sh
npm run deploy:functions
```

### Troubleshooting

#### Blaze plan

If you receive the following message:

```md
Error: Your project [ProjectId] must be on the Blaze (pay-as-you-go) plan > to complete this command. Required API cloudbuild.googleapis.com can't be > enabled until the upgrade is complete. To upgrade, visit the following URL:
https://console.firebase.google.com/project/[ProjectId]/usage/details
```

Your can either upgrade your plan or delete the project's `Cloud functions`. This will have effects on the `image gallery`, particularly on the `image upload` feature.

-   To `enable` image upload => upgrade to the `Blaze plan`.
-   To `disable` image upload => delete the `/gdi-admin/functions` folder.

Read more [below](#cloud-functions).

## Cloud Functions

The `image upload` feature requires [Cloud functions](https://firebase.google.com/docs/functions). They:

-   Generate thumbnails
-   Transform uploaded images to the `webp` format.

`Cloud functions` requires an active billing account which means upgrading your Firebase plan to [Blaze](https://firebase.google.com/pricing). If you wish to stay with the `free plan` you can simply delete the `/gdi-admin/functions` folder in this repo. This will disable image uploading.
