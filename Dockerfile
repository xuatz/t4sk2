FROM node:10

RUN mkdir -p /code
# COPY . /code
WORKDIR /code

CMD ["npm", "run", "start"]