import { Button } from "@/components/ui/button";
import locksImg from "@/assets/locks-collection.jpg";

const WHATSAPP_URL = "https://wa.me/573000000000?text=Hola%20WGPuertas,%20quiero%20cotizar%20cerraduras";

const locks = [
  { name: "Cerradura Multipunto", desc: "Máxima seguridad con 3 puntos de anclaje" },
  { name: "Cerradura Digital", desc: "Acceso con huella, código o tarjeta" },
  { name: "Cerradura de Sobreponer", desc: "Instalación rápida y resistente" },
  { name: "Cerradura de Embutir", desc: "Integrada al marco de la puerta" },
];

const LocksSection = () => {
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

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={locksImg} alt="Colección de cerraduras" className="w-full h-96 object-cover" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {locks.map((lock) => (
              <div key={lock.name} className="bg-warm-bg rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all">
                <h4 className="font-heading font-semibold text-foreground mb-2">{lock.name}</h4>
                <p className="text-sm text-muted-foreground font-light">{lock.desc}</p>
              </div>
            ))}
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
