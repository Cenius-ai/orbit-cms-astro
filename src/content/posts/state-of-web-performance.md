---
title: "The State of Web Performance in 2024: Core Web Vitals and Beyond"
date: 2024-07-14
excerpt: "Google's Core Web Vitals have reshaped how we measure performance, but real user experience goes beyond the metrics. What the data tells us and where we go next."
author: "Devon Okonkwo"
categories: ["Web Development", "Performance"]
tags: ["performance", "core-web-vitals", "lighthouse", "seo", "ux"]
featured: false
---

The web performance conversation has shifted. Five years ago, we talked about bundle sizes and Time to Interactive. Today, the conversation is dominated by Core Web Vitals — Google's attempt to quantify user experience through three metrics: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). The metrics have their critics, but they've succeeded in one crucial way: they've made performance a product priority, not just an engineering concern.

## The metrics that matter

**Largest Contentful Paint (LCP)** measures when the largest content element becomes visible. It's Google's proxy for "when does the page feel loaded?" The target is under 2.5 seconds, and the biggest offenders are slow server response times, render-blocking resources, and large hero images.

**Interaction to Next Paint (INP)** replaced First Input Delay in March 2024 and is a significant improvement. Instead of measuring just the first interaction, INP measures the latency of all interactions throughout the page lifecycle and reports the worst one. This catches janky pages that load fast but respond slowly — a common failure mode in JavaScript-heavy applications.

**Cumulative Layout Shift (CLS)** measures visual stability. A page that loads, then jumps because a banner ad or a late-loading font shifts the content, scores poorly. The target is 0.1 or less, and the fix is almost always about reserving space for dynamic content before it loads.

## The gap between lab and field data

One of the more uncomfortable truths about web performance is that lab data (Lighthouse scores, synthetic tests) often paints a rosier picture than field data (what real users experience). A Lighthouse test on a fast machine with a good connection might score 95, while the 75th percentile of real users — on mid-range Android phones, on 4G connections, in regions with slower infrastructure — has a very different experience.

This gap matters because Core Web Vitals are assessed from field data. You can't optimize your way to a good INP score if your only feedback loop is running Lighthouse on a MacBook Pro. You need Real User Monitoring (RUM) — and, ideally, you need to be testing on representative devices.

## The new baseline

What's encouraging in 2024 is that the baseline has risen. Static site generators, server-side rendering, edge functions, and image CDNs with automatic optimization have made it easier than ever to build a fast site by default. You don't need to be a performance expert to ship a site with good Core Web Vitals — you just need to use modern tools and not actively work against them.

The frontier has moved to interaction performance: how fast does the page respond when the user types, clicks, scrolls, or taps? This is where JavaScript frameworks earn or lose their keep. A page that loads in under a second but takes 200ms to respond to a button click is still a bad experience.

## What's next

The web performance community is increasingly looking beyond the page load. The next frontier includes:

- **Startup performance** for SPAs and PWAs — how fast does the app become interactive on a cold start?
- **Navigation performance** — how fast do client-side transitions feel compared to full page loads?
- **Scroll-driven performance** — does the page stay smooth during long scrolls with images and animations?
- **Memory performance** — does the page leak memory over time, especially on long-lived SPAs?

The tools are getting better. The baseline is rising. And users, whether they articulate it this way or not, increasingly expect the web to feel as fast as native apps. That's a high bar, but it's also what makes web performance one of the most impactful investments a team can make.
