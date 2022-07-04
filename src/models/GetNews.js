class GetNews {

    static getNewsAPI() {
        const response = fetch("https://kenzie-news-api.herokuapp.com/api/news", {"Content-Type": "application/json"})
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.error(err))

        return response
    }
}

export default GetNews