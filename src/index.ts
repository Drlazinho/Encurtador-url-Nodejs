import express, { Request, Response} from 'express'


const api = express()
api.listen(3000, () => console.log('Executando'))