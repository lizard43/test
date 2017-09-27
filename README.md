# test
heroku create
heroku buildpacks:set heroku/nodejs
git push heroku master
heroku logs
heroku logs --tail
heroku open