FROM node:19-slim
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
ENV PORT=4200
RUN yarn global add -g serve
RUN yarn install
RUN yarn build
CMD ["serve", "-s", "-l", "4200", "./build"]
