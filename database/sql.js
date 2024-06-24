import sql from 'mssql'
import dbConfig from './db-config.mjs'

sql.connect(dbConfig)
export const db = sql