import { Button } from '@/components/ui/button'
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <div className="relative z-10 border-b py-4 bg-gray-50">
      <div className="items-center container flex mx-auto justify-between">
        <Link
          href="/"
          className="flex gap-2 items-center text-xl dark:text-background"
        >
          <Image src="/logo.png" width="45" height="45" alt="file drive logo" />
          File Drive
        </Link>

        <SignedIn>
          <Button variant={'outline'} className="ml-8">
            <Link href="/dashboard/files">Your Files</Link>
          </Button>
        </SignedIn>

        <div className="flex gap-6 items-center">
          <div className="flex gap-2">
            <OrganizationSwitcher />
            <UserButton />
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
