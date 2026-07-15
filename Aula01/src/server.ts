import express, { Application, Request, Response } from 'express'; 

const app: Application = express(); 
const PORT: number = 3000; 

// Middleware para permitir que o Express interprete JSON
app.use(express.json()); 

// Rota GET corrigida para a raiz (com a barra "/")
app.get('/', (req: Request, res: Response): void => { 
    res.send('🚀 Servidor TypeScript rodando!'); 
}); 

app.get('/meunome', (req: Request, res: Response): void => { 
    res.send('Pedro'); 
}); 

// Iniciando o servidor
app.listen(PORT, (): void => { 
    console.log(`🔥 Servidor rodando em http://localhost:${PORT}`); 
});