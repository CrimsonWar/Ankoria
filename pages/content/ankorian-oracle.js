import Head from 'next/head'
import Navbar from './navbar'

export default function AnkorianOracle() {
    return (
        <div className='container dark'>
            <Head>
                <title>The Ankoria Setting - The Ankorian Oracle</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Artifika&display=swap" rel="stylesheet"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <main>
                <h1>The Ankoria Setting - Ankorian Oracle</h1>
                <Navbar></Navbar>

                <div className='dark stacked-center'>
                    Here will be a Summary of reports about recent events in Ankoria.
                </div>

            </main>
        </div>
    );
}