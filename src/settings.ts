import {config} from "dotenv"

config()
export const SETTINGS = {
    PORT: process.env.port || 3000,
    PATH: {
        HOMETASK01: '/hometask_01/api',
        VIDEOS: '/videos',
    },
}

