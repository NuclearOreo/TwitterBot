FROM mongo
WORKDIR /usr/app
COPY Quotes.json .
CMD mongoimport --db bot --collection quotes --file Quotes.json --jsonArray