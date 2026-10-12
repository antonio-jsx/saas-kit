import { resolve } from "node:path";
import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

const envPath = process.env.DATABASE_URL
  ? undefined
  : resolve(process.cwd(), "../../apps/web/.env");

dotenv.config({ path: envPath });

export default defineConfig({
  schema: "./src/schema/*",
  out: "./src/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
  verbose: true,
  strict: true,
});
