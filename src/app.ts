import express from 'express'
import academicRouter from './routes/academic.routes'
import router from './routes/show.routes'

const app = express()


app.use(express.json())
app.use('/api', router)
app.use('/api', academicRouter)

export default app
