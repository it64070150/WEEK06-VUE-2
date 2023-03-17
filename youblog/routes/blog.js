const express = require('express')
const router = express.Router()
// ดึงข้อมูล json มาเก็บไว้ในตัวแปร

const article = require('../article-db')

// กำหนดให้ path blogapi แสดงข้อมูลบทความทั้งหมดในรูปแบบ json

router.get('/blogapi', (req, res) => {
var data = { title: 'Myblog', article: article }
  res.render('blog_list', data)
})

// กำหนดให้ path blogapi/id แสดงข้อมูลบทความตาม id ที่กำหนด

router.get('/blogapi/:id', (req, res) => {
  res.json(article.find(article => article.id === req.params.id))
})

module.exports = router