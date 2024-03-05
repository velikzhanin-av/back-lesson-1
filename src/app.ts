import express from 'express'
import {createDB} from "./db";

export const app = express()
app.use(express.json())

export const db = createDB()
