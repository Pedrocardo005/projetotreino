import http from "../../http-commons"

const obter = () => {
    return http.get("/aulaapi");
}

export default {obter} 