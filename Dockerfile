FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 8085
CMD ["node","index.js"]
