import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { getAllPosts } from '../lib/data'


export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Lucas Torres</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {posts.map((item) => (  
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()
  return {
      props: {
        posts: allPosts.map(({data, content, slug}) => ({
          ...data,
          date: data.date.toISOString(),
          content,
          slug,
        }))
      }
  }
}

function BlogListItem({ slug, title, date, description }) {
  return (
    <div className="border shadow hover:shadow-md hover:border-indigo-100 rounded p-4  transition duration-300 ease-in">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="text-lg font-bold">{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-xs">
        {format(parseISO(date), "dd 'de' MMMM'")}
      </div>
      <div>{description.substr(0, 300)}</div>
    </div>
  )
}