"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

export default function AuthButton() {
  const { data: session } = useSession();

  if (!session) return <Button onClick={() => signIn()}>Sign In</Button>;

  return (
    <Button variant="outline" onClick={() => signOut()}>
      Sign Out
    </Button>
  );
}
