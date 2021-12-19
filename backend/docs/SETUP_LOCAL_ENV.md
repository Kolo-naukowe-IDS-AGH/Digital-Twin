1. Install `pipenv` (python virtual environment manager) - `pip install pipenv`
2. Synchronize environment and install dependencies:
```shell
pipenv sync
pipenv install
```

3. Migrate changes and create data base (currently `sqlite3`):
```shell
pipenv run python manage.py migrate
```

4. Run local server:
```shell
pipenv run python manage.py runserver
```