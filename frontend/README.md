## Digital-Twin frontend

<img src="https://img.shields.io/github/languages/top/Kolo-naukowe-IDS-AGH/Digital-Twin?color=green"></img>
<img src="https://img.shields.io/github/last-commit/Kolo-naukowe-IDS-AGH/Digital-Twin"></img>

Digital-Twin frontend React UI with Typescript.


### Development and Build setup (locally)

* development

```
cd frontend
cp .env.example .env
npm install
npm run dev
```

* build:

```
cd frontend
npm ci
npm run test-all
npm run build
npm run start
```

### Linting

To keep the code consistent, use the built-in prettier and eslint.

```
Jetbrains IDE > Settings / Preferences > Plugins > Prettier
Visual Studio Code > Plugins > Prettier
```

Automatic code formatting

```
npm run format
```

Prettier, eslint and typescript code check

```
npm run test-all
```

Switching branches:
```shell
git merge master
cd frontend
npm ci
git checkout -b FE/<your initials>_<branch description>
```

Branch names:

```shell
BE / <your initials>_<branch description>

e.x.
BE / kw_backend_setup
(kw - Kamil Woźniak)
```

Commit names:
```shell
git commit -m "FE - <your commit message>"

e.x.
git commit -m "FE - update readme"
```

### Setting up a production server
Work in progress