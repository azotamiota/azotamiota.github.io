MSYS_NO_PATHCONV=1 \
docker run -it \
-e PORT=3000    \
-p 5000:3000 \
--name portfolio-page \
-w /portfolio \
--mount type="bind",source=/$(pwd),target=//portfolio \
node:slim \
# sh -c "npm init -y && npm run start" 
