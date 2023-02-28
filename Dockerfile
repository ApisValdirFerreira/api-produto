FROM node:16.14.2
WORKDIR /app
COPY  package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node","app.js"]

# docker build -t api-produto .
# docker container run -d -p 8080:8080 api-produto

# docker build -t rafysanchez/api-produto:v1 .

