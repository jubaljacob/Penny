import { Hono } from 'hono'

import { handle } from 'hono/vercel'
import accounts from './account';

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.route("/accounts",accounts)


export const GET = handle(app)
export const POST = handle(app)