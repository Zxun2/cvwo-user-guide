# Backend

The backend is written in Rails with Postgresql as the main database and hosted on heroku.
The entire backend is developed in the linux environment.

:::info
You can visit the repo here: https://cvwo-assignment-todo-api.herokuapp.com/
:::

## Running Backend Development Server on Docker

```bash
# Build image
docker-compose build
# Set up database
docker-compose run web bundle exec rails db:create
docker-compose run web bundle exec rails db:migrate
# Rebuild any modified images and run in detached mode
docker-compose up --build -d
```

### Backend Troubleshoot

```bash
Error starting userland proxy: listen tcp 0.0.0.0:5432: bind: address already in use
```

Reason: Port 5432 is already in use on local machine. This is most likely that there is another PostgreSQL server running locally.
Solution: Either stop the PostgreSQL on local machine or map to another port in docker-compose.yml, like - '5434:5432'.

```bash
Your Ruby version is 2.6.5, but your Gemfile specified 3.0.3
ERROR: Service 'web' failed to build: The command '/bin/sh -c bundle install' returned a non-zero code: 18
```

Reason: There is a Ruby version mismatch between Gemfile and Docker container.

Solution: Either update the Ruby version in Gemfile to 2.6.5, or pull explicitly Ruby 3.0.3 image in Dockerfile like FROM ruby:3.0.3-alpine.

```bash
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/json: dial unix /var/run/docker.sock: connect: permission denied
```

Solution:

```bash
# Restart docker
sudo systemctl restart docker
# Create docker group
sudo groupadd docker
# Add your user to the docker group
sudo usermod -aG docker ${USER}
# Relogin
su - ${USER}
```

### Shutting down server

```bash
# Removes running containers
docker-compose down
```

## General Docker Troubleshooting

```bash
# Removes all inactive images
docker image prune -a
# Removes all inactive containers
docker ps prune -a
# Removes all inactive networks
docker network prune -a
```

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right"><a href="#top">Back to top</a></p>
