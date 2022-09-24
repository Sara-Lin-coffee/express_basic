
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
  const movieOne = {
    id: 1,
    title: 'Jurassic World: Fallen Kingdom',
    image: 'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
  }
  res.render('index', {movie: movieOne})
})

//啟動&監聽server
app.listen (port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})