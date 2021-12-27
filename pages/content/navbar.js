import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className='nav nav-center'>
            <Link href='/'>
                <a className='btn btn-5'>Home</a>
            </Link>
            <Link href='/content/definition'>
                <a className='btn btn-5'>The Definition</a>
            </Link>
            <Link href='/content/pantheon'>
                <a className='btn btn-5'>The Pantheon</a>
            </Link>
            <Link href='/content/player-options'>
                <a className='btn btn-5'>Player Options</a>
            </Link>
            <Link href='/content/organisations'>
                <a className='btn btn-5'>The Nations</a>
            </Link>
            <Link href='/content/ankorian-oracle'>
                <a className='btn btn-5'>The Oracle</a>
            </Link>
        </nav>
    );
}