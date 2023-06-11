const path = require('path');
const express = require('express');
const fs = require('fs');
let arrData = require('../models/arrTitle.js');
const articleModel = require('../models/title');
//console.log('arrData:', arrData)

const router = express.Router();

//рендеримо нашу сторінку
const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);
router.get('/veiw', (req, res) => {
  res.render(createPath('pageView'))
})



let titles;



router.post('/view', (req, res) => {


  const takeObj = async () => {
    //получаем всі объєкти з БД
    titles = await articleModel.find({});
    console.log('titles:', titles);
    res.json(titles);
  }
  takeObj();

});


module.exports = router;