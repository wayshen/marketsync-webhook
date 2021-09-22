import {Request, Response, NextFunction, Application} from 'express'

import fs from 'fs'

export const register = (app: Application) => {
  app.post('/order/complete', (req: Request, res: Response) => {
    const date = Date.now()
    const fileName = `./src/log/order-complete/${date}.txt`
    const data = `${date} ${JSON.stringify(req.body)} \n\r`
    fs.writeFileSync(fileName, data, 'utf-8')
    return res.json({status: 'order complete log success'})
  })
  app.post('/stock/update', (req: Request, res: Response) => {
    const date = Date.now()
    const fileName = `./src/log/stock-update/${date}.txt`
    const data = `${date} ${JSON.stringify(req.body)} \n\r`
    fs.writeFileSync(fileName, data, 'utf-8')
    return res.json({status: 'stock update log success'})
  })
  app.get('/stock/decrease', (req: Request, res: Response) => {
    const date = Date.now()
    const fileName = `./src/log/stock-decrease/${date}.txt`
    const data = `${date} ${JSON.stringify(req.body)} \n\r`
    fs.writeFileSync(fileName, data, 'utf-8')
    return res.json({status: 'stock decrease log success'})
  })
}
