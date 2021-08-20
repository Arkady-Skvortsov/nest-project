# Up the nest_container into the docker
nest-up:
	docker run -d --rm -p 4500:4500 --name nest_container --env-file .env 389798/nest-image
# Stop the nest_container into the docker
nest-stop:
	docker stop nest_container
# Up the mongo_container into the docker
mongo-up:
	docker run -d -p 27017:27017 --name mongo_container mongo
# Stop the mongo_container into the docker
mongo-stop:
	docker stop mongo_container
# Up the bundle of the containers (nest_container && mongo_container)
double-up:
	docker-compose up --build
# Stop the bundle of the container (nest_container && mongo_container)
double-stop:
	docker-compose down