
//載入express框架(express框架包含http)
const express = require('express')

//讓下方的程式碼方便取用express框架提供的所有方法method
const app = express()

//定義和伺服器有關的變數_port number
//hostname的預設就是localhost，所以不用定義
const port = 3000

//載入express-handlebars框架(模板引勤的一種)
const exphbs = require('express-handlebars')

//設定模板引勤handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//設定靜態網站資料夾
app.use(express.static('public'))

//傳送response (要顯示在瀏覽器的內容)
//1.設定route & 回傳內容
app.get('/', (req, res) => {
  //加入物件render動態資料
  const movieOne = [
    {
    id: 1,
    title: 'Jurassic World: Fallen Kingdom',
    image: 'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg'
    },
    {
      id: 2,
      title: 'THIS IS MOVIE TITLE',
      image: 'https://movie-list.alphacamp.io/posters/rv1AWImgx386ULjcf62VYaW8zSt.jpg'
    }, 
    {
      id: 3,
      title: "Thor: Ragnarok",
      image: "https://movie-list.alphacamp.io/posters/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
    },
    {
      id: 4,
      title: "Avengers: Infinity War",
      image: "https://movie-list.alphacamp.io/posters/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
    },
    {
      id: 5,
      title: "Mission: Impossible - Fallout",
      image: "https://movie-list.alphacamp.io/posters/80PWnSTkygi3QWWmJ3hrAwqvLnO.jpg"
    },
    {
      id: 6,
      title: "Incredibles 2",
      image: "https://movie-list.alphacamp.io/posters/x1txcDXkcM65gl7w20PwYSxAYah.jpg"
    },
    {
      id: 7,
      title: "Fifty Shades Freed",
      image: "https://movie-list.alphacamp.io/posters/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg"
    },
    {
      id: 8,
      title: "The First Purge",
      image: "https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg"
    }
  ]
  res.render('index', {movie: movieOne})
})

//啟動&監聽server
app.listen (port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})