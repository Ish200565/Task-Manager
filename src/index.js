const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'server is running' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


const prisma = require('./config/db')

app.get('/test-db', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json({ users, message: 'database connected' })
})