docker container stop node-app-server
docker container rm node-app-server 
docker run -d --name=node-app-server -p 8085:8085 wayd/node-app-server:v1