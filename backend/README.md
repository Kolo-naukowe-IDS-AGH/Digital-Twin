## Digital-Twin backend

<img src="https://img.shields.io/github/languages/top/Kolo-naukowe-IDS-AGH/Digital-Twin?color=green"></img>
<img src="https://img.shields.io/github/last-commit/Kolo-naukowe-IDS-AGH/Digital-Twin"></img>

Digital-Twin backend RESTfull API developed with Django Framework.


### Setting up (locally)

To run the application locally, see the instructions [here](https://github.com/Kolo-naukowe-IDS-AGH/Digital-Twin/blob/master/backend/docs/SETUP_LOCAL_ENV.md).


### Development & testing

Run tests:
```shell
pipenv run python manage.py test
```

Run local server:

```shell
pipenv run python manage.py runserver
```
By default, the server starts on port `8000`, you can change it with the command:

```shell
pipenv run python manage.py runserver 0.0.0.0:<custom_port>
```

Switching branches:
```shell
git merge master
pipenv sync
pipenv run python manage.py migrate
```

Branch names:

```shell
BE / <your initials>_<branch description>

e.x.
BE / kw_backend_setup
(kw - Kamil Woźniak)
```

### Setting up a production server
Work in progress
