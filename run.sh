# docker build -t localhost:5000/t4sk2:latest .
docker stop t4sk2-web || true
docker rm t4sk2-web || true
docker run -d -p 8123:80 --name t4sk2-web --restart always localhost:5000/t4sk2:latest
