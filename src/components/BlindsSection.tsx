import { Button } from "@/components/ui/button";
import persianasImg from "@/assets/persianas.jpg";
import cortinasImg from "@/assets/cortinas.jpg";

const WHATSAPP_URL = "https://wa.me/573117226787?text=Hola%20WGPuertas,%20quiero%20cotizar%20persianas%20o%20cortinas";

const BlindsSection = () => {
  return (
    <section id="persianas" className="section-padding bg-warm-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Elegancia para tus espacios</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-2">
            Persianas & Cortinas
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg font-light">
            Dale a tus espacios un toque de lujo y sofisticación con nuestra línea premium de persianas y cortinas.
            Materiales de primera calidad, diseños exclusivos y una instalación impecable.
          </p>
        </div>

        {/* Persianas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={persianasImg} alt="Persianas" className="w-full h-80 md:h-96 object-cover" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">Persianas</h3>
            <p className="text-muted-foreground font-light mb-4">
              Nuestras persianas combinan funcionalidad y estética. Disponibles en enrollables, romanas,
              panel japonés y blackout. Control de luz natural y privacidad con materiales de alta durabilidad.
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full" />Enrollables</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full" />Romanas</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full" />Panel japonés</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full" />Blackout</li>
            </ul>
            <Button variant="whatsapp" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Cotizar Persianas</a>
            </Button>
          </div>
        </div>

        {/* Cortinas */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">Cortinas</h3>
            <p className="text-muted-foreground font-light mb-4">
              Cortinas que transforman cualquier ambiente. Desde las más elegantes y sofisticadas hasta opciones
              funcionales para el control de luz. Telas importadas, confección a medida y asesoría personalizada.
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full" />Sheer y velos</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full" />Blackout térmico</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full" />Ondas perfectas</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full" />Motorización</li>
            </ul>
            <Button variant="whatsapp" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Cotizar Cortinas</a>
            </Button>
          </div>
          <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-xl">
            <img src={cortinasImg} alt="Cortinas" className="w-full h-80 md:h-96 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlindsSection;
