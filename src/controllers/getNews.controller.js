import GetNews from "../models/GetNews.js"

class ControllerNews {
    static noticias = GetNews.getNewsAPI().then(res => res)
    
    static async renderizaNews() {
        const noticias = await GetNews.getNewsAPI()
        const ulNoticias = document.querySelector(".ulNews")       

        noticias.forEach(function(noticia) {
            const liNoticia = document.createElement("li")
            liNoticia.className = "noticia"

            const categoria = document.createElement("div")
            categoria.className = "categoria"
            
            const titulo = document.createElement("div")
            titulo.className = "titulo"
            
            const resumo = document.createElement("div")
            resumo.className = "resumo"

            const fonte = document.createElement("div")
            fonte.className = "fonte"
            
            
            const img = document.createElement("img")
            img.className = "img"
                        
            const figure = document.createElement("figure")
            figure.appendChild(img)

            const div = document.createElement("div")
            div.className = "infos"
            
            categoria.innerText = noticia.categoria
            titulo.innerText    = noticia.titulo
            resumo.innerText    = noticia.resumo
            img.src             = noticia.imagem
            fonte.innerText     = noticia.fonte
            
            div.append(categoria, titulo, resumo, fonte)
            liNoticia.append(figure, div)
            ulNoticias.appendChild(liNoticia)
        })
    }

    static async renderizaNewsPrincipal() {
        const response = await await GetNews.getNewsAPI()
        const noticia = response[0]
        const newsPrincipal = document.querySelector(".container")
        const imgPrincipal = document.querySelector(".container .infos")

        const liNoticia = document.createElement("li")
            liNoticia.className = "noticia"

            const categoria = document.createElement("div")
            categoria.className = "categoria"
            
            const titulo = document.createElement("div")
            titulo.className = "titulo"
            
            const resumo = document.createElement("div")
            resumo.className = "resumo"

            const fonte = document.createElement("div")
            fonte.className = "fonte"
            
            
            const img = document.createElement("img")
            img.className = "img"
                        
            const figure = document.createElement("figure")
            figure.appendChild(img)

            const div = document.createElement("div")
            div.className = "infos"
            
            categoria.innerText = noticia.categoria
            titulo.innerText    = noticia.titulo
            resumo.innerText    = noticia.resumo
            img.src             = noticia.imagem
            fonte.innerText     = noticia.fonte
            
            div.append(categoria, titulo, resumo, fonte)
            newsPrincipal.append(div, figure)

            setInterval(() => {
                if(window.innerWidth <= 602) {
                    return newsPrincipal.style.backgroundImage = `url(${noticia.imagem})`
                }
                else {
                    return newsPrincipal.style.backgroundImage = "none"
                }
            },100)
            

    }
}



export default ControllerNews