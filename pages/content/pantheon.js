import Head from 'next/head'
import Navbar from './navbar'

export default function Pantheon() {
    return (
        <div className='container dark'>
            <Head>
                <title>The Ankoria Setting - Definition</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>The Ankoria Setting - Pantheon</h1>
                <Navbar></Navbar>

                <div className='dark stacked-center'>

                    <div className='center-children sb'>
                        <div className='r-card dark'>
                            <img src="https://via.placeholder.com/200x220"></img>
                            <div className='text-bold'>Rohon:</div>
                        </div>
                        <div className='r-card'>
                            <img src="https://via.placeholder.com/200x220"></img>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}