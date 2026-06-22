import Image from "next/image";
import type { Service } from "@/lib/site-data";
import type { ServiceVisual } from "@/lib/service-visuals";

type ServiceCardProps = {
  service: Service;
  index: number;
  visual: ServiceVisual;
  priority?: boolean;
};

export function ServiceCard({ service, index, visual, priority = false }: ServiceCardProps) {
  return (
    <article className="service-card" key={service.title}>
      <div className="service-card-media">
        <Image
          alt={visual.alt}
          className="service-card-image"
          fill
          priority={priority}
          sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 33vw"
          src={visual.image}
        />
        <span className="service-card-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="service-card-body">
        <service.icon size={24} aria-hidden="true" />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </article>
  );
}

export function PageFeatureServiceCard({
  service,
  index,
  visual,
  priority = false
}: ServiceCardProps) {
  return (
    <article className="page-feature-card" key={service.title}>
      <div className="page-feature-media">
        <Image
          alt={visual.alt}
          className="page-feature-image"
          fill
          priority={priority}
          sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 33vw"
          src={visual.image}
        />
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="page-feature-body">
        <service.icon size={23} aria-hidden="true" />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </article>
  );
}

export function SecondaryServiceCard({ service, visual }: Omit<ServiceCardProps, "index">) {
  return (
    <article className="secondary-service-item secondary-service-item--visual" key={service.title}>
      <div className="secondary-service-media">
        <Image
          alt={visual.alt}
          className="secondary-service-image"
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 33vw"
          src={visual.image}
        />
      </div>
      <div className="secondary-service-body">
        <service.icon size={20} aria-hidden="true" />
        <div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </div>
    </article>
  );
}
