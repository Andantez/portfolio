const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

type NavigationLabel = typeof navLinks[number]["label"];
type NavigationHref = typeof navLinks[number]["href"];

export interface NavigationLinks {
  label: NavigationLabel | "View Projects";
  href: NavigationHref;
}
export default navLinks;
