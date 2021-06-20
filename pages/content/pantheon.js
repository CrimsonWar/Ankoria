import Head from 'next/head'
import Navbar from './navbar'

export default function Pantheon() {
    return (
        <div className='container dark'>
            <Head>
                <title>The Ankoria Setting - Pantheon</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Artifika&display=swap" rel="stylesheet"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <main>
                <h1>The Ankoria Setting - Pantheon</h1>
                <Navbar></Navbar>

                <div className='dark stacked-center'>

                    <div className='center-children sb'>
                        <div className='r-form'>
                            <img src='/images/SunGodSymbol.png' className='picPantheon'></img>
                            <div className='text-bold'>Gardon:</div>
                            <div>
                                <ul>
                                    <li>God of Life and the Sun</li>
                                    <li>Depiction: Clestial Lion</li>
                                    <li>Beliefs: The Sun brings Life, that Life has to be protected</li>
                                    <li>Domains for Clerics: Life, Light</li>
                                    <li>Notes: The Church of Gardon provides the service of Reincarnation.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='r-form'>
                            <img src='/images/NoxSymbol.png' className='picPantheon'></img>
                            <div className='text-bold'>Nox:</div>
                            <div>
                                <ul>
                                    <li>God of Death and the Moon</li>
                                    <li>Depiction: Lizardfolk Reaper</li>
                                    <li>Beliefs: Everything must die one day, and the Dead should stay Dead</li>
                                    <li>Domains for Clerics: Trickery, Grave, Twilight</li>
                                    <li>Notes:</li>
                                </ul>
                            </div>
                        </div>
                        <div className='r-form'>
                            <img src='/images/RivielSymbol.png' className='picPantheon'></img>
                            <div className='text-bold'>Riviel:</div>
                            <div>
                                <ul>
                                    <li>God of Nature and Storms</li>
                                    <li>Depiction: Minotaur with golden horns</li>
                                    <li>Beliefs: Nature creates but also destroys, Nature will Prevail</li>
                                    <li>Domains for Clerics: Nature, Tempest, Peace</li>
                                    <li>Notes:</li>
                                </ul>
                            </div>
                        </div>
                        <div className='r-form'>
                            <img src='/images/WozSymbol.png' className='picPantheon'></img>
                            <div className='text-bold'>Woz:</div>
                            <div>
                                <ul>
                                    <li>God of Magic and Lore</li>
                                    <li>Depiction: Human in gray robes and always a book in hand</li>
                                    <li>Beliefs: Knowledge is Power and Power should be shared</li>
                                    <li>Domains for Clerics: Knowledge, Order</li>
                                    <li>Notes: Book of destiny was gifted by Korshim</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='center-children sb'>
                        <div className='r-form'>
                            <img src='/images/KorshimSymbol.png' className='picPantheon'></img>
                            <div className='text-bold'>Korshim:</div>
                            <div>
                                <ul>
                                    <li>God of Crafting, Clockwork and Time</li>
                                    <li>Depiction: Constructed Halfdragon</li>
                                    <li>Beliefs: If you create something, it will take time, it will take effort, but in the end it will be Perfect</li>
                                    <li>Domains for Clerics: Knowledge, Forge, Order</li>
                                    <li>Notes: Crafted by Woz and Liria</li>
                                </ul>
                            </div>
                        </div>
                        <div className='r-form'>
                        <img src='/images/LiriaSymbol.png' className='picPantheon'></img>
                            <div className='text-bold'>Liria:</div>
                            <div>
                                <ul>
                                    <li>God of Art, Beauty and Love</li>
                                    <li>Depiction: Elven Woman surounded by songbirds</li>
                                    <li>Beliefs: Beauty can be found in every little thing, but Passion is the most beautiful thing in this world</li>
                                    <li>Domains for Clerics: Nature, Life, Peace</li>
                                    <li>Notes: </li>
                                </ul>
                            </div>
                        </div>
                        <div className='r-form'>
                            <img src='/images/DurremSymbol.png' className='picPantheon'></img>
                            <div className='text-bold'>Durrem:</div>
                            <div>
                                <ul>
                                    <li>God of War, Slaughter and Sacrifice</li>
                                    <li>Depiction: Orc Barbarian</li>
                                    <li>Beliefs: Kill or be Killed, There are no Innocents in War</li>
                                    <li>Domains for Clerics: War, Grave</li>
                                    <li>Notes: Twin of Rohon</li>
                                </ul>
                            </div>
                        </div>
                        <div className='r-form'>
                            <img src='/images/RohonSymbol.png' className='picPantheon'></img>
                            <div className='text-bold'>Rohon:</div>
                            <div>
                                <ul>
                                    <li>God of War, Honor and Justice</li>
                                    <li>Depiction: Orc Paladin</li>
                                    <li>Beliefs: Never lose your ideals in the Heat of Battle, Fight with Honor and die with Glory for the Innocent</li>
                                    <li>Domains for Clerics: War, Grave, Order</li>
                                    <li>Notes: Twin of Durrem</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}