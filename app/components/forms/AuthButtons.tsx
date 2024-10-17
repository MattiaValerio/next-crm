"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button className="border px-2" onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link className="border text-center px-2" href="/register">
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button className="border px-2" onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link className="border text-center px-2" href="/profile">Profile</Link>;
};