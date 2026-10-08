import { auth } from "@saas-kit/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const instant = false;

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/");
  return <h1>Hello</h1>;
}
