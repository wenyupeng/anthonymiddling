type QuotationItem = {
  title: string;
  description?: string;
};

type QuotationListProps = {
  items: string[] | QuotationItem[];
  variant: "home" | "services" | "contact";
  ariaLabel: string;
};

function getTitle(item: string | QuotationItem) {
  return typeof item === "string" ? item : item.title;
}

function getDescription(item: string | QuotationItem) {
  return typeof item === "string" ? undefined : item.description;
}

export function QuotationList({ items, variant, ariaLabel }: QuotationListProps) {
  if (variant === "home") {
    return (
      <ol className="home-enquiry-order" aria-label={ariaLabel}>
        {items.map((item, index) => (
          <li key={getTitle(item)}>
            <span className="home-enquiry-order-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <strong>{getTitle(item)}</strong>
              {getDescription(item) && <p>{getDescription(item)}</p>}
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (variant === "services") {
    return (
      <div className="services-next-panel" aria-label={ariaLabel}>
        {items.map((item, index) => (
          <div className="services-next-item" key={getTitle(item)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{getTitle(item)}</strong>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ol className="quotation-step-list" aria-label={ariaLabel}>
      {items.map((item, index) => (
        <li key={getTitle(item)}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{getTitle(item)}</strong>
        </li>
      ))}
    </ol>
  );
}

export const homeQuotationItems: QuotationItem[] = [
  {
    title: "Owner's name, mobile number, and email address",
    description: "Use the main contact for the project."
  },
  {
    title: "Property address",
    description: "Include the site location and any lot details."
  },
  {
    title: "Description of the project",
    description: "Summarise the proposed works in a few lines."
  },
  {
    title: "Engineering design and architectural plans",
    description: "Attach any drawings, design documents, or revisions."
  },
  {
    title: "Estimated construction cost inclusive of GST",
    description: "Provide the best current estimate for the works."
  }
];
