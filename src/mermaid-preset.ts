/**
 * Mermaid preset — целевая эстетика блога, согласованная с токенами.
 *
 * OKLCH конвертирован в HEX, потому что Mermaid themeVariables пока не ест
 * CSS-переменные / OKLCH. Для dark-темы сгенерируйте вторую версию SVG
 * и переключайте через CSS по [data-theme="dark"].
 *
 * classDef'ы добавьте в конец каждой диаграммы:
 *   classDef accent fill:#FBF4E6,stroke:#C98A1F,color:#6B4E12
 *   classDef muted stroke-dasharray:4 4,color:#767676
 *   classDef destructive fill:#FDEBE9,stroke:#C7503F,color:#7A2A1E
 *
 * Правило: один accent-узел на диаграмму — тот, вокруг которого строится рассказ.
 */

export const mermaidLight = {
  theme: 'base' as const,
  themeVariables: {
    fontFamily: 'Geist, system-ui, sans-serif',
    fontSize: '14px',
    primaryColor: '#FBFBFB',
    primaryBorderColor: '#DADADA',
    primaryTextColor: '#272727',
    lineColor: '#878787',
    secondaryColor: '#FBF4E6',
    tertiaryColor: '#FBFBFB',
  },
};

export const mermaidDark = {
  theme: 'base' as const,
  themeVariables: {
    fontFamily: 'Geist, system-ui, sans-serif',
    fontSize: '14px',
    primaryColor: '#2A2A2A',
    primaryBorderColor: '#404040',
    primaryTextColor: '#F2F2F2',
    lineColor: '#A6A6A6',
    secondaryColor: '#3D3220',
    tertiaryColor: '#2A2A2A',
  },
};

export const mermaidClassDefs = `
classDef accent fill:#FBF4E6,stroke:#C98A1F,color:#6B4E12
classDef muted stroke-dasharray:4 4,color:#767676
classDef destructive fill:#FDEBE9,stroke:#C7503F,color:#7A2A1E
`.trim();
