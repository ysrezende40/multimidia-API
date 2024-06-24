import 'dotenv/config'

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    port: Number(process.env.DB_PORT),
    dialect: 'mssql',
    options: {
      encrypt: false,
      trustServerCertificate: true,
      trustedConnection: true,
    }
}

export default dbConfig;