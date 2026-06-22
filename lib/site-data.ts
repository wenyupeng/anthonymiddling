import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  FileCheck2,
  LucideIcon,
  MessagesSquare,
  NotebookTabs,
  PhoneCall,
  ShieldCheck,
  Waves
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Building permits",
    description:
      "Building permits issued for all classes of buildings, with plans and documents assessed against the National Construction Code.",
    icon: FileCheck2
  },
  {
    title: "Building inspections",
    description:
      "Mandatory building inspections carried out with practical trade knowledge and detailed stage-by-stage checklists.",
    icon: ClipboardCheck
  },
  {
    title: "Occupancy permits",
    description:
      "Certification support for occupancy requirements so commercial and residential projects can move forward with confidence.",
    icon: Building2
  },
  {
    title: "Swimming pool compliance",
    description:
      "Swimming pool compliance inspections and reports, including pool fencing requirements and practical rectification guidance.",
    icon: Waves
  },
  {
    title: "Pre-design advice",
    description:
      "Early consultation for architects, builders, designers, developers, councils and owner builders before documentation is locked in.",
    icon: MessagesSquare
  },
  {
    title: "Council consultation",
    description:
      "Liaison with council officers plus advice on the Building Act, Building Regulations, NCC and performance-based solutions.",
    icon: BriefcaseBusiness
  }
];

export const achievements = [
  { label: "20+ years of building surveying and practical hands-on trade experience" },
  { label: "Designs checked thoroughly and approved in accordance with the NCC" },
  { label: "Personalised and independent permit and inspection service" },
  { label: "Available for online Zoom meetings, consultation and site meetings" }
];

export const adviceAreas = [
  "National Construction Code (NCC)",
  "Disability Access & Mobility to AS 1428",
  "Energy efficient design",
  "Alternative Solutions using Performance Based NCC",
  "Telephone advice on the NCC"
];

export const portalBenefits = [
  {
    title: "Fast easy online portal",
    description:
      "PermAssist can provide a quick turnaround for building permit and approval management.",
    icon: ShieldCheck
  },
  {
    title: "Online approvals",
    description:
      "Upload and download documents, track application status and reduce administration time.",
    icon: BadgeCheck
  },
  {
    title: "Technical advice",
    description:
      "Timely technical advice and checklists are provided by email or phone.",
    icon: PhoneCall
  },
  {
    title: "Reliable outcomes",
    description:
      "Inspection checklists support precise, dependable results across each stage.",
    icon: NotebookTabs
  }
];

export const quotationItems = [
  "Owner's name, mobile number and email address",
  "Property address",
  "Description of the project",
  "Engineering design and architectural plans",
  "Estimated construction cost inclusive of GST"
];

export const contactDetails = {
  address: "SPACES - Office 1107, 1 Main Street, Box Hill 3128 VIC",
  phone: "0419 032 430",
  email: "asmidd@bigpond.net.au",
  registration: "Reg No. BS-U1092 and IN-U1079",
  qualification: "Bachelor of Technology Building Surveying, Swinburne University"
};

export const audienceGroups = [
  "Architects",
  "Builders",
  "Architectural designers",
  "Structural engineers",
  "Developers",
  "Councils",
  "Owner builders"
];

export const adminCards = [
  { label: "Open inquiries", value: "24", detail: "6 need review today" },
  { label: "Scheduled items", value: "13", detail: "Across content and events" },
  { label: "Audience growth", value: "+18%", detail: "Compared with last month" },
  { label: "Tasks due", value: "7", detail: "2 are high priority" }
];

export const recentActivity = [
  "New partnership inquiry assigned to review.",
  "Homepage service copy moved to draft approval.",
  "Monthly performance report generated.",
  "Admin settings checklist updated."
];
