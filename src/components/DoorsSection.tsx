import { Button } from "@/components/ui/button";
import doorsGallery from "@/assets/doors-gallery.jpg";
import beforeAfter from "@/assets/before-after.jpg";

const WHATSAPP_URL = "https://wa.me/573000000000?text=Hola%20WGPuertas,%20quiero%20cotizar%20una%20puerta%20de%20seguridad";

const DoorsSection = () => {
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src={doorsGallery} alt="Galería de puertas de seguridad" className="w-full h-80 object-cover" />
          </div>
          <div className="flex flex-col justify-center">
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
                <span className="w-2 h-2 bg-primary rounded-full" />Acero calibre 16 y 18
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
        </div>

        <div className="bg-card rounded-xl p-6 md:p-10 shadow-lg">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 text-center">
            Antes & Después
          </h3>
          <div className="rounded-lg overflow-hidden">
            <img src={beforeAfter} alt="Antes y después de instalación" className="w-full h-auto max-h-[500px] object-cover" />
          </div>
          <p className="text-center text-muted-foreground mt-4 font-light">
            Transformamos la entrada de tu hogar con puertas de seguridad que combinan protección y estética.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoorsSection;
