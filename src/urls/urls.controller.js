const path = require("path");
const urls = require(path.resolve("src/data/urls-data"));

//Middleware

function isValidURL(req, res, next) {
  const { data } = req.body;
  if (data) {
    res.locals.data = data;
    next();
  }
  next({
    status: 404,
    message: `URL is missing`,
  });
}

//Not Middleware

function list(res) {
  res.json({ data: urls });
}

function read(res){}

function create(res) {
  const data = res.locals.data;
  const newUrlId = urls.length + 1;
  const newUrl = {
    ...data,
    newUrlId,
  };
  
  urls.push(newUrl);
  res.status(201).json({ data: newUrl });
}

function update(res){
  
}







module.export={
    list,
    create:[isValidURL, create],
    update,
    read,

}
