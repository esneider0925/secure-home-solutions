import { Play } from "lucide-react";
import { useState } from "react";

const videos = [
  { src: "/videos/video-1.mp4", label: "Proceso de fabricación" },
  { src: "/videos/video-2.mp4", label: "Instalación de puerta" },
  { src: "/videos/video-3.mp4", label: "Detalles de cerraduras" },
  { src: "/videos/video-4.mp4", label: "Puerta instalada" },
  { src: "/videos/video-5.mp4", label: "Fabricación en planta" },
  { src: "/videos/video-6.mp4", label: "Maquinaria especializada" },
  { src: "/videos/video-7.mp4", label: "Ensamble de puerta" },
  { src: "/videos/video-8.mp4", label: "Acabados finales" },
];

const VideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="section-padding bg-foreground text-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Nuestro trabajo</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2">
            Videos de Instalaciones
          </h2>
          <p className="text-card/70 mt-4 max-w-2xl mx-auto text-lg font-light">
            Conoce de primera mano nuestro proceso de fabricación e instalación de puertas de seguridad.
          </p>
        </div>

        {/* Featured video */}
        <div className="mb-8">
          <div className="rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <video
              key={activeVideo ?? 0}
              controls
              className="w-full aspect-video bg-dark"
              poster=""
            >
              <source src={videos[activeVideo ?? 0].src} type="video/mp4" />
            </video>
          </div>
          <p className="text-center text-card/60 mt-3 font-body text-sm">
            {videos[activeVideo ?? 0].label}
          </p>
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 max-w-4xl mx-auto">
          {videos.map((video, i) => (
            <button
              key={i}
              onClick={() => setActiveVideo(i)}
              className={`relative rounded-lg overflow-hidden aspect-square group border-2 transition-colors ${
                (activeVideo ?? 0) === i ? "border-primary" : "border-transparent"
              }`}
            >
              <video src={video.src} className="w-full h-full object-cover" muted preload="metadata" />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors flex items-center justify-center">
                <Play size={16} className="text-card/80" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
