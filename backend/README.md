# Backend

## Purposes

This API gives access to data regarding students and their groups, teachers and courses from Centrale Lille.

## API
API is documented [here](https://ebm2018.github.io/teamy/).

## Run Locally

### Without a docker-compose

1. [Install mongodb](https://docs.mongodb.com/manual/installation/)
2. In one CLI, run mongod : 

    ```(bash)
    $ sudo mongod
    ```
3. Create the local .env variables : 
    
    ```(bash)
    # assuming the mongodb port is 27017, as set by default
    $ export MONGODB_URI=mongodb://localhost:27017/teamy
    ```
4. run the app ! 
    
    ```(bash)
    $ npm start
    ```
    
### With a local docker-compose
 
*shout out to [@Lenophie](https://github.com/Lenophie) for its tutorial :*
 
* [Install Docker CE](https://docs.docker.com/install/)
* [Install docker-compose](https://docs.docker.com/compose/install/)
* Complete the env variable in the docker-compose.local : currently the are no such variables.
* Run `sudo docker-compose -f ../docker-compose.local.yml up --build` in the `backend` folder
    * For a change to be taken into account, docker-compose must be killed and restarted.
