---
title: Setting up the blog
description: A short note that the scaffold is live.
pubDate: 2026-11-18
tags: [meta]
project: keystone
---

The scaffold is live: Astro, content collections, and the design tokens are
wired up, and this is the first published post.

## What's here

Posts, projects, and an about page, all static and deployed from `main`.

```go
func main() {
	// A tiny sample to check syntax highlighting.
	msg := "hello, blog"
	fmt.Println(msg)
}
```

## Rendering pipeline

Diagrams render client-side from the `mermaid` fence, themed to match the page:

```mermaid
flowchart LR
    MD[Markdown] --> R[remark-mermaid]
    R --> P[pre.mermaid]
    P --> C[mermaid.run in browser]
    C --> SVG[Themed SVG]
    class SVG accent
    classDef accent fill:#FBF4E6,stroke:#C98A1F,color:#6B4E12
```

## What's next

Real writing, a Keystone deep-dive, and the Phase 2 design pass.
