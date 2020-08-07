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
            <a className='btn btn-5'>The Pantheon</a>
            <a className='btn btn-5'>Player Options</a>
            <a className='btn btn-5'>The Nations</a>
        </nav>
    );
}