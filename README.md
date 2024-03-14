> [!CAUTION]  
> Any changes made to `main` will get built and deployed into production automatically. This includes changes made on Github.com, using their "Edit" feature.

> [!NOTE]  
> While in a `development` env, the contact form submits to a special test form on [usebasin.com](https://usebasin.com/app/forms/35660/form_settings/edit). That form only redirects successful submissions to [port 3000](http://localhost:3000/).

### Setup

`npm install`

### Development

`npm run dev`

### Deploy

Any changes merged to `main` will automatically get built with Github Actions and deployed to Github Pages at [modelcode.ai](https://modelcode.ai). Preview and review changes locally with `npm run dev` before merging into `main`.
