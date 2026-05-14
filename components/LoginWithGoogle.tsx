"use client";
import { signInGoogle } from "@/lib/auth-client";
import { Button } from "./ui/button";

export function LoginWithGoogle() {
  return <Button onClick={() => signInGoogle()}>Login with Google</Button>;
}
