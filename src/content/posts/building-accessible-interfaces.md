---
title: "Building Accessible Interfaces: The 80/20 of ARIA"
date: 2024-08-19
excerpt: "Most accessibility problems come from a small set of patterns done wrong. Master the fundamentals — semantic HTML, focus management, and labeling — before reaching for ARIA."
author: "Devon Okonkwo"
categories: ["Web Development", "Accessibility"]
tags: ["accessibility", "aria", "html", "wcag", "ux"]
featured: false
---

The Web Content Accessibility Guidelines (WCAG) run to over a thousand pages across their various documents. ARIA — the Accessible Rich Internet Applications specification — adds another layer of attributes and roles on top of HTML. It's easy to feel overwhelmed and postpone accessibility work until "later." But the 80/20 rule applies: a handful of patterns, done consistently, address the vast majority of real accessibility barriers.

## Start with semantic HTML

The single most impactful thing you can do for accessibility is also the simplest: use the right HTML element for the job. A `<button>` is focusable, keyboard-activatable, and announces its role to screen readers — all for free. A `<div onclick="...">` is none of those things until you manually bolt on `tabindex`, `role`, and keyboard handlers.

The first rule of ARIA is: **don't use ARIA if you can use native HTML instead.** Every time you reach for `role="button"`, ask yourself whether a `<button>` would work. Every time you consider `role="navigation"`, consider whether a `<nav>` element would do the job.

## Focus management

Single-page applications break the browser's natural focus management. When you navigate to a new "page" without a full reload, the focus stays where it was — often on the link the user just clicked. A screen reader user has no indication that the content changed.

The fix is straightforward: after a client-side navigation, move focus to a logical place in the new content. This usually means focusing the main heading with `tabindex="-1"` (so it can receive programmatic focus without entering the tab order) and calling `.focus()`. A common pattern:

```html
<main id="main-content" tabindex="-1">
  <h1>About Us</h1>
</main>
```

```javascript
// After navigation
document.getElementById('main-content').focus();
```

## Labels and descriptions

Every form input needs a label. Not a placeholder — a real `<label>`. Placeholders disappear when the user starts typing, which makes them useless for anyone who needs to double-check what they're supposed to enter. The label should be visible (WCAG requires it) and programmatically associated with the input via the `for` attribute or by nesting.

For controls that don't have visible text — icon buttons, for example — use `aria-label`:

```html
<button aria-label="Delete item">
  <svg aria-hidden="true"><!-- trash icon --></svg>
</button>
```

## Color and contrast

Color should never be the only way to convey information. Error states, success indicators, and data visualizations need an additional indicator — an icon, a text label, or a pattern. And all text must meet WCAG contrast minimums: 4.5:1 for normal text and 3:1 for large text and UI components.

## Test with a keyboard

The simplest accessibility test requires no special tools: unplug your mouse and navigate your entire application using only the keyboard. Can you reach every interactive element? Can you tell which element is focused? Do modals trap focus correctly? Does pressing Escape close them and return focus to the trigger? If you can't use your own app with a keyboard, neither can millions of other people.

Accessibility is not a checklist to complete at the end of a project. It's a set of practices that, applied consistently, make your work better for everyone — including future you, squinting at a screen late at night, or navigating your app one-handed after an injury. Build it in from the start.
