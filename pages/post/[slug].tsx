import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";


const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPost(slug: string) {
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`).then((res) => res.json());
  const posts = res.posts

  return posts[0]
}

//Ghost CMS Request
export const getStaticProps = async ({ params } :{params:any}) => {
  const post = await getPost(params.slug)
  return {
    props: { post },
    revalidate:10
  }
}

export const getStaticPaths = () => {

  //paths -> slugs which are allowed
  //fallback-> 
  return {
    paths: [],
    fallback: true

  }
}


type Post = {
  title: string
  html: string
  slug: string
  created_at: string

}

const Post: React.FC<{ post: Post }> = props => {

  console.log(props)
   

  const {post}  = props
  const [enableLoadComments, setEnabeLoadComments] = useState<boolean>(true)

  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading..</h1>
  }

  function loadComments() {
    //going to load discuss code
      setEnabeLoadComments(false)

    ;(window as any).disqus_config = function () {
          this.page.url = window.location.href;  
          this.page.identifier = post.slug; 
          }

          const script = document.createElement('script')
          script.src = 'https://ghouri-backend.disqus.com/embed.js'
          script.setAttribute('data-timestamp', Date.now().toString())
          document.body.appendChild(script)
          
  }
  return (
    <>
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">


    <div>
    


      <button  type="button" className="text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> <Link href="/"><a>Go Back</a></Link></button>
           

        <div className="text-xl font-mono font-bold ">

      <h1 className="text-4xl">Post URL:<span>{post.slug}</span></h1><br/>
   
      <div className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: post.html }}></div>


      <br/>
      {enableLoadComments && (
               <button  onClick={loadComments} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Load Comments</button>
           
            
            )}
       <div id="disqus_thread"></div>

    </div>

    </div>
    
    </section>
    </>
  )
}

export default Post