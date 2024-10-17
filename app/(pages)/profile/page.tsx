import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const Server = async () => {
  // verifico che l'utente sia autenticato
  const session = await auth();
  if (!session?.user) {
    redirect("/"); // se non è autenticato lo reindirizzo alla home
  }
  return (
    <main className="flex h-full items-center justify-center flex-col gap-2">
      <h1 className="text-3xl">Profile page</h1>
      <p>NAME: {session?.user?.name}</p>
      <p className="text-lg">Email: {session?.user?.email}</p>
    </main>
  );
};

export default Server;