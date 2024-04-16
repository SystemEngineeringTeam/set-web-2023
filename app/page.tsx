import AboutSection from './_component/sections/About';
import ImageSection from './_component/sections/Image';
import Notice from './_component/sections/notice/Announce';
import RecentPosts from './_component/sections/recentpost/RecentPosts';
import TopSection from './_component/sections/top/Top';
import { getPages, getPosts, getTopImages } from '@/components/loadFiles';

export default function Home() {
  const pages = getPages();
  const posts = getPosts();

  const topPage = pages.find((page) => page.path === '/');
  const mdContents = topPage ? topPage.content.split('---') : [];
  const imagepathes = getTopImages();
  const hero =
    imagepathes.find((image) => image.name.startsWith('hero')) ||
    imagepathes.slice(-1)[0];
  const others = imagepathes.filter((image) => image.name !== hero.name);

  return (
    <main>
      <TopSection message={mdContents[0]} images={[hero, ...others]} />
      <Notice />
      <ImageSection img={imagepathes[0].path} />
      <RecentPosts posts={posts} />
      {mdContents.splice(1).map((content, index) => {
        return (
          <>
            <ImageSection
              key={`parallax-${index}`}
              img={imagepathes[(index + 1) % imagepathes.length].path}
            />
            <AboutSection key={index} content={content} />
          </>
        );
      })}
    </main>
  );
}
