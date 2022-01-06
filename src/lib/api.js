//const API_URL = process.env.WORDPRESS_API_URL;
const API_URL = "http://ysbbwp.datalibstar.com/graphql"

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }

    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
      headers[
        'Authorization'
      ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
    }
   // console.log(API_URL, 'API_URL', 'pqm');//这行语句可以解决错误？  Next.js - Error: only absolute urls are supported
   console.log(API_URL, 'API_URL', 'pqm');
     

    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
  }

  export async function getPosts(){
    const data = await fetchAPI(
        `query AllPosts {
          posts(first: 20) {
            edges {
              node {
                title 
                id
                slug
                categories{
                edges{
                    node{
                    name
                    }
                }
                }
                excerpt
                slug
                author {
                  node {
                    name
                    firstName
                    lastName
                  }
                }
              }
            }
          }
        }
      `,
        {
          variables: {},
        }
      );
    return data?.posts?.edges;
}

export async function getPostsByCategoryId(id){
  //  console.log('获取目录内容', id);
   const data = await fetchAPI(
     `query PostsByCat{
        category(id:"${id}") {
          posts {
            edges {
              node {
                id
                link
                slug
                title
                featuredImage {
                  node {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
     }
   `,{id});
  // console.log('data?.posts?.edges;', data?.posts?.edges) 
   return data?.category?.posts?.edges;
 } 

export async function getCategories(){
  const data = await fetchAPI(
      `query MyQuery {
        categories {
          edges {
            node {
              id
              link
              name
              slug
              posts {
                edges {
                  node {
                    id
                    slug
                  }
                }
              }       
              parentId
            }
          }
        }
      }
    `,
      {
        variables: {},
      }
    );
  return data?.categories?.edges;
}


export async function getPageByName(name){
  //  console.log('获取目录内容', id);
   const data = await fetchAPI(
     `query MyQuery {
      pages(where: {name: "了解佑圣"}) {
        edges {
          node {
            content
            id
            link
            pageId
            slug
          }
        }
      }
    } 
   `,{name});
 
   return data?.pages.edges;
 } 

export async function getSingleCategory(id){
 //  console.log('获取目录内容', id);
  const data = await fetchAPI(
    `query Category{
        category(id: "${id}") {
          link
          name
          slug
        }
    }
  `,{id});

  return data?.category;
} 





export async function getSinglePost(id){
    //console.log('获取文章内容', id)
    const data = await fetchAPI(`
    query Post {
      post(id: "${id}") {
        title
        content
        slug
        id
        categories {
          edges {
            node {
              name
              categoryId              
              id
              posts {
                edges {
                  node {
                    id
                    title
                  }
                }
              }
            }
          }
        } 
      }
    }
    `,{id});

    return data?.post;
}

export async function getSinglePostBySlug(slug){
    console.log('获取文章内容by  slug', slug) 
}