import { Link } from "react-router-dom";
import { Leaf, Mail, ExternalLink } from "lucide-react";

const preservationLinks = [
  { name: "Canning", href: "/canning" },
  { name: "Freezing", href: "/freezing" },
  { name: "Dehydrating", href: "/dehydrating" },
  { name: "Fermenting", href: "/fermenting" },
  { name: "Curing & Smoking", href: "/curing" },
];

const resourceLinks = [
  { name: "DIY Storage", href: "/storage" },
  { name: "Equipment Guide", href: "/equipment" },
  { name: "About Us", href: "/about" },
  { name: "Safety Guidelines", href: "/safety" },
];

const externalResources = [
  { name: "USDA Food Safety", href: "https://www.fsis.usda.gov/food-safety" },
  { name: "National Center for Home Food Preservation", href: "https://nchfp.uga.edu" },
  { name: "Penn State Extension", href: "https://extension.psu.edu" },
];

export function Footer() {
  return (
    <footer className="bg-earth text-cream">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold">
                Preserve<span className="text-accent">Craft</span>
              </span>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Science-based food preservation techniques for the modern homesteader. 
              Learn to safely preserve your harvest using time-tested methods backed by research.
            </p>
          </div>

          {/* Preservation Methods */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Preservation Methods</h3>
            <ul className="space-y-2">
              {preservationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Resources */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Trusted Sources</h3>
            <ul className="space-y-2">
              {externalResources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all inline-flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} PreserveCraft. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm opacity-60">
            <Link to="/privacy" className="hover:opacity-100 hover:text-accent transition-all">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:opacity-100 hover:text-accent transition-all">
              Terms of Use
            </Link>
            <a href="mailto:contact@preservecraft.com" className="hover:opacity-100 hover:text-accent transition-all inline-flex items-center gap-1">
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 p-4 bg-cream/10 rounded-lg">
          <p className="text-xs opacity-70 text-center">
            <strong>Affiliate Disclosure:</strong> Some links on this site are affiliate links. 
            We may earn a small commission if you make a purchase through these links, at no extra cost to you. 
            This helps support our research and keeps this resource free.
          </p>
        </div>
      </div>
    </footer>
  );
}
