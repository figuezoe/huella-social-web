"use client";
import { useState } from "react";
import Link from "next/link";
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div className="mobileMenu"><button type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? "Cerrar" : "Menú"}</button>{open && <nav id="mobile-nav"><Link href="#nosotros" onClick={close}>Nosotros</Link><Link href="#modelo" onClick={close}>Modelo</Link><Link href="#causa" onClick={close}>La causa al centro</Link><Link href="#organizaciones" onClick={close}>Organizaciones</Link><Link href="#promotores" onClick={close}>Únete</Link><Link href="#reunion" className="navButton" onClick={close}>Agenda una reunión</Link></nav>}</div>;
}
