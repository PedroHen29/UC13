import express, { Application, Request, Response, response } from 'express'; 
import { NetworkResources } from 'node:inspector/promises';

const app: Application = express(); 
const PORT: number = 3000; 

// Middleware para permitir que o Express interprete JSON
app.use(express.json()); 




// 🔹 GET
app.get('/usuarios', (req: Request, res: Response): Response => {
    return res.status(200).json({ mensagem: 'Lista de usuários' });
  });
  
// 🔹 POST
  app.post('/usuarios', (req: Request, res: Response): Response => {
    const { nome } = req.body;
    if (!nome) return res.status(400).json({ mensagem: 'Nome é obrigatório!' });
    return res.status(201).json({ mensagem: `Usuário ${nome} criado com sucesso!` });
  });
  
  // 🔹 PUT
  app.put('/usuarios/:id', (req: Request, res: Response): Response => {
    return res.status(200).json({ mensagem: 'Usuário atualizado completamente!' });
  });
  
  // 🔹 PATCH
  app.patch('/usuarios/:id', (req: Request, res: Response): Response => {
    return res.status(200).json({ mensagem: 'Usuário atualizado parcialmente!' });
  });
  
  // 🔹 DELETE
  app.delete('/usuarios/:id', (req: Request, res: Response): Response => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ mensagem: 'ID não enviado' });
    return res.status(204).send(); // Sem conteúdo
  });

// Iniciando o servidor
app.listen(PORT, (): void => { 
    console.log(`🔥 Servidor rodando em http://localhost:${PORT}`); 
});

//EXERCICIOS:


app.get('/meunome', (req: Request, res: Response): void => { 
    res.send('Olá, meu nome é Pedro'); 
});

app.get('/', (req: Request, res: Response): void => { 
    res.send('Servidor está funcionando perfeitamente 🚀'); 
}); 

app.get('/sobre',(req: Request, res : Response): Response => {
    return res.send(`Nome: Pedro Henrique
                     Idade: 16 anos
                     Descrição: Sla
`)
})

app.post('/comentarios', (req: Request, res : Response): Response => {
    const {comentario} = req.body
    if(!comentario) return res.status(400).json({mensagem: 'O comentario não pode estar vazio!'})
    return res.status(201).json({mensagem: 'Comentario enviado com sucesso! '})
})

app.delete('/comentarios/:id', (req: Request, res : Response): Response => {
    const {id} = req.params;
    if (!id) return res.status(400).json({ mensagem: 'ID não enviado' });
    return res.status(200).send({mensagem: "Comentario deletado com sucesso!"}); 
})
  
const hora = (req: Request, res : Response): Response => {
    const data = new Date();
    console.log(`Requisição feita em ${data}`)
    const horaAtual = data.getHours()
    if(horaAtual < 6) return res.status(400).json({mensagem: 'Horario invalido'})
    return res.status(200).send({mensagem: 'Horario valido'})
}
app.get('/hora', hora)

