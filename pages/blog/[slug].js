import Head from 'next/head'
import { format, parseISO } from 'date-fns'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { getAllPosts } from '../../lib/data'
import { DiscussionEmbed } from "disqus-react"

export default function BlogPage({title, date, content, slug}) {
  const hydrateContent = hydrate(content)
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mb-10">
          <div className="border-b-2 border-gray-200 mb-4">
            <h2 className="text-4xl font-bold">
              {title}
            </h2>
            <div className="text-gray-600 text-xs">
              {format(parseISO(date), "dd 'de' MMMM'")}
            </div>
          </div>

          <div className="prose">{hydrateContent}</div>
        </div>
        <DiscussionEmbed
          shortname={"lucastorres-dev"}
          config={{
            url: "https://lucastorres.dev/",
            identifier: slug,
            title: "this page title"
          }}
        />
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const allPosts = getAllPosts()
  const { data, content } = allPosts.find((item) => item.slug === params.slug)

  const mdxSource = await renderToString(content)
  return {
      props: {
        ...data,
        date: data.date.toISOString(),
        slug: data.slug,
        content: mdxSource,
        description: data.description
      }
  }
}

export async function getStaticPaths() {
  return {
      paths: getAllPosts().map(post => ({
          params: {
              slug: post.slug,
          }
      })),
      fallback: false,
  }
}