import express, { Application, Request, Response, response } from 'express'; 
import { NetworkResources } from 'node:inspector/promises';

const app: Application = express(); 
const PORT: number = 3000; 

// Middleware para permitir que o Express interprete JSON
app.use(express.json()); 

// Rota GET corrigida para a raiz (com a barra "/")
app.get('/', (req: Request, res: Response): void => { 
    res.send('Servidor TypeScript rodando!'); 
}); 

app.get('/meunome', (req: Request, res: Response): void => { 
    res.send('Pedro'); 
}); 

app.get('/saudacao', (req: Request, res : Response): Response => {
    return res.send('Olá, jovem programador!')
})

const hora = (req: Request, res : Response): void => {
    const data = new Date().toISOString
    return console.log(`Aplicação feita em: ${data}`)
}
console.log(hora)

app.get('/sobre',(req: Request, res : Response): Response => {
return res.send(`Nome: Pedro Henrique
                 Idade: 16 anos
                 Descrição: Sla
`)
})

app.post('/comentarios', (req: Request, res : Response): Response => {
    const texto = ""
    if(texto.length == 0) return res.status(400).json({ mensagem: 'O texto não pode estar vazio!'});
    return res.status(201).json({mensagem: 'Texto recebido com sucesso!'})
})

app.delete('comentarios/:id', (req: Request, res : Response): Response => {
        const id = req.params.id
        if(!id) return res.status(400).json({mensagem: 'ID está vazio!'});
        return res.status(201).json({mensagem: 'Comentario deletado com sucesso!'})
})

// Iniciando o servidor
app.listen(PORT, (): void => { 
    console.log(`🔥 Servidor rodando em http://localhost:${PORT}`); 
});