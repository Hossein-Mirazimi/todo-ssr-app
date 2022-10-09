FROM node:14.20.1-alpine3.15

# create destination directory
RUN mkdir -p /usr/src/todo-ssr-app
WORKDIR /usr/src/todo-ssr-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git
RUN npm i pnpm -g

# copy the app, note .dockerignore
COPY . /usr/src/todo-ssr-app/
RUN pnpm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN pnpm build

# expose 5000 on container
EXPOSE 3000

# set app port
ENV PORT=3000

# start the app
CMD [ "pnpm", "serve" ]