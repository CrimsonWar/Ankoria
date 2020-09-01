import Head from 'next/head'
import Navbar from './navbar'

export default function Definition() {
return (
    <div className='container dark'>
        <Head>
            <title>The Ankoria Setting - Definition</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

        <main>
            <h1>The Ankoria Setting - Definition</h1>
            <Navbar></Navbar>

            <div className='dark stacked-center'>

                <h2>The Tenents of Ankoria</h2>
                <div>
                    <ul>
                        <li><span className='text-bold'>Environment:</span> Wide Plains, Lush Jungles, Frozen Tundra, Deep Ocean, Harsh Desert</li><br/>
                        <li><span className='text-bold'>Demeanor:</span> Peace between Nations through unified Nation, Lawless Wilds are Anarchy</li><br/>
                        <li><span className='text-bold'>Technology:</span> Technological advances are achieved through the mastery of Magic</li><br/>
                        <li><span className='text-bold'>Magic:</span> Magic is Science</li><br/>
                        <li><span className='text-bold'>Politics:</span> Each Nation Has their own Ambitions</li><br/>
                        <li><span className='text-bold'>Pantheon:</span> Gods can manifest if they so choose</li><br/>
                        <li><span className='text-bold'>Monster Ecology:</span> Dangerous Groups and angered Wildlife are in the Lawless Wilds</li><br/>
                        <li><span className='text-bold'>Tropes:</span> Pirates Rule the Islands, Lots of Factions in the Lawless Wilds,
                                                                  <br/>Magocratic Empire and Bythhammer Diarchy hate eachother</li><br/>
                    </ul>
                </div>
                <h2>Description</h2>
                <div>
                    <p>
                        
                    </p>
                </div>
                
            </div>

        </main>
    </div>
)}