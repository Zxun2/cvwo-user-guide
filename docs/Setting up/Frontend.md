---
sidebar_position: 1
---

# Frontend

Groups and Steps is built entirely within the React ecosystem and Docker is used for development.
Some other notable frontend libraries include Material UI and React Router.

:::info
You can visit the frontend repo here: https://github.com/Zxun2/cvwo-assignment-frontend.

```bash
Username: tutorial@gmail.com
Password: foobar
```

:::

## Running Development Server on Docker

```bash
docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml up -d --build
```

## Running Frontend Production Server on Docker

```bash
docker-compose -f docker-compose.yaml -f docker-compose-prod.yaml up -d --build
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
