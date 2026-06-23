export const homeHero = {
  eyebrow: "Building Surveyors Pty Ltd",
  title: "Clear building approval advice from first enquiry to inspection.",
  description:
    "Building permits, inspections, occupancy permits and pool compliance support for commercial and residential projects across Victoria.",
  note: "Independent advice, practical assessment and clear next steps.",
  primaryAction: "Prepare quotation enquiry",
  secondaryAction: "Login to PermAssist"
};

export const homeValueSection = {
  eyebrow: "Our value",
  title: "Practical surveying support that keeps approvals moving.",
  summary:
    "Clients get clear advice on what is required, which service fits the project, and what to prepare before requesting a quotation.",
  body:
    "The process is simple: choose the service you need, use PermAssist for permit administration where required, then send complete project details so the first review is productive."
};

export const homePathCards = [
  {
    href: "/services",
    step: "01",
    className: "intro-image-card--services",
    title: "Services",
    description: "Permit pathways."
  },
  {
    href: "/about",
    step: "02",
    className: "intro-image-card--about",
    title: "Value",
    description: "Clear advice."
  },
  {
    href: "/contact",
    step: "03",
    className: "intro-image-card--contact",
    title: "Contact",
    description: "Quotation details."
  }
] as const;

export const homeServiceSection = {
  eyebrow: "Services",
  title: "Core services for approval, inspection and compliance.",
  summary: "The homepage highlights the services clients most often need first.",
  tags: ["Building permits", "Inspections", "Occupancy permits"]
};

export const homeProofSection = {
  eyebrow: "Why clients choose us",
  title: "Independent advice backed by technical and trade experience.",
  summary:
    "Clients receive practical guidance from a building surveying team that understands documentation, construction realities and NCC requirements."
};

export const homePortalSection = {
  eyebrow: "PermAssist",
  title: "Submit documents and track permit progress online.",
  description:
    "PermAssist gives clients a simple place to upload documents, follow application progress and keep permit communication organised.",
  statusDescription: "Upload plans, check progress and keep permit tasks organised."
};

export const homeEnquirySection = {
  eyebrow: "Quotation enquiry",
  title: "What to provide when you enquire.",
  summary:
    "Send these details together so the project can be reviewed clearly and the quotation response can move without avoidable follow-up.",
  flow: ["Project contact", "Plans and scope", "Cost estimate"],
  fineprint: "A complete enquiry helps confirm the right service, likely permit pathway and next practical step.",
  checklistTitle: "Include these details in your first message."
};

export const homeQuotationItems = [
  {
    title: "Main contact details",
    description: "Owner's name, mobile number and email address."
  },
  {
    title: "Property address",
    description: "Site address plus any lot or unit details."
  },
  {
    title: "Project scope",
    description: "Briefly describe the proposed building work."
  },
  {
    title: "Plans and documents",
    description: "Attach architectural plans, engineering design and revisions."
  },
  {
    title: "Estimated construction cost",
    description: "Include GST in the current project cost estimate."
  }
] as const;
