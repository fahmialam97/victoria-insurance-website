/** Root layout versi Inggris (/en/...): sama dengan layout Indonesia, bahasa dibaca lewat next/root-params. */
export { default, generateMetadata, viewport } from "../(id)/layout";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "en" }];
}