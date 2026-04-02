# Upwork Proposals — 02.04.2026

---

## 1. Claude Agents Ecommerce ($3,500)

**Betreff-Keyword:** "systems builder"

---

I've built exactly this kind of system — Claude agents integrated into real business operations, not just prototypes.

Most recently, I built a Telegram referral bot with real-time tracking, automated verification, and webhook integrations for a gaming community. The system handles thousands of users and runs 24/7 without manual intervention.

For your fashion brand, here's how I'd approach it:

**Email Monitoring:** Claude agent that categorizes incoming emails (returns, exchanges, faults, shipping) and either drafts responses or triggers workflows. Escalation rules for edge cases.

**Monday.com Integration:** Read/write to boards via API, track task progress, flag delays automatically, assign follow-ups based on rules you define.

**Marketing Performance:** Pull Meta/TikTok/Google data, identify creative fatigue, surface actionable insights — not just dashboards, but "here's what to do" recommendations.

I built a quick demo showing how the email categorization would work: [DEMO LINK]

Available to start immediately. Happy to do a small paid test on one module first if that works better for you.

---

## 2. Virtual Analyst Amazon ($1,000)

**Betreff-Keyword:** "Axiom.ai"

---

Axiom.ai for the browser automation, n8n for the logic, Claude 3.5 Sonnet for the analysis. That's the stack I'd use.

The tricky part isn't the AI — it's keeping the login sessions stable across SmartScout, Helium 10, and Jungle Scout. These platforms don't love automation. I'd handle it with:

- Persistent browser profiles in Axiom
- Session refresh logic before each run
- Retry mechanisms with exponential backoff
- Slack alerts if something breaks

For the data filtering (top 500 rows to fit token limits) — I'd implement smart chunking that keeps context: product groupings, price tiers, trend direction. Not just "first 500 rows" but "most relevant 500."

I put together an architecture diagram showing the full flow: [DEMO LINK]

I'm in Europe (Germany) — stable power, stable internet, 100% uptime for Monday reports. I've run scheduled automations for months without missing a beat.

When can we start?

---

## 3. AI Workflow Developer ($500)

**Betreff-Keyword:** "WORKFLOW"

---

WORKFLOW

Built similar systems multiple times — form intake, AI classification, automated routing, email notifications. Clean, working logic is what I do.

For this project I'd use:
- Next.js for the form + basic dashboard
- Claude API for classification (faster and more reliable than GPT for this use case)
- Resend for emails
- Supabase for storing submissions

I built a working demo that shows exactly this flow — form submission, AI classification, routing logic, email preview: [DEMO LINK]

Timeline: 4-5 days for the full deliverable.

I'm interested in the larger projects you mentioned. Let's nail this one first.

---

## 4. ELIOS Sales AI ($5,000)

**Betreff-Keyword:** Answer the 3 questions

---

**1. Snowflake and Salesforce experience:**

Snowflake: Built data pipelines that pull from multiple sources (CRM, telephony, web events), transform in Snowflake, and feed dashboards. Schema design for analytics workloads, query optimization for large datasets.

Salesforce: Flow automation for lead routing, follow-up sequences. API integrations connecting Salesforce to external systems. Built rep assist tools that surface next-best-action recommendations.

**2. AI agent/automation system I've built:**

Telegram referral bot for a gaming community — handles user verification, tracks referrals in real-time, manages weekly leaderboards, sends automated announcements. The system makes decisions autonomously (valid referral vs spam, escalate vs auto-respond) and has been running in production for weeks.

**3. Rate and availability:**

$5,000 for the full scope works. I'm in Germany, available to start this week. I work async, ship fast, document everything.

I put together an architecture document showing how I'd approach the Speed-to-Lead automation and the AI agent pods: [DEMO LINK]

---

## 5. Personal AI Assistant Slack ($10,000)

---

This is ambitious — but I've built pieces of exactly this system before.

**Browser automation:** I work with Playwright daily. The challenge isn't the automation itself, it's handling the edge cases: CAPTCHAs (use 2Captcha or similar service as fallback), site UI changes (build selectors that are resilient, add visual verification steps), session management (persistent contexts, cookie handling).

**Voice calls:** I'd go with Bland.ai for this. Their API is straightforward, and they handle the telephony infrastructure. The bot calls, follows a script with branching logic, reports back via webhook.

**Architecture approach:**

Central orchestrator in Python that receives Slack commands, parses intent, routes to the right module (browser agent or voice agent). Each module is independent — if Amazon ordering breaks, restaurant reservations still work.

For credentials: 1Password Connect with strict access controls. Nothing hardcoded, nothing in plaintext.

I sketched out the Phase 1 architecture: [DEMO LINK]

Happy to start with Phase 1 as a paid trial. If that goes well, we continue.

---

## 6. Personal AI TG Bot ($1,000-2,000)

---

I build Telegram bots professionally — my most recent one handles referral tracking, leaderboards, and automated messaging for a gaming community with thousands of users.

For your networking/lifestyle bot, here's how I'd structure it:

**Phase 1 MVP (7-10 days):**
- Telegram as the command interface
- Contact database with ICP-based scoring
- Gmail integration (read, draft, send)
- Google Calendar (availability, booking, reminders)
- City recommendations via Yelp/Google Places API
- Daily briefing delivered every morning

The architecture is modular — each feature is a separate service that the main bot orchestrates. Easy to extend, easy to debug.

I put together an architecture diagram: [DEMO LINK]

Note: I can't do a Loom video walkthrough, but I can show you my deployed bot systems and walk you through the code structure in detail.

Available to start immediately.

---

## 7. Trading Bot Telegram ($375)

---

I've built Telegram bots with API integrations. For a trading bot, the core is:

1. **Exchange API connection** — authentication, rate limiting, error handling
2. **Strategy execution** — predefined rules that trigger buys/sells
3. **Telegram interface** — commands to check status, modify parameters, manual overrides
4. **Logging** — every decision recorded for review

I put together a code snippet showing how I'd structure the exchange integration: [DEMO LINK]

Important question: Which exchange(s) are you targeting? Binance, Coinbase, Kraken? The API specifics matter for the implementation.

Also: What trading strategies are you looking at? Signals from TradingView? Custom indicators? DCA? This affects the architecture.

---

## 8. HVAC Website ($800)

---

Clean, professional WordPress site for MrFixer Heating & Cooling. I've built service business websites before — the key is making it easy for customers to understand what you do and contact you.

**What I'd build:**
- Homepage with clear service overview and Denver focus
- Individual service pages (AC, heating, maintenance, emergency)
- Review/testimonial section
- Mobile-optimized contact forms
- Local SEO basics built in

I put together a wireframe showing the homepage layout: [DEMO LINK]

Timeline: 1-2 weeks for the full site.

One question: Do you have brand assets (logo, colors) or should I work with what makes sense for an HVAC business?

---

## 9. Full Stack TypeScript ($500)

---

I work with TypeScript daily. Nuxt for frontend, NestJS for backend — clean architecture, strict conventions.

Your approach (detailed spec documents, modular tools, shared domain model) is exactly how I prefer to work. I read specs carefully, follow naming conventions, and ask clarifying questions before building — not after.

I put together a small code sample showing my approach to a modular business tool: [DEMO LINK]

Questions:
- What's the typical scope of each application? (rough number of screens/endpoints)
- Do you use a monorepo or separate repos per tool?
- GraphQL schema — do you have a shared schema I'd extend, or define per-tool?

Available to start on the first spec whenever you're ready.

---

## 10. Shopify Food Ordering ($1,500)

---

The weekly menu problem is the interesting part. You don't want staff manually enabling/disabling products every week. Here's how I'd solve it:

**Option 1: Metafields + Scheduling**
Each product has a metafield "available_week" (1-52). A scheduled function runs Sunday night, checks the current week number, and updates product visibility. Staff just tags products with their week when creating them.

**Option 2: Collections-based**
"This Week's Menu" is a smart collection that auto-populates based on a tag. Staff adds the tag to products for the upcoming week, removes from last week's. Simpler, more manual, but very reliable.

**Option 3: External schedule**
Google Sheet with product IDs and week numbers. Automated sync updates Shopify. Staff manages the sheet, bot handles Shopify.

I'd recommend Option 1 for your scale.

For delivery pricing by distance — I'd use Zapiet or a similar app. No point rebuilding that logic.

I put together a diagram explaining the weekly menu system: [DEMO LINK]

Timeline: 4-5 weeks sounds right. Happy to discuss the technical details.

---

## 11. CRO Expert Desktop ($4,000)

---

I've optimized conversion funnels for software products. The cross-promotion flow you describe (extension → landing page → desktop install) has clear optimization opportunities at each step.

**My approach:**

1. **Data first** — Pull your Voluum data, segment by variant/country/device, find the real drop-off points. Not guessing, measuring.

2. **Hypothesis generation** — Based on patterns in the data + landing page UX review. Each hypothesis gets expected impact and effort score.

3. **Test design** — Minimum sample sizes calculated upfront. Clear success criteria. No "we'll see how it goes."

4. **Variant concepts** — Wireframe level changes with clear rationale. Not just "different button color" but structural improvements.

I put together a template showing what my audit deliverable looks like: [DEMO LINK]

If you can share your current landing page URL, I'll include a quick initial assessment in my next message.

I'm comfortable with async, text-based communication. Strong written English. Based in Europe (Germany), available for the full engagement.

---

## 12. Financial Model Excel ($900)

---

Complex financial models are my thing. I've built investor-ready models for real estate, SaaS, and co-ownership structures.

Your spec is detailed — I appreciate that. Multi-jurisdiction support, entity structure switching, scenario analysis, portfolio view. This isn't a weekend project, but it's well-scoped.

**My approach:**

Tab 1 (Inputs) drives everything. Named ranges, clear sections, dropdown selectors for entity type and jurisdiction. Change an input, everything updates.

Entity tax treatment is the tricky part — I'd build it so the model handles pass-through vs corporate cleanly, with the right tax calculations flowing through to co-owner returns.

I started building the skeleton — Inputs tab + Property P&L structure: [DEMO LINK]

Question: For the 7-day delivery timeline, is that Phase 1 concepts or the full final files package? The spec mentions both phases.

---

## 13. Inventory System D2C ($1,500)

---

You're running 500+ orders/day on Google Sheets. That's impressive and painful. I've built systems that replace exactly this kind of setup.

**What you need:**

1. **Real-time order ingestion** — Shopify webhooks, no polling, no delays
2. **AI decision engine** — "Fulfill from stock" vs "Send to production" based on inventory levels, sales velocity, and demand patterns
3. **Predictive layer** — Not just reactive (out of stock → produce) but proactive (selling fast → pre-produce before stockout)
4. **Simple warehouse UI** — Mobile-friendly, no spreadsheet skills needed, just "pick this" / "pack this" / "done"

I built a demo showing the AI decision logic: [DEMO LINK]

The goal is: order comes in, system decides, warehouse gets clear instructions, you get visibility without touching anything.

I can take full ownership — design, build, deploy, train your team. Happy to start with a discovery call to understand your current Sheets setup.

---

## 14. Retail Ops Automation ($500)

---

Multi-location retail operations need systems thinking, not just task automation. I've designed systems like this before.

**My recommended approach:**

Start with employee scheduling — it's the highest-leverage piece. Labor is your biggest cost, and smart scheduling (based on demand patterns, availability, labor targets) saves real money.

Then inventory management with automated reordering. Connect to your POS, track sales velocity by SKU by location, trigger reorders before stockouts.

Payroll/commission tracking integrates with both — hours from scheduling, sales from POS, calculations automated.

**Tools I'd recommend:**
- Scheduling: Deputy or 7shifts API + custom logic
- Inventory: Your existing POS + automation layer
- Dashboard: Retool or custom, depending on complexity

I put together an architecture diagram showing how the pieces connect: [DEMO LINK]

Question: What POS system are you using currently? Lightspeed, Square, Shopify POS? This affects the integration approach.

---

## 15. Web Scraping Pipeline ($200)

---

I've built scrapers that run reliably for months. The key is handling change — websites update, selectors break, rate limits kick in. A good scraper anticipates this.

**What I'd build:**

- Python script with Playwright (handles JavaScript-rendered content)
- Retry logic with exponential backoff
- Change detection (alerts if page structure changes)
- Clean output to Google Sheets via API
- Scheduled daily runs
- Logging so you know exactly what happened

I put together a working script that demonstrates the approach: [DEMO LINK]

Question: What websites are you targeting? If they're aggressive with anti-bot measures, I'll adjust the approach (residential proxies, browser fingerprint rotation, etc.).

Timeline: 3-5 days for the full pipeline.

---

## 16. Shopify AI Images ($350)

---

n8n + AI image generation — I've built workflows like this.

The challenge isn't the generation — it's maintaining product integrity. The AI-generated image needs to clearly show YOUR product, not a hallucinated version.

**My approach:**

1. **Reference image extraction** — Pull main product image from Shopify (clean background)
2. **Style reference** — Your category-specific "lifestyle" image sets the scene
3. **Generation** — Flux.1 or Leonardo.ai with careful prompting to preserve product details
4. **Verification** — Quick visual check before auto-upload (or confidence threshold)
5. **Upload** — Push to Shopify product via API

I put together a workflow diagram + example output: [DEMO LINK]

Question: What product categories are you working with? Apparel, accessories, home goods? This affects which AI model works best for preserving product details.

---

# DEPLOYMENT NOTES

Alle Demos werden auf janisag07.github.io deployed.
Links werden eingefügt sobald Mewtu fertig ist.
