import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import Link from 'next/link';
import NewLoginBtn from './Buttons/NewLoginBtn';

export default function Navbat() {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8  justify-between z-50 bg-slate-800 text-gray-300">
      <Link href='/' className='uppercase font-bold text-md h-12 flex items-center'>
        <h1>Next Store</h1>
      </Link>

      <div className='flex items-center gap-8'>
        <SignedIn>
          {/* recupera o avatar do usuario  automaticamente */}
          <UserButton />
        </SignedIn>

        <SignedOut>
          
          <SignInButton mode='modal'>
            <NewLoginBtn />
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  )
}
