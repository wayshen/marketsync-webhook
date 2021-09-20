import * as express from 'express'
import fs from 'fs'

export const register = (app: express.Application) => {
  app.post('/order/complete', (req: any, res) => {})
  app.post('/stock/update', (req: any, res) => {})
  app.get('/stock/decrease', (req: any, res) => {})
}
