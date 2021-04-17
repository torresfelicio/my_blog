
const DisqusComments = ({ post }) => {
  const disqusShortname = "your-disqus-shortname"
  const disqusConfig = {
    url: "https://your-site-url/",
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;