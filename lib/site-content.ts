export type ServiceItem = {
  slug: string;
  title: string;
  intro: string;
  description: string;
  audience: string;
  deliverables: string[];
  outcomes: string[];
};

export type CaseStudyItem = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  metric: string;
};

export type InsightItem = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  body: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "ai-strategy",
    title: "AI Strategy",
    intro: "A practical AI roadmap for teams that need clarity before they commit.",
    description:
      "We help leadership teams define where AI is worth using, how it should be introduced, and what should be built first.",
    audience: "Founders, CTOs, and operators evaluating meaningful AI adoption.",
    deliverables: [
      "Opportunity and feasibility review",
      "Prioritized roadmap",
      "Use case definition",
      "Delivery recommendation"
    ],
    outcomes: [
      "Clearer investment decisions",
      "Reduced implementation risk",
      "A sequence that fits the team"
    ]
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    intro: "Software that fits the workflow instead of forcing the workflow to change.",
    description:
      "We design and build internal tools and client-facing software with a focus on longevity, maintainability, and fit.",
    audience: "Teams replacing spreadsheets, disconnected tools, or generic off-the-shelf software.",
    deliverables: [
      "Scope and architecture",
      "Design direction",
      "Build plan and delivery phases",
      "Launch support"
    ],
    outcomes: [
      "Cleaner operations",
      "Less manual work",
      "A product that lasts"
    ]
  },
  {
    slug: "delivery-support",
    title: "Delivery Support",
    intro: "Clear execution support for projects that need stronger structure.",
    description:
      "We help teams move from loose plans to dependable delivery through checkpoints, clarity, and practical coordination.",
    audience: "Teams that need support keeping a complex initiative moving.",
    deliverables: [
      "Delivery framing",
      "Milestone planning",
      "Stakeholder alignment",
      "Progress reviews"
    ],
    outcomes: [
      "Less drift",
      "Better communication",
      "More predictable delivery"
    ]
  },
  {
    slug: "technical-advisory",
    title: "Technical Advisory",
    intro: "Decision support for moments where the technical call matters.",
    description:
      "We advise on direction, tradeoffs, and constraints so the team can choose the right path with confidence.",
    audience: "Leadership teams making critical product or platform decisions.",
    deliverables: [
      "Technical review",
      "Tradeoff analysis",
      "Recommendation memo",
      "Implementation guidance"
    ],
    outcomes: [
      "Better judgment under pressure",
      "Fewer expensive detours",
      "More confident leadership decisions"
    ]
  }
];

export const caseStudies: CaseStudyItem[] = [
  {
    slug: "roadmap-clarity",
    title: "Roadmap clarity for a leadership team",
    client: "Private software team",
    summary:
      "We helped the team decide what to build, what to defer, and how to phase the work.",
    challenge:
      "The leadership group had several competing priorities and no shared sequence for execution.",
    approach:
      "We broke the work into feasible decisions, clarified constraints, and produced a roadmap tied to business value.",
    result:
      "The team moved forward with a simpler scope and a stronger internal alignment.",
    metric: "35% faster decision cycle"
  },
  {
    slug: "delivery-system",
    title: "A calmer delivery system",
    client: "Growth-stage operator",
    summary:
      "We designed an operating rhythm that made a complex initiative easier to manage.",
    challenge:
      "The team was losing momentum because responsibilities and checkpoints were unclear.",
    approach:
      "We introduced a clearer process, a lighter review cadence, and a more visible handoff structure.",
    result:
      "Execution became easier to follow and the team spent less time correcting avoidable issues.",
    metric: "Fewer handoff errors"
  },
  {
    slug: "premium-presentation",
    title: "A stronger client presentation layer",
    client: "Technical consultancy",
    summary:
      "We improved the digital presence so the firm read like the quality of its work.",
    challenge:
      "The existing website underrepresented the team's expertise and made the company feel smaller than it was.",
    approach:
      "We simplified the story, sharpened the hierarchy, and used a more disciplined visual system.",
    result:
      "The company now presents with more confidence and a more credible first impression.",
    metric: "Stronger trust signals"
  }
];

export const insights: InsightItem[] = [
  {
    slug: "why-clarity-matters",
    title: "Why clarity matters more than features early on",
    summary:
      "A project is easier to deliver when the problem is framed clearly from the start.",
    category: "AI Strategy",
    body: [
      "Teams often rush toward implementation because features are visible and exciting. The better move is to slow the conversation down enough to define the actual problem.",
      "Clarity improves the quality of every decision that follows: scope, priorities, sequencing, and risk.",
      "A smaller, clearer build usually creates more value than a large and uncertain one."
    ]
  },
  {
    slug: "presenting-technical-partners",
    title: "How to present a technical partner with confidence",
    summary:
      "The website should reinforce judgment before the first call happens.",
    category: "Brand",
    body: [
      "A technical company does not need louder design. It needs a presentation that feels deliberate, calm, and precise.",
      "That means strong hierarchy, clear services, and proof that answers real questions instead of inflating the story.",
      "The goal is not decoration. The goal is trust."
    ]
  },
  {
    slug: "calm-delivery",
    title: "What makes a delivery process feel calm",
    summary:
      "Good delivery is visible, predictable, and easy to understand.",
    category: "Delivery",
    body: [
      "Delivery feels calm when people know what is happening, what matters next, and who owns each step.",
      "That comes from clarity in scope, visibility in checkpoints, and consistency in communication.",
      "A calm process does not mean slow work. It means the team spends less energy on avoidable confusion."
    ]
  }
];

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug);
}
