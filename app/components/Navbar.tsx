"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="nav"><div className="wrap nav-row"><a href="#top" className="logo"><span className="logo-mark" aria-hidden="true" />Novi</a><nav className="nav-links" aria-label="Primary"><a href="#product">Product</a><a href="#features">Features</a><a href="#company">Company</a></nav><div className="nav-actions"><a href="#login" className="btn btn-secondary btn-small">Log in</a><a href="#signup" className="btn btn-primary btn-small">Start free</a><button className={`menu-toggle ${open ? "open" : ""}`} type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-panel"><span /></button></div></div><div className={`mobile-panel ${open ? "open" : ""}`} id="mobile-panel"><a href="#product" onClick={close}>Product</a><a href="#features" onClick={close}>Features</a><a href="#company" onClick={close}>Company</a><a href="#login" onClick={close}>Log in</a><a href="#signup" className="btn btn-primary" onClick={close}>Start free</a></div></header>;
}
