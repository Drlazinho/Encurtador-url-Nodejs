import { config } from '../config/Constants'
import { Request, Response } from 'express'
import shortid from "shortid";

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    //Ver se a URL já não existe.
    //Criar o hash para essa URL
    const { originURL } = req.body
    const hash = shortid.generate()
    const shortURL = `${config.API_URL}/${hash}`
    //Salvar a URL no banco
    //Retornar a URL que a gente salvou
    res.json({ originURL, hash, shortURL })
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    //Pegar hash da URL
    const { hash } = req.params
    // Encontrar a URL original pelo hash
    const url = {
      originURL: "https://cloud.mongodb.com/v2/619e76f9f64a964dbf4ab016#clusters",
      hash: '6EEhWLtK7',
      shortURL: "http://localhost:5000/6EEhWLtK7"
    }
    // Redirecionar para a URL originial a partir do que encontramos no DB
    res.redirect(url.originURL)
  }
}