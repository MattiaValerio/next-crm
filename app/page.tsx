import { LoginButton, LogoutButton, ProfileButton } from "./components/forms/AuthButtons";

export default function Home() {
  return (
    <>
      <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className={"flex gap-2 "}>
        <LoginButton />
        <LogoutButton />
        <ProfileButton />
      </div>
    </main>
    </>      
  );
} 
