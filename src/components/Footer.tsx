import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><Logo /><p>Reinsurance intermediation and company management from Nassau to global markets.</p></div><div><h3>Explore</h3><Link href="/#expertise">Expertise</Link><Link href="/#approach">How we work</Link><Link href="/contact">Contact</Link></div><div><h3>Legal</h3><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-of-service">Terms of use</Link></div><div><h3>Headquarters</h3><p>Hepburn House, #175 Shirley Street<br />P.O. Box 7250<br />Nassau, The Bahamas</p><a href="mailto:info@nexusregroup.eu">info@nexusregroup.eu</a><a href="tel:+447893937442">+44 7893 937442</a></div></div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Nexus Reinsurance Intermediaries &amp; Company Management Limited.</p><p>Services are subject to contract, capacity and jurisdictional availability.</p></div></footer>;
}
