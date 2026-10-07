import { env } from "@saas-kit/env/server";
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(env.DATABASE_URL, {});
