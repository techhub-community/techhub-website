import GhostContentAPI from '@tryghost/content-api';

const { BLOG_URL, CONTENT_API_KEY } = process.env;

const api = new GhostContentAPI({
  url: BLOG_URL,
  key: CONTENT_API_KEY,
  version: 'v3'
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags,authors,published_at,reading_time,custom_excerpt'
    })
    .catch((err) => {
      console.error(err);
    });
}
export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
      include: 'tags,authors,published_at,reading_time,custom_excerpt'
    })
    .catch((err) => {
      console.error(err);
    });
}