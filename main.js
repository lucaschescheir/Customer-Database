const blogPost = {
  title: "The Amazing Sloth",
  meta: {
    date: "May 2, 2017"
  },
  post: {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/MC_Drei-Finger-Faultier.jpg",
    content: "Sloths make very good habitats for other organisms, and a single sloth may be home to several species of moths, beetles, cockroaches, fungi, ciliates, and algae."
  },
  site: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Sloth"
  }
};

// Start Editing Here


let container = `<article>
<h2>${blogPost.title}</h2>
  <div class="meta">
  <span class="date">${blogPost.meta.date}</span>
  </div>
<div class= "post">
  <img src=${blogPost.post.image}>
  ${blogPost.post.content}
</div>
  <div class= "site">
    <p>Part of this content was pulled from <a href="${blogPost.site.url}">${blogPost.site.name}</a></p>
  </div>
   </article>`;
document.querySelector('.container').innerHTML = container;
