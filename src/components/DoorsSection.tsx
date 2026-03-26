import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import door1 from "@/assets/door-1-apt209.jpg";
import door2 from "@/assets/door-2-light.jpg";
import door3 from "@/assets/door-3-digital.jpg";
import door4 from "@/assets/door-4-frontal.jpg";
import door5 from "@/assets/door-5-white-digital.jpg";
import door6 from "@/assets/door-6-dark.jpg";
import door8 from "@/assets/door-8-dark-1602.jpg";
import door9 from "@/assets/door-9-cherry.jpg";
import door11 from "@/assets/door-11-oak.jpg";
import door12 from "@/assets/door-12-construction.jpg";
import door13 from "@/assets/door-13-open.jpg";

const WHATSAPP_URL = "https://wa.me/573012793059?text=Hola%20WGPuertas,%20quiero%20cotizar%20una%20puerta%20de%20seguridad";

const galleryImages = [
  { src: door4, alt: "Puerta de seguridad acabado madera clara" },
  { src: door6, alt: "Puerta de seguridad acabado oscuro" },
  { src: door3, alt: "Puerta de seguridad con cerradura digital" },
  { src: door1, alt: "Puerta de seguridad instalada en apartamento" },
  { src: door5, alt: "Puerta blanca con cerradura digital" },
  { src: door8, alt: "Puerta de seguridad acabado café" },
  { src: door9, alt: "Puerta acabado cerezo con cerraduras" },
  { src: door11, alt: "Puerta de seguridad acabado roble" },
  { src: door2, alt: "Puerta acabado madera clara" },
];

const beforeAfterImages = [
  { before: door12, after: door13, label: "Instalación en obra nueva" },
];

const DoorsSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((p) => (p !== null ? (p - 1 + galleryImages.length) % galleryImages.length : null));
  const nextImage = () => setLightboxIndex((p) => (p !== null ? (p + 1) % galleryImages.length : null));

  return (
    <section id="puertas" className="section-padding bg-warm-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Seguridad para tu hogar</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-2">
            Puertas de Seguridad
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg font-light">
            Ofrecemos puertas de seguridad de la más alta calidad, fabricadas con materiales resistentes
            y diseños modernos que se adaptan a cualquier estilo arquitectónico. Comercializador autorizado de DEPROSEG N.T.
          </p>
        </div>

        {/* Galería de puertas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer group relative aspect-[3/4]"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Características */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Variedad de Diseños
            </h3>
            <p className="text-muted-foreground mb-4 font-light">
              Contamos con una amplia gama de puertas de seguridad: desde modelos clásicos con barras reforzadas
              hasta diseños contemporáneos con acabados premium. Cada puerta es fabricada con acero de alta resistencia
              y sistemas de cerradura multipunto.
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />Acero calibre 14 y 16
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />Cerradura multipunto
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />Acabados personalizados
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />Instalación profesional
              </li>
            </ul>
            <Button variant="whatsapp" className="w-fit" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Cotizar Puerta
              </a>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={door9} alt="Puerta de seguridad con cerraduras visibles" className="w-full h-80 object-cover" />
          </div>
        </div>

        {/* Antes & Después */}
        <div className="bg-card rounded-xl p-6 md:p-10 shadow-lg">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 text-center">
            Antes & Después
          </h3>
          {beforeAfterImages.map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden relative">
                <img src={item.before} alt="Antes de la instalación" className="w-full h-72 object-cover" />
                <span className="absolute top-3 left-3 bg-dark/70 text-card text-xs font-body font-semibold px-3 py-1 rounded-full">ANTES</span>
              </div>
              <div className="rounded-lg overflow-hidden relative">
                <img src={item.after} alt="Después de la instalación" className="w-full h-72 object-cover" />
                <span className="absolute top-3 left-3 bg-primary text-card text-xs font-body font-semibold px-3 py-1 rounded-full">DESPUÉS</span>
              </div>
            </div>
          ))}
          <p className="text-center text-muted-foreground mt-4 font-light">
            Transformamos la entrada de tu hogar con puertas de seguridad que combinan protección y estética.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-dark/90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-card/80 hover:text-card p-2">
            <X size={28} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 text-card/80 hover:text-card p-2">
            <ChevronLeft size={36} />
          </button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 text-card/80 hover:text-card p-2">
            <ChevronRight size={36} />
          </button>
          <div className="absolute bottom-4 text-card/60 text-sm font-body">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default DoorsSection;
