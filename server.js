const Koa = require("koa")
const Router = require("koa-router")
const cors = require("koa-cors")
const bodyParser = require("koa-bodyparser")
const socketIO = require("socket.io")
const http = require("http")

const app = new Koa()
const router = Router()
const server = http.createServer(app.callback())
const io = socketIO(server)

router.get("/notify", ctx => {
  io.emit("notify")
  ctx.status = 200
})

app.use(cors())
app.use(bodyParser())
app.use(router.routes())

server.listen(3000, () => console.log("listening on port 3000"))
