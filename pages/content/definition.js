import Head from 'next/head'
import Navbar from './navbar'

export default function Definition() {
return (
    <div className='container dark'>
        <Head>
            <title>The Ankoria Setting - Definition</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Artifika&display=swap" rel="stylesheet"></link>
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
                    <p className='text-container dark'>
                        Ankoria is a World, that is built on the ruins of a long lost Empire, that spanned across the whole<br/>
                        Continent. The Fall of the Empire brought great Devestation, but it also brought a new beginning. <br/>
                        The Remnants of the Empire rebuilt and formed the Nations that thrive today. There is also the <br/>
                        Lawless Wilds, where it is 'Kill or be Killed'. Another gift from the Ashes is the high Concentration<br/>
                        of magical Energy, which lead to discoveries, that made Magic a Commodity of everyday Life.<br/>
                        <br/>
                        Heroes can rise from all walks of life. From the Urchin trying to survive in the streets of Horizon<br/> 
                        to a Prince trying to find more in life. They explore ancient ruins, unearth Artifacts or fight Evils <br/>
                        that try to establish Dominance.<br/>
                    </p>
                </div>
                
            </div>

        </main>
    </div>
)}