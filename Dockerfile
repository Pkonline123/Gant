FROM node:16.16-alpine
WORKDIR /app
COPY . .
RUN  npm i
RUN  chmod +x node_modules/.bin/react-scripts
RUN  npm run build
CMD ["npm", "start"]