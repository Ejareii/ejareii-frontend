#building local image
docker build -t ejareii/front .

#Pushing docker image
docker push ejareii/front

#dive
docker run -ti --rm  -v /var/run/docker.sock:/var/run/docker.sock wagoodman/dive:latest