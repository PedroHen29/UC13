import express from 'express'
// Importando as rotas do userRoutes
import xablau from './routes/userRoutes'
import rotas from './routes/produtoRoutes'

const app = express()
const PORT = 3000
// Middleware que indica que nossa API lida com JSON
app.use(express.json())

app.use(xablau)
app.use(rotas)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

