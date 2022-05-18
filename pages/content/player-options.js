import Head from 'next/head'
import Navbar from './navbar'

export default function PlayerOptions() {
    return (
        <div className='container dark'>
            <Head>
                <title>The Ankoria Setting - Player Options</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Artifika&display=swap" rel="stylesheet"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <main>
                <h1>The Ankoria Setting - Player Options</h1>
                <Navbar></Navbar>

                <div className='dark stacked-center'>
                    <div className='w-2'>

                        <br/>
                        <details>
                            <summary>Special rules for Character-Creation</summary>
                            <br/>
                            <ul>
                                <li>Player-Characters get a Feat at level 1</li>
                                <li>Player-Character get to choose one <span className='text-bold'>COMMON</span> Magic-Item in addition to their Starting-Equipment from the Dungeon Master's Guide,
                                Xanathar's Guide to Everything, Tasha's Cauldron of Everything, Eberron: Rising from the last War, or Explorer's Guide to Wildemount.</li>
                                <p className='text-bold'>Weapons or Armor replace Weapons or Armor in Starting-Equipment,<br/>
                                Excluded from this Choice are Potions and Scrolls</p>
                            </ul>
                        </details>

                        <br/>
                        <details>
                            <summary>Level-Up Rule</summary>
                            <br/>
                            <div>When rolling for HP at Level-Up and the Number on the Die is lower than the Average of the Hit-Die, <br/>
                            you can take the Average of the Hit-Die to calculate your HP.</div>
                        </details>

                        <br/>
                        <details>
                            <summary>Stat-Generation</summary>
                            <br/>
                            <ul>
                                <li>MAD-Array: 16 | 15 | 13 | 12 | 10 | 8</li>
                                <li>Roling for Stats:<br/>
                                    <ul>
                                        <li>One 16 and one 8 can be freely allocated</li>
                                        <li>Roll 4d6 drop lowest for the other 4 Stats</li>
                                    </ul>
                                </li>
                            </ul>
                        </details>

                        <br/>
                        <details>
                            <summary>Used Abreviations in Races, Classes and Backgrounds</summary>
                            <br/>
                            <div>
                                <h3>Books</h3>
                                <ul>
                                    <li>Aquisitions Incorperated = AI</li>
                                    <li>Eberron: Rising from the Last War = ERLW</li>
                                    <li>Elemental Evil Player's Companion = EEPC</li>
                                    <li>Explorer's Guide to Wildemount = EGW</li>
                                    <li>Fizban's Treasury of Dragons = FTD</li>
                                    <li>Ghosts of Saltmarsh = GOS</li>
                                    <li>Monsters of the Multiverse = MotM</li>
                                    <li>Mordekeinen's Tome of Foes = MTF</li>
                                    <li>Mythic Odysseys of Theros = MOT</li>
                                    <li>Player's Handbook = PHB</li>
                                    <li>Strixhaven: A Curriculum of Chaos = SACOC</li>
                                    <li>Swordcoast Adventurer's Guide = SCAG</li>
                                    <li>Tasha's Cauldron of Everything = TCoE</li>
                                    <li>Tomb of Annihilation = ToA</li>
                                    <li>Tortle Package = TP</li>
                                    <li>Volo's Guide to Monsters = VGM</li>
                                    <li>Van Richten's Guide to Ravencraft = VRG</li>
                                    <li>The Wild Beyond the Witchlight = WBWL</li>
                                </ul>
                            </div>
                        </details>

                        <br/>
                        <details>
                            <summary>Allowed Races</summary>
                            <br/>
                            <ul>
                                <li>Aarakocra (EEPC+MotM) </li>
                                <li>Aasimar (VGM+MotM)</li>
                                <li>Bugbear (ERLW+MotM)</li>
                                <li>Centaur (MOT+MotM)</li>
                                <li>Changeling (ERLW+MotM)</li>
                                <li>Dragonborn (EGW+FTD)</li>
                                <li>Dwarf (PHB+ERLW)</li>
                                <li>Deep Gnome(MotM)</li>
                                <li>Duergar(MotM)</li>
                                <li>Eladrin(MotM)</li>
                                <li>Elf (PHB+ERLW+EGW)</li>
                                <li>Fairy (WBWL+MotM)</li>
                                <li>Firbolg (VGM+MotM)</li>
                                <li>Genasi (EEPC+MotM)</li>
                                <li>Githyanki(MotM)</li>
                                <li>Githzerai(MotM)</li>
                                <li>Gnome (PHB+ERLW)</li>
                                <li>Goblin (ERLW+MotM)</li>
                                <li>Goliath (VGM+MotM)</li>
                                <li>Half-Elf (PHB+ERLW)</li>
                                <li>Half-Orc (PHB+ERLW)</li>
                                <li>Halfling (PHB+EGW+ERLW)</li>
                                <li>Harengon (WBWL+MotM)</li>
                                <li>Hobgoblin (ERLW+MotM)</li>
                                <li>Human (PHB+ERLW)</li>
                                <li>Kalashtar (ERLW)</li>
                                <li>Kenku (VGM+MotM)</li>
                                <li>Kobold (VGM+MotM)</li>
                                <li>Lineages(VRG)</li>
                                <li>Lizardfolk (VGM+MotM)</li>
                                <li>Minotaur (MOT+MotM)</li>
                                <li>Orc (ERLW+MotM)</li>
                                <li>Owlin (SACOC)</li>
                                <li>Satyr (MOT+MotM)</li>
                                <li>Sea Elf(MotM)</li>
                                <li>Shadar-kai(MotM)</li>
                                <li>Shifter (ERLW+MotM)</li>
                                <li>Tabaxi (VGM+MotM)</li>
                                <li><a href='https://homebrewery.naturalcrit.com/share/W1GV_adXEtH8' target='_blank'>Tlakah(by Joshua Taylor)</a></li>
                                <li>Tiefling (PHB+MTF)</li>
                                <li>Tortle (TP+MotM)</li>
                                <li>Triton (MOT+MotM)</li>
                                <li>Warforged (ERLW)</li>
                                <li>Yuan-ti(MotM)</li>
                                <li>Yuan-ti Pureblood(VGM)</li>
                            </ul>
                            <br/>
                            <p className='text-bold'>UA-Content:</p>
                            <ul>
                                <li>Astral-Elf</li>
                                <li>Autognome</li>
                                <li>Giff</li>
                                <li>Hadozee</li>
                                <li>Plasmoid</li>
                                <li>Thri-Kreen</li>
                            </ul>
                            <a href='https://1drv.ms/u/s!AhAlTgYDD1bR-HyKM_eUOwCHCjbR?e=SbcYFB' target='_blank'>Unearthed Arcana Archive</a>
                            <br/>
                            <p className='text-bold'>The Customized Origin Rules from TCoE ARE Allowed! If you want to<br/>
                            use the Custom Lineage Template talk to the DM FIRST!<br/>
                            With MotM introducing reworked traits for multiple races, Legacy Content is still allowed in this setting!</p>
                        </details>

                        <br/>
                        <details>
                            <summary>Allowed Classes</summary>
                            <br/>
                            <ul>
                                <li>Official Books:<br/>
                                    <ul>
                                        <li>Artificer (ERLW/TCoE)</li>
                                        <li>Barbarian</li>
                                        <li>Bard</li>
                                        <li>Cleric</li>
                                        <li>Druid</li>
                                        <li>Fighter</li>
                                        <li>Monk</li>
                                        <li>Paladin</li>
                                        <li>Ranger</li>
                                        <li>Rogue</li>
                                        <li>Sorcerer</li>
                                        <li>Warlock</li>
                                        <li>Wizard</li>
                                    </ul>
                                    <span className='text-bold' >Subclasses from XGE, PHB, ERLW, FTD, MOT, EGW, VRG and TCoE are allowed.</span>
                                </li>
                                <li>Homebrew:<br/>
                                    <ul>
                                        <li>Sculpter (<a href='https://www.dmsguild.com/product/207218/OAP-The-Sculptor-Class' target='_blank'>Ross Leiser DMsGuild</a>)</li>
                                        <li>Bloodhunter(<a href='https://www.dndbeyond.com/classes/blood-hunter' target='_blank'>DnDBeyond</a>)</li>
                                        <li>Binder(<a href='https://www.drivethrurpg.com/product/318299/Complete-Binder' target='_blank'>Mage Hand Press</a>)</li>
                                    </ul>
                                </li>
                            </ul>
                        </details>

                        <br/>
                        <details>
                            <summary>Usable Backgrounds</summary>
                            <br/>
                            <ul>
                                <li><span className='text-bold'>AI: </span>Failed Merchant, Gambler, Plaintiff</li>
                                <li><span className='text-bold'>ERLW: </span>House Agent (In this setting Agent of a Dragonmarked Clan)</li>
                                <li><span className='text-bold'>EGW: </span>Grinner, Revelry Pirate(Sailor), Volstrucker Agent</li>
                                <li><span className='text-bold'>GOS: </span>Fisher, Marine, Shipwright, Smuggler</li>
                                <li><span className='text-bold'>MOT: </span>Athlete</li>
                                <li><span className='text-bold'>ToA: </span>Anthropologist, Archaeologist</li>
                                <li><span className='text-bold'>PHB: </span>Acolyte, Charlatan, Criminal/Spy, Entertainer,
                                <br/>Folk Hero, Guild Artisan/Merchant, Noble/Knight,
                                <br/>Outlander, Sage, Soldier, Urchin
                                </li>
                                <li><span className='text-bold'>SACOC: </span>Lorehold Student, Prismari Student, Quandrix Student,
                                <br/>Silverquill Student, Witherbloom Student
                                </li>
                                <li><span className='text-bold'>SCAG: </span>City Watch/Investigator, Courtier, Far Traveler,
                                <br/>Inheritor, Mercenary Veteran, Urban Bounty Hunter
                                </li>
                                <li><span className='text-bold'>VRG: </span>Investigator, Haunted One</li>
                                <li><span className='text-bold'>WBWL: </span>Feylost, Witchlight Hand</li>
                            </ul>
                        </details>

                        <br/>
                        <details>
                            <summary>Links to Online-Tools</summary>
                            <br/>
                            <ul>
                                <li><a href='https://5e.tools/' target='_blank'>5E-Tools</a></li>
                                <li><a href='https://www.dndbeyond.com/' target='_blank'>D&D Beyond</a></li>
                            </ul>
                        </details>
                        <br/>

                    </div>

                </div>
            </main>
        </div>
    );
}