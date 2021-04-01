docker-compose -f docker-compose.yaml -f docker-compose.test.yaml up -d
docker exec -it debug_test_api bash -c "npm install && npm install @babel/core @babel/preset-env --save-dev && npm test"