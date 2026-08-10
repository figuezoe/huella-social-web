import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import MobileMenu from "../components/MobileMenu";

const values = ["Empatía","Excelencia","Integridad","Mejora continua","Resiliencia","Colaboración"];
const steps = [
  {number:"01",title:"Capacitación especializada",text:"Formación inicial y continua en comunicación, ética, empatía y conocimiento de causa."},
  {number:"02",title:"Evaluaciones mensuales",text:"Seguimiento periódico para mantener estándares altos e identificar oportunidades de mejora."},
  {number:"03",title:"Coaching personalizado",text:"Retroalimentación individual y acompañamiento constante para desarrollar habilidades."},
  {number:"04",title:"Cultura de excelencia",text:"Preparación, disciplina y mejora continua enfocadas en generar mejores resultados."}
];
const reasons = [
  ["01","Atención personalizada","Cada estrategia se adapta a la identidad y objetivos de la organización."],
  ["02","Seguimiento constante","Acompañamos la calidad y evolución de cada campaña."],
  ["03","Comunicación cercana","Mantenemos contacto directo durante todas las etapas de la operación."],
  ["04","Enfoque en permanencia","Buscamos relaciones sostenibles entre las personas y las causas que apoyan."]
];

export default function Home(){
  return <>
    <header className="header">
      <Link href="#inicio" className="brand"><Image src="/images/isotipo.png" alt="Huella Social" width={34} height={34}/><span>HUELLA SOCIAL<small>FUNDRAISING</small></span></Link>
      <nav className="desktopNav" aria-label="Navegación principal">
        <Link href="#nosotros">Nosotros</Link><Link href="#modelo">Modelo</Link><Link href="#causa">La causa al centro</Link><Link href="#organizaciones">Organizaciones</Link><Link href="#promotores">Únete</Link><Link href="#reunion" className="navButton">Agenda una reunión</Link>
      </nav>
      <MobileMenu/>
    </header>
    <main>
      <section id="inicio" className="hero"><div className="heroCopy"><p className="eyebrow">Fundraising Face to Face · Querétaro</p><h1>Conversaciones que dejan <span>huella.</span></h1><p className="lead">Somos una agencia queretana especializada en fundraising Face to Face que conecta personas con causas que transforman vidas.</p><div className="actions"><Link href="#reunion" className="button primary">Agenda una reunión</Link><Link href="#modelo" className="button secondary">Conoce nuestro modelo</Link></div><div className="trustRow"><span>Agencia queretana</span><span>Captación Face to Face</span><span>Relaciones duraderas</span></div></div><div className="heroImage"><Image src="/images/hero.jpeg" alt="Promotores de Huella Social" fill priority sizes="(max-width: 900px) 100vw, 54vw" /></div></section>
      <section className="statement"><p className="eyebrow">Nuestra forma de captar</p><h2>No buscamos solamente donadores.<br/><span>Construimos relaciones.</span></h2></section>
      <section id="nosotros" className="split"><div className="imagePanel"><Image src="/images/equipo-oficina.jpeg" alt="Equipo Huella Social" fill sizes="(max-width: 900px) 100vw, 50vw" /></div><div className="copyPanel"><p className="eyebrow">Somos Huella Social</p><h2>Una agencia queretana con una visión humana del fundraising.</h2><p>Acompañamos a organizaciones sociales en la construcción de comunidades de donadores comprometidos mediante conversaciones auténticas, procesos sólidos y mejora continua.</p><p>Nuestro trabajo combina experiencia en captación, capacitación y desarrollo de equipos con un compromiso profundo por representar cada causa con autenticidad.</p><strong>Creemos en las personas. Creemos en las causas. Creemos en el poder de cada conversación.</strong></div></section>
      <section className="purpose"><article><div className="symbol">◎</div><h3>Misión</h3><p>Conectar personas con causas que transforman vidas mediante estrategias Face to Face éticas, humanas y orientadas a construir relaciones duraderas.</p></article><article><div className="symbol">⌁</div><h3>Visión</h3><p>Ser una agencia referente en México por la calidad de nuestras campañas, la permanencia de los donadores y el impacto generado.</p></article><article><div className="symbol">♡</div><h3>Valores</h3><div className="valueGrid">{values.map(v=><span key={v}>{v}</span>)}</div></article></section>
      <section id="modelo" className="section model"><div className="sectionHeading"><p className="eyebrow">Nuestro modelo operativo</p><h2>La calidad comienza con la preparación.</h2></div><div className="stepGrid">{steps.map(s=><article key={s.number}><span>{s.number}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></section>
      <section id="causa" className="cause"><div className="causeImage"><Image src="/images/equipo.jpeg" alt="Equipo joven de Huella Social" fill sizes="(max-width: 900px) 100vw, 52vw" /></div><div className="causeCopy"><p className="eyebrow">La causa al centro</p><h2>Primero comprendemos. Luego representamos.</h2><p>Antes de iniciar una campaña, conocemos la historia, los programas, los valores y el impacto de cada organización.</p><p>Solo comprendiendo verdaderamente una causa es posible representarla con autenticidad e inspirar a más personas a formar parte de ella.</p></div></section>
      <section id="organizaciones" className="section reasons"><div className="sectionHeading"><p className="eyebrow">¿Por qué Huella Social?</p><h2>Un modelo cercano, profesional y enfocado en relaciones de largo plazo.</h2></div><div className="reasonGrid">{reasons.map(([n,t,x])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{x}</p></article>)}</div></section>
      <section id="reunion" className="section formSection"><div><p className="eyebrow">Para organizaciones</p><h2>Agenda una reunión</h2><p>Cuéntanos sobre tu organización y conversemos sobre una estrategia de captación alineada con sus objetivos.</p></div><ContactForm type="organization"/></section>
      <section id="promotores" className="section join"><div className="joinIntro"><Image src="/images/isotipo.png" alt="Huella Social" width={90} height={90} className="joinHeart"/><p className="eyebrow">Únete al equipo</p><h2>Convierte conversaciones en impacto.</h2><p>Buscamos personas jóvenes con empatía, actitud y ganas de crecer mientras representan causas que transforman vidas.</p></div><ContactForm type="promoter" dark/></section>
    </main>
    <footer><div className="footerBrand"><Image src="/images/isotipo.png" alt="Huella Social" width={34} height={34}/><strong>HUELLA SOCIAL<small>FUNDRAISING</small></strong></div><p>Agencia queretana especializada en fundraising Face to Face para organizaciones sociales.</p><div><strong>Querétaro, México</strong><br/><a href="mailto:alianzas@huellasocial.com.mx">alianzas@huellasocial.com.mx</a></div><Link href="/aviso-de-privacidad">Aviso de privacidad</Link></footer>
  </>
}
