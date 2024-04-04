import Link from 'next/link'

export function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-20 bg-gray-100 flex items-center">
      <div className="container mx-auto flex justify-between items-center dark:text-background">
        <div>FileDrive</div>

        <Link className="text-blue-500 hover:text-blue-700" href="/privacy">
          Privacy Policy
        </Link>
        <Link
          className="text-blue-500 hover:text-blue-700"
          href="/terms-of-service"
        >
          Terms of Service
        </Link>
        <Link className="text-blue-500 hover:text-blue-700" href="/about">
          About
        </Link>
      </div>
    </div>
  )
}
