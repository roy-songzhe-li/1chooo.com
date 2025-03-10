---
title: How to Make Your React TypeScript Project More Elegant with `map()`
category: Project
publishedAt: 2024-02-15
summary: With React TypeScript and `map()`, you can create a more elegant personal blog. In this article, I share how to use the `map()` method to handle dynamic rendering of blog post lists and show the thought process of implementing the modification suggestions.
tags:
  - React
  - Frontend
  - map
  - TypeScript
banner: /images/banner/posts/make-your-react-more-elegant-with-map.webp
alt: How to Make Your React TypeScript Project More Elegant with `map()`
---

> With React TypeScript and `map()`, you can create a more elegant personal blog. In this article, I share how to use the `map()` method to handle dynamic rendering of blog post lists and show the thought process of implementing the modification suggestions.

![How to Make Your React TypeScript Project More Elegant with `map()`](/images/banner/posts/make-your-react-more-elegant-with-map.webp)

In the winter break of 2024, I planned to update my resume and personal website. I found a Portfolio design [codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) on GitHub that suited my current needs. I thought I could just replace the information with my own, but the template provided by the author did not have a design for more blog post browsing. All the web content is in the same `index.html`. If I fill the content about me, the loading time is too long. So I thought about turning each page into a route to handle it, but I thought I could play with ReactTS, so I started my blog makeover journey.

## The Problem

The original template had a static HTML structure for blog posts:

```html
<li class="blog-post-item active" data-filter="web development">
  <a href="#">
    <figure class="blog-banner-box">
      <img
        src="./assets/images/blog-1.jpg"
        alt="Design conferences in 2022"
        loading="lazy"
      />
    </figure>
    <div class="blog-content">
      <div class="blog-meta">
        <p class="blog-category">Design</p>
        <span class="dot"></span>
        <time datetime="2022-02-23">Fab 23, 2022</time>
      </div>
      <h3 class="h3 blog-item-title">Design conferences in 2022</h3>
      <p class="blog-text">
        Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
      </p>
    </div>
  </a>
</li>
```

This approach is not scalable when you have multiple blog posts. I needed a more dynamic solution.

## The Solution: Using `map()`

The `map()` method in JavaScript allows you to iterate over an array and transform each element. In React, it's perfect for rendering lists of components.

Here's how I implemented it:

```tsx
interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  summary: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Design conferences in 2022",
    category: "Design",
    date: "Feb 23, 2022",
    summary: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    image: "./assets/images/blog-1.jpg",
    link: "#",
  },
  // More blog posts...
];

function BlogList() {
  return (
    <ul className="blog-posts-list">
      {blogPosts.map((post) => (
        <li
          key={post.id}
          className="blog-post-item active"
          data-filter={post.category.toLowerCase().replace(" ", "-")}
        >
          <a href={post.link}>
            <figure className="blog-banner-box">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
              />
            </figure>
            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">{post.category}</p>
                <span className="dot"></span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <h3 className="h3 blog-item-title">{post.title}</h3>
              <p className="blog-text">{post.summary}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
```

## Benefits of Using `map()`

1. **Scalability**: Adding new blog posts is as simple as adding a new object to the `blogPosts` array.
2. **Maintainability**: The component logic is separated from the data, making it easier to update.
3. **Type Safety**: With TypeScript, we get compile-time checking for our blog post structure.
4. **Performance**: React efficiently updates only the DOM elements that change.

## Taking It Further: Fetching Data

In a real-world application, you'd likely fetch blog posts from an API. Here's how you might do that:

```tsx
import { useState, useEffect } from 'react';

function BlogList() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch('/api/blog-posts');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  if (loading) return <p>Loading blog posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="blog-posts-list">
      {blogPosts.map((post) => (
        // Same as before
      ))}
    </ul>
  );
}
```

## Conclusion

Using the `map()` method in React with TypeScript is a powerful way to create dynamic, type-safe components. It makes your code more maintainable, scalable, and elegant. Next time you're building a list of items in React, remember to leverage the power of `map()`! 