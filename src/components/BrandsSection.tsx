import logoSCC from "@/assets/logo-scc.png";
import logoDPS from "@/assets/DEPROSEG.png";

const BrandsSection = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-body font-semibold uppercase tracking-widest text-muted-foreground mb-8">
          Marcas Aliadas
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          <div className="flex flex-col items-center gap-2">
            <img src={logoDPS} alt="Secure Core Consulting S.A.S." className="h-16 md:h-16 w-auto" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={logoSCC} alt="Secure Core Consulting S.A.S." className="h-12 md:h-16 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
