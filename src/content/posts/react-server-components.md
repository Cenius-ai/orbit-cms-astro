---
title: "React Server Components Are Not What You Think"
date: 2024-10-10
excerpt: "RSCs represent a fundamental shift in how we think about rendering — not a performance optimization, but a new mental model for the client-server boundary."
author: "Devon Okonkwo"
categories: ["JavaScript", "React"]
tags: ["react", "server-components", "architecture", "nextjs"]
featured: true
---

React Server Components (RSCs) arrived in 2023 with Next.js 13 and, let's be honest, confused almost everyone. Are they like server-side rendering? Are they a replacement for `getServerSideProps`? Why would you need them when we already have `useEffect` and data fetching libraries? The confusion is understandable, because RSCs aren't really about any of those things. They're about something deeper: redefining where your code runs.

## The mental model shift

Before RSCs, the mental model was straightforward: your React components run in the browser. Even with server-side rendering, the model was "render on the server for the first paint, then hydrate and take over on the client." The component tree was, ultimately, a client-side concern.

RSCs break that assumption. In an RSC world, your component tree spans both server and client. Some components run on the server and never ship any JavaScript to the browser. Others are explicitly marked as client components (`"use client"`) and behave like traditional React. The boundary between them is not a lifecycle method or a data-fetching strategy — it's an architectural decision about where code should execute.

```tsx
// This component runs on the server — zero JS shipped
async function PostList() {
  const posts = await db.posts.findMany({ take: 10 });
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

## Why this matters

The immediate benefit is smaller bundles. A server component that renders markdown, queries a database, or formats dates ships zero JavaScript. The downstream effects are significant: faster page loads, less parsing and execution time, and a lower memory footprint on the client.

But the deeper benefit is about complexity. In a traditional React app, data fetching often involves a cascade of loading states, error boundaries, and client-side caching. With RSCs, you fetch data in the component that needs it, and the component renders on the server. The loading state is implied by the request lifecycle. The error handling is server-side. The caching is HTTP-level.

## The trade-offs

Server Components come with constraints. They can't use state, effects, or browser APIs. They can't attach event handlers. They can be async, but only in the initial render — they don't re-render in response to client-side events. These constraints are the price of shipping zero JavaScript, and they force you to think carefully about the client-server boundary.

The pattern that's emerging is to treat server components as the default and client components as the exception. Most of your page — the layout, the data fetching, the static content — lives on the server. Interactive islands — a search input, a form, a dropdown — are client components that receive data as props from their server parents.

## A new kind of architecture

React Server Components aren't just a React feature. They represent a broader industry shift toward moving computation back to the server, where data lives and where rendering can happen closer to the database. Astro's islands, SvelteKit's server load functions, and Remix's loaders all explore the same territory from different angles.

The common thread is a recognition that the "thick client" model — where the browser downloads an entire application and renders it locally — doesn't make sense for most web experiences. The network is fast enough. Servers are powerful enough. And users shouldn't have to download and execute megabytes of JavaScript to read a blog post.

React Server Components are the React team's answer to that recognition. They're not a performance optimization to bolt onto an existing app. They're a different way of thinking about what a web application is — and who does the work.
