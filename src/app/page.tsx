import { Button } from "@/components/ui/button";
import { SignInButton, useSession, SignOutButton, SignedIn, SignedOut} from "@clerk/nextjs";

export default function Home() {
  // const session = useSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <SignOutButton>
          <Button> Sign Out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal"> 
          <Button> Sign In</Button>
        </SignInButton>
      </SignedOut>
    </main>
  );
}
