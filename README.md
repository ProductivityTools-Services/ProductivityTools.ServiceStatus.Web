sudo docker build -t serverstatus .
docker images
sudo docker run -d -p 3000:80 react-application



gcloud builds submit -t us-central1-docker.pkg.dev/ptservicestatus/ptservicestatusdockerrepository/ptservicestatus ./


