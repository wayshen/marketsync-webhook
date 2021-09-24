import {Request, Response, NextFunction, Application} from 'express'
import {Storage} from '@google-cloud/storage'
import dotenv from 'dotenv'

dotenv.config()

import fs from 'fs'

export const register = (app: Application) => {
  const storage = new Storage({keyFilename: 'never-never-327002-eb957f4beeaa.json'})
  const marketSyncBucket = storage.bucket('marketsync-webhook')

  app.get('/', (req: Request, res: Response) => {
    return res.json({message: 'web is working'})
  })

  app.post('/order/complete', (req: Request, res: Response) => {
    const date = Date.now()
    const file = marketSyncBucket.file(`order-complete-${date}`)
    const data = `${date} ${JSON.stringify(req.body)} \n\r`

    file.save(data, function (err) {
      if (!err) {
        // File written successfully.
        console.log(`order-complete-${date} save successfully`)
      }
    })

    return res.json({status: `order-complete-${date} log success`})
  })
  app.post('/stock/update', (req: Request, res: Response) => {
    const date = Date.now()
    const file = marketSyncBucket.file(`stock-update-${date}`)
    const data = `${date} ${JSON.stringify(req.body)} \n\r`

    file.save(data, function (err) {
      if (!err) {
        // File written successfully.
        console.log(`stock-update-${date} save successfully`)
      }
    })

    return res.json({status: `stock-update-${date} log success`})
  })
  app.get('/stock/decrease', (req: Request, res: Response) => {
    const date = Date.now()
    const file = marketSyncBucket.file(`stock-decrease-${date}`)
    const data = `${date} ${JSON.stringify(req.body)} \n\r`
    file.save(data, function (err) {
      if (!err) {
        // File written successfully.
        console.log(`stock-decrease-${date} save successfully`)
      }
    })
    return res.json({status: `stock-decrease-${date} log success`})
  })
}
