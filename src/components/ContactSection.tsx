import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL_1 = "https://wa.me/573245607992?text=Hola%20WGPuertas";
const WHATSAPP_URL_2 = "https://wa.me/573117226787?text=Hola%20WGPuertas";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-foreground text-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Estamos para ti</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2">Contáctanos</h2>
          <p className="text-card/70 mt-4 max-w-xl mx-auto font-light">
            ¿Tienes preguntas o necesitas una cotización? Comunícate con nosotros por el canal que prefieras.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-card/10 rounded-xl p-6 text-center border border-card/10 hover:border-primary/40 transition-all">
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-heading font-semibold mb-2">WhatsApp</h4>
            <a href={WHATSAPP_URL_1} target="_blank" rel="noopener noreferrer" className="block text-sm text-card/60 hover:text-primary transition-colors">+57 324 560 7992</a>
            <a href={WHATSAPP_URL_2} target="_blank" rel="noopener noreferrer" className="block text-sm text-card/60 hover:text-primary transition-colors mt-1">+57 311 722 6787</a>
          </div>
          <a href="mailto:Puertasdeseguridadwg@gmail.com" className="bg-card/10 rounded-xl p-6 text-center hover:bg-card/15 transition-all border border-card/10 hover:border-primary/40">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-heading font-semibold mb-1">Correo</h4>
            <p className="text-sm text-card/60">Puertasdeseguridadwg@gmail.com</p>
          </a>
          <a href="https://maps.google.com/?q=Cl.+71c+%2328B-40,+Bogotá" target="_blank" rel="noopener noreferrer" className="bg-card/10 rounded-xl p-6 text-center hover:bg-card/15 transition-all border border-card/10 hover:border-primary/40">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-heading font-semibold mb-1">Ubicación</h4>
            <p className="text-sm text-card/60">Cl. 71c #28B-40, Bogotá</p>
          </a>
          <div className="bg-card/10 rounded-xl p-6 text-center border border-card/10">
            <div className="flex justify-center gap-4 mb-3">
              <Instagram className="w-8 h-8 text-primary" />
              <Facebook className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-heading font-semibold mb-1">Redes Sociales</h4>
            <p className="text-sm text-card/60">@wgpuertas</p>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-10 border border-card/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6!2d-74.08!3d4.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCl.+71c+%2328B-40%2C+Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación WGPuertas - Cl. 71c #28B-40, Bogotá"
          />
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="whatsapp" size="lg" asChild>
              <a href={WHATSAPP_URL_1} target="_blank" rel="noopener noreferrer" className="gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                324 560 7992
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={WHATSAPP_URL_2} target="_blank" rel="noopener noreferrer" className="gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                311 722 6787
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
