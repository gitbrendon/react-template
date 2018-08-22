# React Starter Template

## What's included

This React template expedites the app creation process by including lots of goodies that are already configured and ready to go, including:

- NPM Scripts
- Webpack
- SCSS
- Babel
- ESLint
- Basic UI Layout
- Menu (including mobile)

## Building from source

1) `npm i`

2) `npm start`

An issue I ran into during the npm install process: a module was failing because it was picking up libtool from Homebrew.
To fix, I ran `export PATH=/usr/bin:$PATH` (so it would pick up libtool from xcode), and then `npm install`.

## Places to add App Title

- package.json
- public/manifest.json
- public/index.html
