import type { Metadata } from "next";
import { Activity, Inbox, LayoutDashboard, Settings, UsersRound } from "lucide-react";
import Link from "next/link";
import { adminCards, recentActivity } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminPage() {
  return (
    <main className="admin-shell">
      <aside className="admin-sidebar" aria-label="Admin navigation">
        <Link className="admin-brand" href="/">
          AM
        </Link>
        <nav>
          <a className="admin-nav-item active" href="#overview">
            <LayoutDashboard size={18} aria-hidden="true" />
            Overview
          </a>
          <a className="admin-nav-item" href="#inquiries">
            <Inbox size={18} aria-hidden="true" />
            Inquiries
          </a>
          <a className="admin-nav-item" href="#audience">
            <UsersRound size={18} aria-hidden="true" />
            Audience
          </a>
          <a className="admin-nav-item" href="#settings">
            <Settings size={18} aria-hidden="true" />
            Settings
          </a>
        </nav>
      </aside>

      <section className="admin-main" id="overview">
        <header className="admin-topbar">
          <div>
            <p className="eyebrow">Management system</p>
            <h1>Operations dashboard</h1>
          </div>
          <Link className="secondary-action compact" href="/">
            View website
          </Link>
        </header>

        <div className="admin-card-grid">
          {adminCards.map((card) => (
            <article className="admin-card" key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <p>{card.detail}</p>
            </article>
          ))}
        </div>

        <div className="admin-workspace">
          <section className="admin-panel" id="inquiries">
            <div className="panel-title">
              <h2>Inquiry queue</h2>
              <span>Live</span>
            </div>
            <div className="lead-table" role="table" aria-label="Inquiry queue">
              <div role="row" className="lead-row lead-head">
                <span role="columnheader">Contact</span>
                <span role="columnheader">Need</span>
                <span role="columnheader">Status</span>
              </div>
              <div role="row" className="lead-row">
                <span role="cell">Residential owner</span>
                <span role="cell">Building permit</span>
                <span role="cell">Qualified</span>
              </div>
              <div role="row" className="lead-row">
                <span role="cell">Design consultant</span>
                <span role="cell">NCC advice</span>
                <span role="cell">New</span>
              </div>
              <div role="row" className="lead-row">
                <span role="cell">Builder</span>
                <span role="cell">Inspection booking</span>
                <span role="cell">Scheduled</span>
              </div>
            </div>
          </section>

          <section className="admin-panel">
            <div className="panel-title">
              <h2>Activity</h2>
              <Activity size={18} aria-hidden="true" />
            </div>
            <div className="activity-list">
              {recentActivity.map((item) => (
                <div className="activity-item" key={item}>
                  <span />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

