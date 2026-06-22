import type { Service } from "@/lib/site-data";
import { services } from "@/lib/site-data";

export type ServiceVisual = Service["visual"];

export type ServiceCardData = Service;

export const homeCoreServices: ServiceCardData[] = services;

export const serviceVisuals: ServiceVisual[] = services.map((service) => service.visual);
