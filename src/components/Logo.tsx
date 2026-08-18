import Link from "next/link";

export function Logo() {
  return <Link className="brand" href="/" aria-label="Nexus Reinsurance Group home"><svg className="brand-mark" viewBox="0 0 48 48" aria-hidden="true"><path d="M9 41V7h7l16 21V7h7v34h-7L16 20v21H9Z"/><path className="brand-mark-accent" d="M5 3h38v3H5z"/></svg><span><strong>Nexus</strong><small>Reinsurance Group</small></span></Link>;
}
