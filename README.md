# TwitterBot

Building my self a twitterbot again for fun. The goal is to create a both to spread motivation and inspiration to random people on twitter. Jump from city to city twitting at people that are currently twitting.

## Node Stuff

- Compile TSC to JS (ES5) : `npm run build`
- Run Dev enviroment: `npm run dev`
- Run Bot: `npm run start`

## Docker

Make sure to have `.env` before building the images for the service.

- Build images: `docker build -t twitterbot .`
- Run services: `docker-compose up`
