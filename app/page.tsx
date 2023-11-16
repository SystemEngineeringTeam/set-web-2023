import { getPages, getPosts, getTopImages } from "./_component/loadFiles";
import AboutSection from "./_component/sections/About";
import ImageSection from "./_component/sections/Image";
import RecentPosts from "./_component/sections/RecentPosts";
import TopSection from "./_component/sections/Top";

export default function Home() {
  const pages = getPages();
  const posts = getPosts();

  const topPage = pages.find((page) => page.path === "/");
  const mdContents = topPage ? topPage.content.split("---") : [];
  const imagepathes = getTopImages();
  const hero =
    imagepathes.find((image) => image.name.startsWith("hero")) ||
    imagepathes.slice(-1)[0];

  return (
    <main>
      <TopSection message={mdContents[0]} img={hero.path} />
      {mdContents.splice(1).map((content, index) => {
        return (
          <>
            <AboutSection key={index} content={content} />
            <ImageSection
              key={`parallax-${index}`}
              img={imagepathes[index % imagepathes.length].path}
            />
          </>
        );
      })}
      <RecentPosts posts={posts} />
    </main>
  );
}
