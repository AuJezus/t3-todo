"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignInButton() {
  const { data: session } = useSession();

  if (!session)
    return (
      <Button variant="ghost" onClick={() => signIn()}>
        Sign In
      </Button>
    );

  return (
    <Button variant="ghost" onClick={() => signOut()}>
      Sign Out
    </Button>
  );
}
