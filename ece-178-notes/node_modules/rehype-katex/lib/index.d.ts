/**
 * Render elements with a `language-math` (or `math-display`, `math-inline`)
 * class with KaTeX.
 *
 * @param {Readonly<Options> | null | undefined} [options]
 *   Configuration (optional).
 * @returns
 *   Transform.
 */
export default function rehypeKatex(options?: Readonly<Options> | null | undefined): (tree: Root, file: VFile) => undefined;
export type ElementContent = import('hast').ElementContent;
export type Root = import('hast').Root;
export type KatexOptions = import('katex').KatexOptions;
export type VFile = import('vfile').VFile;
export type Options = Omit<KatexOptions, 'displayMode' | 'throwOnError'>;
