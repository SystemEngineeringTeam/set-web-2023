import { getPosts } from "../loadFiles";

export default function RecentPosts() {
  const posts = getPosts();

  return (
    <section className="recent-posts">
      <h2>Recent Posts</h2>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.meta.title}</li>;
        })}
      </ul>
    </section>
  );
}
