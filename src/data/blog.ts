export interface BlogSection {
  heading: string;
  paragraphs: string[];
  points?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  publishedLabel: string;
  readTime: string;
  icon: 'ai' | 'systems' | 'website';
  image: string;
  imageAlt: string;
  introduction: string;
  sections: BlogSection[];
  conclusion: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'where-to-start-with-ai-in-your-organisation',
    title: 'Where should your organisation start with AI?',
    description: 'A practical way to identify useful AI opportunities without beginning with a tool or a large technology project.',
    category: 'AI consultancy',
    publishedAt: '2026-07-27',
    publishedLabel: '27 July 2026',
    readTime: '5 min read',
    icon: 'ai',
    image: '/images/blog/ai-opportunities.webp',
    imageAlt: 'A connected AI core linking organised workflow and information panels',
    introduction:
      'The best place to begin with AI is usually not a product demonstration. It is a clear, repeated problem that affects staff, customers or the quality of a service. Starting with the work makes it easier to judge whether AI is useful, what information it needs and how much oversight is required.',
    sections: [
      {
        heading: 'Start with a task, not a tool',
        paragraphs: [
          'List the tasks that take too long, create repeated questions or require people to search through several sources. Good starting points are specific enough to observe and measure.',
          'For example, “use AI in customer service” is broad. “Help staff find the approved answer to common service questions” describes a task, a user and a useful outcome.',
        ],
      },
      {
        heading: 'Check the information behind the task',
        paragraphs: [
          'AI output depends on the information and instructions it receives. Before automating anything, check whether the source material is current, accurate, appropriately organised and safe to use.',
          'If staff already disagree about the correct process, technology may reproduce that confusion. Clarifying the process can be more valuable than adding AI immediately.',
        ],
      },
      {
        heading: 'Choose a low-risk first use',
        paragraphs: [
          'A first project should be useful but contained. It should allow staff to review the result before it affects a customer, a published document or an important decision.',
        ],
        points: [
          'Summarising approved internal information',
          'Drafting routine content for staff review',
          'Classifying or routing non-sensitive enquiries',
          'Helping staff search an agreed knowledge base',
        ],
      },
      {
        heading: 'Define what success means',
        paragraphs: [
          'Decide how you will know whether the change helped. Useful measures might include time saved, fewer repeated questions, faster response times or fewer avoidable errors.',
          'Include quality and safety checks as well as speed. A faster process is not an improvement if staff must spend more time correcting unreliable output.',
        ],
      },
    ],
    conclusion:
      'A focused assessment can turn general interest in AI into a sensible first step. Begin with the organisational need, test on a manageable scale and keep people responsible for reviewing important outcomes.',
  },
  {
    slug: 'five-signs-a-digital-process-needs-improving',
    title: 'Five signs a digital process needs improving',
    description: 'How to recognise avoidable administration, disconnected information and unclear handovers before choosing a new system.',
    category: 'Digital systems',
    publishedAt: '2026-07-27',
    publishedLabel: '27 July 2026',
    readTime: '4 min read',
    icon: 'systems',
    image: '/images/blog/digital-process.webp',
    imageAlt: 'Separate digital forms and information flowing into one organised system',
    introduction:
      'Organisations often adapt to awkward processes because each individual step appears manageable. The real cost becomes visible when the whole journey is considered: repeated data entry, missing information, manual reminders and staff time spent checking what happened next.',
    sections: [
      {
        heading: '1. The same information is entered more than once',
        paragraphs: [
          'If staff copy details between forms, spreadsheets, emails and internal systems, the process is using time and creating opportunities for inconsistency. A clearer flow should collect necessary information once and make it available where it is legitimately needed.',
        ],
      },
      {
        heading: '2. Progress depends on someone remembering',
        paragraphs: [
          'Manual reminders are useful for exceptions, but they should not be the only thing keeping routine work moving. Clear statuses, assigned actions and appropriate notifications can make the next step visible.',
        ],
      },
      {
        heading: '3. Customers are asked for missing details later',
        paragraphs: [
          'Repeated follow-up may indicate that the initial form or enquiry route does not explain what information is required. Improving the first step can reduce delay for the customer and administrative work for the team.',
        ],
      },
      {
        heading: '4. Nobody has a reliable overview',
        paragraphs: [
          'When reporting requires several spreadsheets and inbox searches, it becomes difficult to answer simple operational questions. A dashboard does not need to be complex, but it should use agreed information and show what people need to act on.',
        ],
      },
      {
        heading: '5. The process works only because one person understands it',
        paragraphs: [
          'Important knowledge should not exist only in one person’s memory. Documenting the journey, decisions and exceptions reduces operational risk and makes training easier.',
        ],
      },
      {
        heading: 'Improve the workflow before selecting software',
        paragraphs: [
          'Map the current journey from the user’s first action to the final outcome. Identify duplicated steps, unclear ownership, missing information and genuine exceptions. This creates a useful basis for deciding whether the answer is a smaller form improvement, an integration or a new digital system.',
        ],
      },
    ],
    conclusion:
      'The goal is not to automate every step. It is to remove avoidable effort, make responsibilities clear and give staff the information they need to provide a reliable service.',
  },
  {
    slug: 'what-makes-a-business-website-useful',
    title: 'What makes a business website genuinely useful?',
    description: 'A practical checklist for creating a clear website that helps visitors understand a service and take the right next step.',
    category: 'Websites',
    publishedAt: '2026-07-27',
    publishedLabel: '27 July 2026',
    readTime: '5 min read',
    icon: 'website',
    image: '/images/blog/useful-website.webp',
    imageAlt: 'A responsive business website displayed across laptop, tablet and phone',
    introduction:
      'A professional website should do more than look polished. It should help the right visitor understand what the organisation offers, decide whether it is relevant and complete an appropriate next action with confidence.',
    sections: [
      {
        heading: 'Explain the service in the visitor’s language',
        paragraphs: [
          'Internal terminology can make sense to a team while remaining unclear to a potential customer. Headings and opening paragraphs should describe the problem being solved, who the service is for and what someone can expect.',
        ],
      },
      {
        heading: 'Make important routes obvious',
        paragraphs: [
          'Navigation should reflect the questions visitors are likely to have. Service details, evidence, pricing information where appropriate, contact options and legal information should not require guesswork.',
          'Each important page should also provide a sensible next step. That might be reading a related service, viewing a relevant project or making an enquiry.',
        ],
      },
      {
        heading: 'Ask only for useful enquiry information',
        paragraphs: [
          'A contact form should be easy to complete and collect only what is needed to understand and reply to the request. Clear labels, useful error messages and confirmation after submission are part of the service experience.',
        ],
      },
      {
        heading: 'Design for accessibility and different devices',
        paragraphs: [
          'Readable text, visible keyboard focus, labelled controls, sufficient colour contrast and a logical heading structure help more people use the site. Responsive layouts should preserve clarity rather than simply shrink the desktop version.',
        ],
      },
      {
        heading: 'Keep performance and maintenance practical',
        paragraphs: [
          'Large decorative media, unnecessary scripts and complicated effects can slow a site without improving the customer journey. A focused website is easier to maintain, test and update as the organisation changes.',
        ],
        points: [
          'Review service information regularly',
          'Test forms and important links',
          'Check pages on mobile and with a keyboard',
          'Remove outdated claims and duplicated content',
        ],
      },
    ],
    conclusion:
      'A useful website combines clear information, accessible interaction and an obvious next step. Visual design supports those goals; it should not distract from them.',
  },
];
