import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from "./components/forms/AuthButtons";

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
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
    </main>
    </>      
  );
} 
