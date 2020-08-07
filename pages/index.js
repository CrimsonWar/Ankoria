import Head from 'next/head'
import Navbar from './content/navbar'

export default function Home() {
  return (
    <div className='container dark'>
      <Head>
        <title>The Ankoria Setting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>The Ankoria Setting</h1>
        <Navbar></Navbar>

        <div className="dark stacked-center">

          <h2>Welcome</h2>

          <p>
            This Page is an index of the Ankoria Setting. The Setting is intended for the 5th Edition of Dungeons & Dragons.<br/>
            On this Page you will find 
            <ul>
              <li>the Definition</li>
              <li>the Player Options</li>
              <li>the Pantheon</li>
              <li>the Nations</li>
            </ul>
            of the Setting.
            <br/>
            <br/>
          </p>

          <img className='rounded-2' src='/images/map.jpg' height='768px' width='1024px'></img>
          <br/>
          <br/>
        
        </div>

      </main>

      <footer >
        
      </footer>
    </div>
  )
}
