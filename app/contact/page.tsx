import {
  ClipboardList,
  Mail,
  MapPin,
  MessageSquareText,
  Navigation,
  Phone,
  Send
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { contactDetails, quotationItems } from "@/lib/site-data";

export default function ContactPage() {
  const phoneHref = `tel:${contactDetails.phone.replaceAll(" ", "")}`;
  const emailHref = `mailto:${contactDetails.email}`;
  const mapQuery = encodeURIComponent(contactDetails.address);
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <main>
      <SiteHeader />
      <section className="page-hero page-hero-contact">
        <div className="page-hero-content">
          <p className="eyebrow">Contact</p>
          <h1>Prepare your enquiry, then choose the easiest way to send it.</h1>
          <p>
            Find the quotation details to include, call or email directly, check
            the Box Hill office location, or send a project message through the form.
          </p>
        </div>
      </section>

      <div className="inner-page-flow">
        <section className="contact-hub-section" id="quotation">
          <div className="contact-hub-intro">
            <div>
              <p className="eyebrow">Quotation enquiries</p>
              <h2>Include the details that let the first review be specific.</h2>
            </div>
            <p>
              Plans, owner contact details and cost information help confirm the
              approval pathway, inspection scope and likely next steps without a
              long follow-up chain.
            </p>
          </div>

          <div className="contact-hub-grid">
            <div className="quotation-checklist-panel">
              <div className="contact-panel-heading">
                <ClipboardList size={22} aria-hidden="true" />
                <div>
                  <span>Before you send</span>
                  <h3>Quotation checklist</h3>
                </div>
              </div>
              <ol className="quotation-step-list">
                {quotationItems.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ol>
            </div>

            <div className="contact-method-panel">
              <div className="contact-panel-heading">
                <MessageSquareText size={22} aria-hidden="true" />
                <div>
                  <span>Contact options</span>
                  <h3>Talk to the right channel</h3>
                </div>
              </div>
              <div className="contact-method-list">
                <a className="contact-method-item" href={phoneHref}>
                  <Phone size={20} aria-hidden="true" />
                  <span>Phone</span>
                  <strong>{contactDetails.phone}</strong>
                </a>
                <a className="contact-method-item" href={emailHref}>
                  <Mail size={20} aria-hidden="true" />
                  <span>Email</span>
                  <strong>{contactDetails.email}</strong>
                </a>
                <a className="contact-method-item" href={googleMapsUrl} target="_blank" rel="noreferrer">
                  <MapPin size={20} aria-hidden="true" />
                  <span>Address</span>
                  <strong>{contactDetails.address}</strong>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-location-section" aria-labelledby="contact-location-title">
          <div className="contact-location-copy">
            <p className="eyebrow">Office location</p>
            <h2 id="contact-location-title">Box Hill office address on Google Maps.</h2>
            <p>
              Use the map for directions to the office. For project enquiries,
              send documentation first so the conversation can focus on the approval pathway.
            </p>
            <a className="secondary-action" href={googleMapsUrl} target="_blank" rel="noreferrer">
              Open in Google Maps <Navigation size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-map-frame">
            <iframe
              aria-label={`Google Map for ${contactDetails.address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapEmbedUrl}
              title="Anthony Middling Building Surveyors office map"
            />
          </div>
        </section>

        <section className="contact-form-section" aria-labelledby="contact-form-title">
          <div className="contact-form-copy">
            <p className="eyebrow">Email communication</p>
            <h2 id="contact-form-title">Send a concise project message.</h2>
            <p>
              The form opens an email draft using your mail app. Attach plans,
              engineering documents and supporting files before sending.
            </p>
          </div>

          <form className="contact-form" action={emailHref} method="post" encType="text/plain">
            <div className="contact-field-grid">
              <label>
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                <span>Phone</span>
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
            </div>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              <span>Property address</span>
              <input name="property_address" type="text" autoComplete="street-address" />
            </label>
            <label>
              <span>Enquiry type</span>
              <select name="enquiry_type" defaultValue="Quotation enquiry">
                <option>Quotation enquiry</option>
                <option>Building permit</option>
                <option>Building inspection</option>
                <option>Occupancy permit</option>
                <option>Swimming pool compliance</option>
                <option>General advice</option>
              </select>
            </label>
            <label>
              <span>Project message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Briefly describe the project, current stage, plans available and estimated construction cost."
                required
              />
            </label>
            <div className="contact-form-footer">
              <p>
                Include attachments in the email draft after it opens.
              </p>
              <button className="primary-action" type="submit">
                Create email draft <Send size={17} aria-hidden="true" />
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
