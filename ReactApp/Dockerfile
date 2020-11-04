FROM node:alpine

WORKDIR /app

# adding .bin to $PATH of container
ENV PATH /app/node_modules/.bin:$PATH

COPY . ./
RUN npm install
RUN yarn install


# start app
CMD ["yarn", "start"]