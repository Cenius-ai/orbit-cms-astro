---
title: "Rust for JavaScript Developers: A Practical Introduction"
date: 2024-09-08
excerpt: "Rust's learning curve is real, but its core ideas — ownership, borrowing, and pattern matching — make you a better programmer in any language. A tour for the curious JS developer."
author: "Maya Chen"
categories: ["Rust", "JavaScript"]
tags: ["rust", "systems-programming", "webassembly", "learning"]
featured: false
---

If you work primarily in JavaScript or TypeScript, Rust can look intimidating. The syntax is unfamiliar. The compiler is famously strict. And the concepts — ownership, borrowing, lifetimes — have no direct parallel in garbage-collected languages. But increasingly, JavaScript developers are learning Rust, not to abandon their primary language, but to complement it.

## Why Rust matters for JS developers

The practical motivation is clear: Rust powers much of the modern JavaScript toolchain. SWC (the compiler that powers Next.js builds), Turbopack, Rspack, Oxc, Lightning CSS, and Biome are all written in Rust. They exist because JavaScript tooling written in JavaScript hit performance walls that Rust can blow past.

But beyond tooling, Rust is the language of WebAssembly. If you want to run compute-heavy tasks in the browser — image processing, encryption, data analysis — Rust compiled to WebAssembly is the most mature path.

## Ownership: the big idea

Rust's defining feature is its ownership system, which eliminates entire categories of bugs without a garbage collector. The rules are simple to state but take practice to internalize:

1. Each value in Rust has exactly one owner at a time.
2. When the owner goes out of scope, the value is dropped.
3. Values can be borrowed (referenced) either mutably or immutably, but not both simultaneously.

To a JavaScript developer, this feels restrictive at first. But the restrictions encode invariants that you're already maintaining mentally in JavaScript — you just didn't have the compiler checking your work. "Cannot read property of undefined" is an ownership bug. So is modifying an array while iterating over it. Rust catches these at compile time.

## Pattern matching and enums

If ownership is Rust's most distinctive feature, pattern matching is its most satisfying one. Rust's `match` expression, combined with its enum system (which is closer to TypeScript's discriminated unions than to C-style enums), lets you handle every possible state explicitly:

```rust
enum Response {
    Success { data: Vec<User> },
    NotFound,
    Error { code: u16, message: String },
}

fn handle(r: Response) -> String {
    match r {
        Response::Success { data } => format!("Found {} users", data.len()),
        Response::NotFound => "No users found".to_string(),
        Response::Error { code, message } => format!("Error {}: {}", code, message),
    }
}
```

The compiler ensures you handle every variant. If you add a new variant later, the code won't compile until every `match` on that enum is updated. This is exhaustive checking by default, and once you've experienced it, returning to JavaScript's runtime fallthrough feels like flying without a net.

## Where to start

The Rust Book (available free at doc.rust-lang.org) remains the best introduction. Follow it with Rustlings, a set of small exercises that build muscle memory for ownership and borrowing. After that, pick a small project: a CLI tool, a simple web server with Axum, or a WebAssembly module that you call from your existing JavaScript code.

The compiler will frustrate you at first. But stick with it — the frustration is the learning, and what you learn about memory management, error handling, and type-driven design will make you a better JavaScript developer too.
