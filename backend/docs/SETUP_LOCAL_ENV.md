1. Install `pipenv` (python virtual environment manager) - `pip install pipenv`
2. Synchronize environment and install dependencies:
    ```shell
    pipenv sync
    pipenv install
    ```

3. Download and setup PostgreSQL:
    * [Installation guide](https://blog.timescale.com/blog/how-to-install-psql-on-mac-ubuntu-debian-windows/)
    
4. Create data base and users:
    * Open PostgreSQL session: `psql`
    * Create Database:
    ```postgresql
    CREATE DATABASE databaseName;
    ```
   * Create User:
    ```postgresql
    CREATE USER username WITH ENCRYPTED PASSWORD 'password';
    ```
   * Grant privileges for the user:
    ```postgresql
    GRANT ALL PRIVILEGES ON DATABASE databaseName TO username;
    ```
   
5. Setup local enviroment:
    * Copy `backend/env/_template.env` file and rename it to `local.env`
        *  `cp _template.env local.env`
    * Change in `local.env`:
        * `ENVIRONMENT_TYPE=local`
        * `SECRET_KEY=your_secret_key`
        * `DB_URL=<postgres>://<username>:<password>@localhost:5432/<databaseName>`   

6. Migrate changes and create data base (currently `sqlite3`):
    ```shell
    pipenv run python manage.py migrate
    ```

7. Run local server:
    ```shell
    pipenv run python manage.py runserver
    ``` 
   

Alternative way to create database (docker required):

- Create `.env`: 
   ```shell
   cd ..
   cp .env.example .env
   ```
  
- Fill missing fields (you can use default values from example):

   ```shell
   DATABASE_PORT=5432
   DATABASE_USER=postgres
   DATABASE_PASSWORD=postgres
   DATABASE_DB=digital_twin_db
   ```
  
- Change your `local.env` create at step 5):
   ```shell
  DB_URL=postgres://postgres:postgres@localhost:5432/digital_twin_db
   ```
  
- Run development `docker-compose`:

   ```shell
    docker-compose -f docker-compose.dev.yml up
   ```

- Check if postgres is running:

   ```shell
   docker container ls 
   ```
