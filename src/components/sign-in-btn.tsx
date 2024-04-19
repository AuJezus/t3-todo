"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInButton() {
  const { data: session } = useSession();
  console.log(session);

  if (!session) return <button onClick={() => signIn()}>Sign In</button>;

  return <button onClick={() => signOut()}>Sign Out</button>;
}
