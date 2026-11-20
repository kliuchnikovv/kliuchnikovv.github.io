/**
 * remark-mermaid — turn ```mermaid fences into a raw <pre class="mermaid">
 * BEFORE Shiki runs, so the graph source reaches the browser untouched.
 *
 * Shiki highlights every `code` node; a mermaid block wrapped in <span>s is
 * no longer valid mermaid source. By rewriting the node to an `html` node here
 * (in the mdast, before the rehype/Shiki stage) we hand the client a plain
 * <pre> with the escaped source as its only text, which mermaid.run() reads
 * from textContent. Client rendering + theme switching live in BaseLayout.
 */
import { visit } from 'unist-util-visit';

const escapeHtml = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export default function remarkMermaid() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (node.lang !== 'mermaid') return;
      node.type = 'html';
      node.value = `<pre class="mermaid" data-mermaid-source>${escapeHtml(node.value)}</pre>`;
      delete node.lang;
      delete node.meta;
    });
  };
}
