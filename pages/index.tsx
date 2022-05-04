import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from './components/Navbar/index';


const { BLOG_URL, CONTENT_API_KEY } = process.env




type Post = {
  title: string
  slug: string
  custom_excerpt: string
  created_at: string


}

async function getPosts() {
  // https://demo.ghost.io/ghost/api/v3/admin/posts/

  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,created_at`).then((res) => res.json());
  const posts = res.posts
  
  return posts
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const posts = await getPosts()
  return {
    revalidate: 10,
    props: { posts }

  }
}

const Home: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;
  console.log(posts)
  return (


<>
<Navbar/>

      {/* Blog Start */}



      <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
        <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-teal-500 font-medium uppercase rounded-full shadow-sm my-10">Blogs</span>
        <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">Blogs</h3>
        <p className="mb-10 text-lg md:text-xl text-coolGray-500 font-medium">Developer Community BLogs.</p>
        <div className="relative mx-auto md:w-80">
          {/* <img className="absolute top-1/2 left-4 transform -translate-y-1/2" src="flex-ui-assets/elements/blog/search.svg" alt="" /> */}
          <input className="w-full py-3 pl-12 pr-4 text-coolGray-900 leading-tight placeholder-coolGray-500 border border-coolGray-200 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" type="text" placeholder="Search" />
        </div>
      </div>


      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">



        <div className="text-xl font-mono font-bold ">

          <ul className="list-decimal">







            {posts.map((post, index) => {
              return (

                <li key={post.slug}>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    
                    <div className="md:flex-grow">
                      
                      <h2 className="text-3xl font-bold text-teal-600 font-mono mb-2"><Link href="/post/[slug]" as={`/post/${post.slug}`}><a>{post.title}</a></Link></h2>
                      <p className="leading-relaxed"> {post.custom_excerpt}</p>
                      <span className="mt-1 text-gray-500 text-sm">{post.created_at}</span><br/>
                      <a className="text-teal-900 inline-flex items-center mt-4"> 
                      <Link href="/post/[slug]" as={`/post/${post.slug}`}><a>{post.slug}</a></Link>
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <hr/>

                </li>

              )
            }

            )}
          </ul>
        </div>

      </section>

      {/* Blog end */}










    </>
  )
}

export default Home
