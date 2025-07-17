function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("post data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Feching log data");
    // const blogdata = await fetchPostData();
    // const commentData = await fetchCommentData();

    const [blogdata, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(blogdata);
    console.log(commentData);

    console.log("fetch complte");
  } catch (error) {
    console.error("Error feching blog data", error);
  }
}
getBlogData();
