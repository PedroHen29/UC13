import express from 'express'

const app = express()
const PORT = 3000
// Middleware que indica que nossa API lida com JSON
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://loclahost:${PORT}`)
})