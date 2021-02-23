import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

// Troque este conteúdo pela primeira parte da URL da sua tabela
const NOTION_BLOG_ID = 'fbc99b7d73834e5ca6db36139ba5e457?v=adc1eb4a57e54bf39e5ca3074f2f33fb'

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json())
}


export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts
    },
    // Next.js vai tentar regenerar a página:
    // - quando algum request acontecer
    // - no máximo uma vez a cada segundo
    revalidate: 1
  }
}

function HomePage({ posts }) {
  return (
    <div className="flex justify-center items-center">
      <motion.h1
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
          {posts.map((post) => (
            <div className="mt-16 cursor-pointer hover:bg-gray-100">
            <Link key={post.slug} href="/[slug]" as={`/${post.slug}`}>
            <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <span className="font-light text-gray-600">{post.date}</span>
                </div>
                <div className="mt-2">
                    <a className="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">{post.title}</a>
                    <p className="mt-2 text-gray-600">{post.summary}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <a className="text-blue-600 hover:underline" href="#">Read more</a>
                    <div>
                </div>
                </div>
            </div>
            </Link>
            </div>
          ))}
        </motion.h1>
    </div>
  )
}

export default HomePage