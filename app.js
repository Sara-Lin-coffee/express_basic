
//載入express框架(express框架包含http)
const express = require('express')

//讓下方的程式碼方便取用express框架提供的所有方法method
const app = express()

//定義和伺服器有關的變數_port number
//hostname的預設就是localhost，所以不用定義
const port = 3000

//載入express-handlebars框架(模板引勤的一種)
const exphbs = require('express-handlebars')

//載入movieListDataVase
const movieListDataBase = require('./movieListDataBase.json')

//設定模板引勤handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//設定靜態網站資料夾
app.use(express.static('public'))

//傳送response (要顯示在瀏覽器的內容)
//1.設定route & 回傳內容
app.get('/', (req, res) => {
  res.render('index', {movie: movieListDataBase.results})
})

app.get('/search', (req, res) => {
  const movies = movieListDataBase.results.filter((movie) =>{
    return movie.title.toLowerCase().includes(req.query.keyword.toLowerCase())
  })
  res.render('index', { movie: movies, keyword: req.query.keyword })
}) 

app.get('/movies/:movie_id', (req, res)=>{
  const movie = movieListDataBase.results.filter(movie => movie.id === Number(req.params.movie_id))
  res.render('show', {movie: movie[0]})
})



//啟動&監聽server
app.listen (port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})