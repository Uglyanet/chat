# Stage 1 - the build process
FROM node:12-alpine as build
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --only=prod
COPY . .
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]