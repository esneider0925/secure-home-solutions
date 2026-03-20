const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-card/10 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-card/50 text-sm font-light">
          © {new Date().getFullYear()} WGPuertas — Comercializador autorizado de DEPROSEG N.T. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
