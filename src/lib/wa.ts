import { CONTACT } from "./data";

export function waLink(text: string): string {
  return `https://wa.me/${CONTACT.wa}?text=${encodeURIComponent(text)}`;
}
