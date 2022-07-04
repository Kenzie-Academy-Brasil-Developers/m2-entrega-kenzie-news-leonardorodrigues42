import GetNews from "./models/GetNews.js"
import ControllerNews from "./controllers/getNews.controller.js"

const teste = await GetNews.getNewsAPI()

console.log(teste)
console.log("teste")

const li = document.createElement("div")

console.log(li)

ControllerNews.renderizaNews()
ControllerNews.renderizaNewsPrincipal()