import { Button } from "@/components/ui/button";
import { Shield, Key, Lock, Wrench } from "lucide-react";
import servicesImg from "@/assets/services.jpg";

const WHATSAPP_URL = "https://wa.me/573000000000?text=Hola%20WGPuertas,%20necesito%20un%20servicio";

const services = [
  { icon: Shield, title: "Instalación de Puertas", desc: "Instalación profesional con garantía" },
  { icon: Key, title: "Desbloqueo de Cerraduras", desc: "Servicio de emergencia 24/7" },
  { icon: Lock, title: "Apertura de Cajas Fuertes", desc: "Técnicos certificados" },
  { icon: Wrench, title: "Mantenimiento", desc: "Preventivo y correctivo" },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-foreground text-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={servicesImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Soluciones integrales</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2">
            Nuestros Servicios
          </h2>
          <p className="text-card/70 mt-4 max-w-2xl mx-auto text-lg font-light">
            Equipo técnico especializado para resolver cualquier situación de seguridad en tu hogar o negocio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-card/10 hover:border-primary/50 hover:bg-card/15 transition-all text-center group">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-card mb-2">{s.title}</h4>
              <p className="text-sm text-card/60 font-light">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="whatsapp" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Solicitar Servicio por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
