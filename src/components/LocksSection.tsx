import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import locksImg from "@/assets/lock-1-multipoint.png";
import lockParts from "@/assets/lock-2-parts.png";
import lockDoorFront from "@/assets/lock-3-door-front.png";
import lockDoorSide from "@/assets/lock-4-door-side.png";
import lockInstalled from "@/assets/lock-5-installed.png";
import lockDigitalFace from "@/assets/lock-6-digital-face.png";
import lockDigitalKeypad from "@/assets/lock-7-digital-keypad.png";
import lock4kProduct from "@/assets/lock-8-4k-product.png";
import lockHandles from "@/assets/lock-9-handles.png";
import lockHandlesAlt from "@/assets/lock-10-handles-alt.png";

import brandMultlock from "@/assets/brand-multlock.png";
import brand4k from "@/assets/brand-4k.png";
import brandSecuremme from "@/assets/brand-securemme.png";
import brandIseo from "@/assets/brand-iseo.png";
import brandKl from "@/assets/brand-kl.png";
import brandKale from "@/assets/brand-kale.png";
import brandCisa from "@/assets/brand-cisa.png";

const WHATSAPP_URL = "https://wa.me/573245607992?text=Hola%20WGPuertas,%20quiero%20cotizar%20cerraduras";

const lockImages = [
  { src: locksImg, alt: "Cerradura multipunto con llaves" },
  { src: lockParts, alt: "Componentes de cerradura de seguridad" },
  { src: lockDoorFront, alt: "Puerta con cerradura instalada - frente" },
  { src: lockDoorSide, alt: "Puerta con cerradura instalada - lateral" },
  { src: lockInstalled, alt: "Cerradura instalada en puerta" },
  { src: lockDigitalFace, alt: "Cerradura digital con reconocimiento facial" },
  { src: lockDigitalKeypad, alt: "Cerradura digital con teclado" },
  { src: lock4kProduct, alt: "Cerradura 4K producto" },
  { src: lockHandles, alt: "Manijas y cerraduras" },
  { src: lockHandlesAlt, alt: "Variedad de manijas" },
];

const locks = [
  { name: "Cerradura Multipunto", desc: "Máxima seguridad con 3 puntos de anclaje" },
  { name: "Cerradura Digital", desc: "Acceso con huella, código, tarjeta, app y reconocimiento facial. Baterías en litio recargables" },
  { name: "Cerradura de Sobreponer", desc: "Instalación rápida y resistente" },
  { name: "Cerradura de Embutir", desc: "Integrada al marco de la puerta" },
];

const LocksSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section id="cerraduras" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Protección avanzada</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-2">
            Cerraduras de Seguridad
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg font-light">
            Las mejores marcas y tecnologías en cerraduras para mantener tu hogar y negocio seguros.
          </p>
        </div>

        {/* Image carousel */}
        <div className="relative mb-10">
          <div ref={emblaRef} className="overflow-hidden rounded-xl">
            <div className="flex">
              {lockImages.map((img, i) => (
                <div key={i} className="min-w-0 shrink-0 grow-0 basis-1/2 md:basis-1/3 pl-3 first:pl-0">
                  <div
                    className="rounded-xl overflow-hidden shadow-lg cursor-pointer aspect-[4/3]"
                    onClick={() => setLightbox(i)}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-center" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={scrollPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-foreground/70 text-card rounded-full p-2 hover:bg-foreground/90 transition-colors z-10">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-foreground/70 text-card rounded-full p-2 hover:bg-foreground/90 transition-colors z-10">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <button className="absolute top-4 right-4 text-white" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + lockImages.length) % lockImages.length); }}>
              <ChevronLeft className="w-8 h-8" />
            </button>
            <img src={lockImages[lightbox].src} alt={lockImages[lightbox].alt} className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % lockImages.length); }}>
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}

        {/* Lock types */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {locks.map((lock) => (
            <div key={lock.name} className="bg-warm-bg rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all">
              <h4 className="font-heading font-semibold text-foreground mb-2">{lock.name}</h4>
              <p className="text-sm text-muted-foreground font-light">{lock.desc}</p>
            </div>
          ))}
        </div>

        {/* Brands marquee */}
        <div className="mt-10 mb-10">
          <p className="text-center text-lg font-body text-foreground font-semibold mb-6">
            Trabajamos con las marcas de cerraduras más reconocidas y de calidad en el mercado:
          </p>
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee-locks gap-12 w-max">
              {[brandMultlock, brand4k, brandSecuremme, brandIseo, brandKl, brandKale, brandCisa,
                brandMultlock, brand4k, brandSecuremme, brandIseo, brandKl, brandKale, brandCisa].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="Marca de cerraduras"
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="whatsapp" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Consultar Cerraduras por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocksSection;
