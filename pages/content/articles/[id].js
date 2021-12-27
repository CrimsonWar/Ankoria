import {getAllPostIds, getPostData} from '../../../lib/articles'
import Date from '../../../components/date'
import Head from 'next/head'
import Link from 'next/link'

export default function Post({postData}) {
    return (
      <div className='container dark'>
        <Head>
            <title>The Ankoria Setting - The Ankorian Oracle</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Artifika&display=swap" rel="stylesheet"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

        <main>

          <h1>{postData.title}</h1>
          <nav className='nav nav-start'>
            <Link href='/content/ankorian-oracle'>
                <a className='btn btn-5'>← Back to the Oracle</a>
            </Link>
          </nav>
            <article className='dark stacked-center'>
                <div>
                  Author: {postData.author}
                </div>
                <br/>
                <div className='w-2'>
                  <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </div>
            </article>
        </main>
      </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
}