const { PrismaClient } = require('@prisma/client')

// Direct PostgreSQL connection
const prisma = new PrismaClient({
  adapter: "postgresql",
})

module.exports = prisma
