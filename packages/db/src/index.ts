import { env } from "@saas-kit/env/server";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
  ssl: env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

pool.on("error", (error) => {
  console.error("Unexpected database pool error", error);
});

export const db = drizzle({ client: pool, schema });
export type Database = typeof db;
