import Head from 'next/head'
import Navbar from './navbar'

export default function Organisations() {
return (
    <div className='container dark'>
        <Head>
            <title>The Ankoria Setting - Nations and Organisations</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

        <main>
            <h1>The Ankoria Setting - Nations and Organisations</h1>
            <Navbar></Navbar>

            <div className='dark stacked-center'>

                <br/>
                <img className='rounded-1' src='/images/map.jpg' height='768px' width='1024px'></img>
                <br/>

                <div className='w-2'>

                <details>
                    <summary>Nations of Ankoria</summary>
                    <div>
                        <ul>
                            <li><span className='text-bold'>The Raging Enclave</span><ul>
                                    <li>Capital: Shroudport</li>
                                    <li>Government: Piratelords</li>
                                    <li>Type of Government: Confederacy</li>
                                    <li>Races, that are more common here: Triton, Water Genasi, Lizardfolk, Tabaxi, Kobold</li>
                                </ul>
                            </li>
                            <li><span className='text-bold'>Unified Ankoria</span><ul>
                                    <li>Capital: Unity</li>
                                    <li>Government: Representatives of the other Nations</li>
                                    <li>Type of Government: Unitary Directional Republic</li>
                                    <li>Races, that are more common here: Gnome, Elf, Goblinoid, Dwarf, Genasi</li>
                                </ul>
                            </li>
                            <li><span className='text-bold'>The Sacred Lands of Sun and Moon</span><ul>
                                    <li>Capital: Angelsfall</li>
                                    <li>Government: Churches of Life and Death</li>
                                    <li>Type of Government: Ecclesiarchy</li>
                                    <li>Races, that are more common here: Tiefling, Aasimar, Dragonborn, Kalashtar, Kobold</li>
                                </ul>
                            </li>
                            <li><span className='text-bold'>The Martial Wastes</span><ul>
                                    <li>Capital: Ashdrift</li>
                                    <li>o Government: Grandchief</li>
                                    <li>o Type of Government: Chiefdom</li>
                                    <li>o Races, that are more common here: Orc, Goblinoid, Centaur, Warforged, Fire Genasi, Kobold</li>
                                </ul>
                            </li>
                            <li><span className='text-bold'>The Tribes of the Frozen Lands</span><ul>
                                    <li>Capital: Whiteridge</li>
                                    <li>Government: Representatives of the Clans</li>
                                    <li>Type of Government: Tribalism with Council</li>
                                    <li>Races, that are more common here: Goliath, Dwarf, Dragonborn, Bugbear</li>
                                </ul>
                            </li>
                            <li><span className='text-bold'>The Magocratic Empire</span><ul>
                                    <li>Capital: Horizon</li>
                                    <li>Government: Grand Intelligence</li>
                                    <li>Type of Government: Uniocracy</li>
                                    <li>Races, that are more common here: Warforged, Goblin, Gnome, Halfling, Elf, Dwarf, Kenku</li>
                                </ul>
                            </li>
                            <li><span className='text-bold'>The Bythehammer Diarchy</span><ul>
                                    <li>Capital: Greendale</li>
                                    <li>Government: two Kings of the Houses Bythewood and Rosehammer,</li>
                                    <li>Type of Government: Diarchy</li>
                                    <li>Races, that are more common here: Elf, Firbolg, Centaur, Satyr, Minotaur, Halfling</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </details>
                <br/>
                <details>
                    <summary>Landmarks of Ankoria</summary>
                    <div>
                        <ul>
                            <li><span className='text-bold'>Steelpeak: </span><br/>The mountain range of Steelpeak is a home to many dwarfen Clans. <br/>Some of the best Weapons and Armor are Crafted here. <br/>The Dwarfs of Steelpeak are also famous for their expertly brewed “Burning Peak”-Whiskey.</li><br/>
                            <li><span className='text-bold'>Avian Isle</span><br/>Avian Isle is a Special Region in the Magocratic Empire. <br/>It is the home of the Kenku and is partially autonomous from the Empire.</li><br/>
                            <li><span className='text-bold'>The Eternal Forrest</span><br/>This Forrest is called the Eternal Forrest, because Nobody could ever Conquer Land from this Forrest’s Elven Tribes.<br/> Some might say that this Forrest is under Protection by Riviel themselves, but that are only rumors.</li><br/>
                            <li><span className='text-bold'>The Scar</span><br/>This Wasteland was created by the destruction of the Ancient Capital of Ankoria. <br/>Stories say that the Destruction happened because Rowina the Terrible, the Leader of the Ancient Ankorian Empire, <br/>angered the Gods of Life and Death and Faced divine Punishment. <br/>Today the Scar is uninhabitable, and there are still remnants of Celestial- and Devil-Energy.</li><br/>
                        </ul>
                    </div>
                </details>
                <br/>
                <details>
                    <summary>The Dragonmarked Clans</summary>
                    <div>
                        <ul>
                            <li><span className='text-bold'>The Stormbenders:</span>
                                <ul>
                                    <img src='/images/Stormbenders.png' height='256px'/>
                                    <li>Dragonmarks: Storm, Passage</li>  
                                    <li>Services: Run Trains and Airships between the Capitals</li>
                                    <li>HQ: Horizon</li>
                                </ul></li><br/>
                            <li><span className='text-bold'>The Sentinels:</span>
                                <ul>
                                    <img src='/images/Sentinels.png' height='256px'/>
                                    <li>Dragonmarks: Sentinel, Warding</li>  
                                    <li>Services: Private Protection Services</li>
                                    <li>HQ: Angelsfall</li>
                                </ul></li><br/>
                            <li><span className='text-bold'>The Wild Huntsmen:</span>
                                <ul>
                                    <img src='/images/WildHuntsmen.png' height='256px'/>
                                    <li>Dragonmarks: Finding, Handling</li>  
                                    <li>Services: Exotic Pets and Expeditions into the Lawless Wilds</li>
                                    <li>HQ: Greenglade</li>
                                </ul></li><br/>
                            <li><span className='text-bold'>The Ebony Assosiation:</span>
                                <ul>
                                    <img src='/images/EbonyAssosiation.png' height='256px'/>
                                    <li>Dragonmarks: Healing, Hospitality</li>  
                                    <li>Services: Tavern with Healers</li>
                                    <li>HQ: Greenglade</li>
                                </ul></li><br/>
                            <li><span className='text-bold'>The Iron Couriers</span>
                                <ul>
                                    <img src='/images/IronCouriers.png' height='256px'/>
                                    <li>Dragonmarks: Making, Scribing</li>  
                                    <li>Services: Crafters and Messaging</li>
                                    <li>HQ: Horizon</li>
                                </ul></li><br/>
                            <li><span className='text-bold'>The Howling Vale:</span>
                                <ul>
                                    <img src='/images/HowlingVale.png' height='256px'/>
                                    <li>Dragonmarks: Shadow, Detection</li>  
                                    <li>Services: Spies, Assassins, Bodyguards</li>
                                    <li>HQ: Shroudport</li>
                                </ul></li><br/>
                        </ul>
                    </div>
                </details>
                <br/>

                </div>
                
            </div>

        </main>
    </div>
)}