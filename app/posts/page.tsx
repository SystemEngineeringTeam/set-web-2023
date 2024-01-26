import { Metadata } from 'next';
import List from './_components/list';
import { getPages, getPosts } from '@/components/loadFiles';
import Pagenation from '@/components/pagenation/pagenation';
import { css } from '@/styled-system/css';

const CONTENTS_NUM = 12;

export default function Posts() {
  const rangeMin = 0;

  const posts = getPosts();
  const pages = getPages();
  const pagenationMax = Math.ceil(posts.length / CONTENTS_NUM);
  const displayPosts = posts.splice(rangeMin, CONTENTS_NUM);

  const postsPage = pages.find((page) => page.path === '/posts');
  const widthNarrow = postsPage ? postsPage.widthNarrow : false;

  return (
    <main
      className={css({
        padding: '80px 20px',
      })}
    >
      <div
        className={css({
          marginInline: 'auto',
          width: '100%',
          maxWidth: widthNarrow ? '600px' : '800px',
        })}
      >
        <h1
          className={css({
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem',
            borderBottom: '1px solid black',
          })}
        >
          {postsPage ? postsPage.meta.title : 'Posts'}
        </h1>

        <List publishedPosts={displayPosts} />
      </div>

      <Pagenation
        pageNum={1}
        PageMax={pagenationMax}
        getPath={(page) => `/posts/${page}`}
      />
    </main>
  );
}

export function generateMetadata(): Metadata {
  const pages = getPages();
  const postsPage = pages.find((page) => page.path === '/posts');

  return {
    title: postsPage ? postsPage.meta.title : 'Posts',
  };
}
