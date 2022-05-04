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


    <div>
      <Link href="/"><a>Go Back</a></Link>
      <h1>My blog Posts</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>



      {enableLoadComments && (
            <p onClick={loadComments}>
            Load Comments
            </p>
            )}
       <div id="disqus_thread"></div>

    </div>
  )
}

export default Post