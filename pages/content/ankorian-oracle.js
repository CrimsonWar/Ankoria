import Head from 'next/head'
import Navbar from './navbar'
import { getSortedPostsData } from '../../lib/articles'
import Link from 'next/link'
import Date from '../../components/date';

export default function AnkorianOracle({allArticlesData}) {
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
                    <h2>Recent Events</h2>
                    <ul className='no-bullets'>
                        {allArticlesData.map(({ id, title, date, author }) => (
                            <li key={id} className='article-border'>
                                <Link href="./articles/[id]" as={`./articles/${id}`}>
                                    <a className='btn'>{title}</a>
                                </Link>
                                <br />
                                <small>
                                    <Date dateString={date}/> / 
                                    Author: {author}
                                </small>
                            </li>
                        ))}
                    </ul>
                </div>

            </main>
        </div>
    );
}

export async function getStaticProps() {
    const allArticlesData = getSortedPostsData();
    return {
      props: {
        allArticlesData
      },
    }
  }