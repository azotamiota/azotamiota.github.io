MSYS_NO_PATHCONV=1 \
docker run -it \
-p 3000:3000 \
--name my-portfolio \
-w /code \
--mount type="bind",source=/$(pwd),target=//code \
node:slim \
