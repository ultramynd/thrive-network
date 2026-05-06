import {
  BookOpen,
  Brain,
  HeartHandshake,
  Landmark,
  LucideIcon,
  Microscope,
  PenTool,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export type Seo = {
  title: string;
  description: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type ContentSection = {
  title: string;
  lead?: string;
  body?: string[];
  bullets?: string[];
};

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  heroTitle: string;
  subtitle: string;
  seo: Seo;
  summary: string;
  icon: LucideIcon;
  image: string;
  sections: ContentSection[];
  ctas: Cta[];
  extraOfferings?: ContentSection[];
  form?: "safeguarding";
  resourceNote?: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  division: string;
  divisionSlug: string;
  image: string;
  summary: string;
  bio: string[];
};

export type BlogCategory = {
  title: string;
  slug: string;
  description: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  body: string[];
  seo: Seo;
};

export const site = {
  name: "Thrive Network",
  url: "https://thrive-network.org",
  email: "hello@thrive-network.org",
  emails: ["hello@thrive-network.org", "thrivenetwork22@gmail.com"],
  phone: "UK contact number pending",
  address:
    "71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ",
};

export const homeSeo: Seo = {
  title: "Thrive Network | Safeguarding, Leadership, Coaching & Empowerment",
  description:
    "Thrive Network equips individuals, professionals, and faith communities through safeguarding training, leadership development, mentoring, and specialist support. Real expertise. Lasting impact.",
};

export const services: Service[] = [
  {
    slug: "thrive-men-empowerment",
    title: "Thrive Men Empowerment",
    navTitle: "Men Empowerment",
    heroTitle: "Empowering Men to Heal, Grow, and Thrive",
    subtitle:
      "A safe, specialist platform for male victims and survivors of domestic abuse.",
    seo: {
      title:
        "Thrive Men Empowerment | Support for Male Victims and Survivors of Domestic Abuse",
      description:
        "Thrive Men Empowerment creates safe, honest spaces where male Victims and survivors can recognise abuse, access tailored support, and rebuild with confidence. Trauma-informed. Culturally responsive.",
    },
    summary:
      "A safe, non-judgemental platform where male victims and survivors of domestic abuse can recognise what they have been through, access the right support, and begin rebuilding.",
    icon: HeartHandshake,
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1400&q=80",
    sections: [
      {
        title: "Overview",
        body: [
          "Male victimisation is one of the most underreported and underserved issues in domestic abuse support. The stigma is real. The silence is loud. And the lack of services tailored to men means too many are suffering without acknowledgement, let alone help.",
          "Thrive Men Empowerment exists to change that. We provide a safe, non-judgemental space where men can name what they have been through, access support that actually fits their experience, and begin rebuilding their lives — with dignity and on their own terms.",
        ],
      },
      {
        title: "Our Vision",
        body: [
          "To be a leading global platform providing accessible, specialised, and transformative support for male victims and survivors of domestic abuse.",
        ],
      },
      {
        title: "Our Mission",
        body: [
          "To empower male victims and survivors to achieve genuine personal growth — through holistic, trauma-informed support delivered in a safe and non-judgemental environment.",
        ],
      },
      {
        title: "What We Do",
        lead: "Support that is built around men, not retrofitted for them.",
        body: [
          "We create safe spaces where honest conversation can happen — spaces where stigma is challenged, coercive control is explained, and every man who walks in understands he is not alone and he is not to blame.",
          "Through awareness sessions, emotional wellbeing support, community engagement, peer connection, and signposting to specialist services, we walk alongside men at every stage of the journey from recognition to recovery.",
        ],
      },
      {
        title: "Our Approach",
        body: [
          "Everything we do is trauma-informed, person-centred, and culturally responsive — including an awareness of the specific cultural contexts that shape how African and diaspora communities experience and respond to domestic abuse. We look at the whole person, not just the presenting concern.",
        ],
      },
      {
        title: "Who This Is For",
        body: [
          "Thrive Men Empowerment is for any man who has experienced domestic abuse and is ready — or needs help getting ready — to address it. It is also for faith communities, voluntary organisations, and statutory services that want to better understand and support male victims.",
        ],
      },
      {
        title: "The Outcomes",
        body: [
          "Men who engage with Thrive leave with greater self-awareness, a clearer picture of what happened to them, stronger emotional resilience, and the tools to make decisions that serve their recovery and independence.",
        ],
      },
    ],
    extraOfferings: [
      {
        title: "Training and Workshops",
        body: [
          "Thrive Network offers comprehensive training and workshops designed to enhance the knowledge and skills of social care and health professionals in dealing with male victims of domestic abuse. Our training sessions primarily focus on:",
        ],
        bullets: [
          "Understanding the dynamics of male domestic abuse",
          "Recognizing the barriers faced by male victims in seeking help",
          "Addressing stereotypes and biases related to male victims",
          "Promoting a victim-centred approach in supporting male victims-survivors",
          "Providing practical strategies for effective intervention and support",
        ],
      },
      {
        title: "Initial Consultation",
        body: [
          "Thrive Network offers a confidential initial consultation service for male victims and survivors of domestic abuse. During this consultation, our qualified professionals provide a safe and non-judgmental space for victims to share their experiences and concerns. Our experts will listen empathetically, offer emotional support, and provide information about available resources and options for seeking help.",
        ],
      },
      {
        title: "Assessment",
        body: [
          "Thrive Network conducts a comprehensive assessment process to better understand the unique needs and circumstances of male victims of domestic abuse. Our experienced professionals utilize evidence-based assessment tools to gather information about the victim’s history, trauma exposure, safety concerns, and support networks. This assessment forms the basis for developing tailored intervention plans and ensuring that the services provided are aligned with the specific needs of each individual.",
        ],
      },
      {
        title: "Group Sessions",
        body: [
          "Thrive Network facilitates group sessions for male victims of domestic abuse, creating a supportive and empowering space for survivors to share their experiences, gain insights, and learn coping strategies. These group sessions allow participants to connect with others who have had similar experiences, fostering a sense of belonging and reducing feelings of isolation.",
        ],
      },
      {
        title: "Therapeutic Services",
        body: ["Where necessary, Thrive Network offers therapeutic services."],
      },
    ],
    ctas: [
      { label: "Get in touch to learn more about our support", href: "/get-help" },
    ],
  },
  {
    slug: "safeguarding-in-faith-communities",
    title: "Thrive Safeguarding Training",
    navTitle: "Safeguarding Training",
    heroTitle: "Safeguarding in Faith Communities",
    subtitle: "Protecting Children and Vulnerable Adults in Church and Faith Settings",
    seo: {
      title: "Safeguarding Training for Faith Communities | Thrive Network",
      description:
        "Specialist safeguarding training for churches and faith organisations across the UK. Equip your leaders and volunteers to recognise, respond to, and prevent harm with confidence.",
    },
    summary:
      "Specialist training that equips church leaders, church workforce, volunteers, and faith-based teams to protect children and vulnerable adults with confidence and cultural awareness.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    form: "safeguarding",
    sections: [
      {
        title: "The Stakes",
        body: [
          "Churches in the UK are registered charities. They welcome children. They work with vulnerable adults. And under UK law, every organisation that does so has a safeguarding duty — whether or not they have formal processes in place. The question is not whether safeguarding applies to your church. It does. The question is whether your team is equipped to fulfil that responsibility.",
          "Thrive delivers the training that makes the difference.",
        ],
      },
      {
        title: "What We Deliver",
        lead: "Faith-sensitive. Trauma-informed. Built for real people in real communities.",
        body: [
          "Our safeguarding training is not a generic compliance exercise. It is specifically designed for church leaders, pastoral teams, volunteers, and faith-based workers who need to understand safeguarding within the cultural and spiritual context they actually operate in.",
          "That means we address the things that other trainers skip — the stigma around disclosure, the cultural expectations that silence victims, the way domestic abuse shows up in faith communities, and the unconscious bias that can prevent people from seeing what is right in front of them.",
        ],
      },
      {
        title: "What You Will Cover",
        lead:
          "Over the course of training, your team will gain a clear, practical understanding of:",
        bullets: [
          "Safeguarding responsibilities within faith and charitable organisations",
          "Policies, procedures and guidance from the UK safeguarding and wider context.",
          "Domestic abuse and its impact on children and vulnerable adults",
          "The full range of abuse — physical, emotional, sexual, financial, coercive, and digital",
          "Why people do not disclose, and what breaks down those barriers",
          "How to recognise the signs — and what to do when you do",
          "Responding to safeguarding concerns",
          "Recording, reporting, and referring — the right way, every time",
          "Recognise responsibilities: Legal, moral and biblical",
          "How to work effectively with statutory services and support agencies",
        ],
      },
      {
        title: "What Participants Leave With",
        body: [
          "Every leader and volunteer who completes this training leaves with a clear understanding of their safeguarding role, the confidence to respond appropriately to a concern or disclosure, and the cultural and emotional tools to handle these conversations well. For many, it will be the most important training they have ever done.",
        ],
      },
      {
        title: "Delivery Options",
        body: [
          "We offer face-to-face training, virtual sessions, half-day and full-day workshops, and bespoke safeguarding programmes tailored to your specific church or ministry. We also provide safeguarding consultancy for faith organisations that want to review and strengthen their existing frameworks.",
        ],
      },
      {
        title: "Who This Is For",
        body: [
          "Any church, ministry, church workforce, pastoral team, or faith-based organisation that works with children or vulnerable adults. If you are wondering whether this applies to you — it does.",
        ],
      },
    ],
    ctas: [
      { label: "Book Safeguarding Training", href: "#safeguarding-form" },
      { label: "Enquire About a Bespoke Programme", href: "/contact" },
    ],
  },
  {
    slug: "leadership-development",
    title: "Thrive Leadership Development",
    navTitle: "Leadership Development",
    heroTitle: "Leading Doesn't Just Happen. It's Built.",
    subtitle: "Developing Reflective, Ethical, and Effective Leaders",
    seo: {
      title: "Leadership Development | Ethical, Reflective Leadership Training – Thrive",
      description:
        "Thrive's leadership programmes build leaders who are self-aware, ethically grounded, and equipped to lead in complex environments. Practical. Reflective. Rooted in real-world experience.",
    },
    summary:
      "Programmes that go beyond traditional leadership theory — building reflective, ethically grounded leaders ready for the real complexity of their roles.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    sections: [
      {
        title: "Overview",
        body: [
          "Most leadership training teaches you frameworks. Thrive teaches you how to lead when the frameworks run out — when the stakes are high, the team is under pressure, and there is no obvious playbook to follow.",
          "Our leadership development programmes are grounded in real-world experience, safeguarding insight, and a conviction that the best leaders are not just skilled — they are self-aware, ethically grounded, and capable of genuine reflection. If that is the kind of leader you want to be, or the kind of team you want to build, this is the right room.",
        ],
      },
      {
        title: "Our Leadership Philosophy",
        lead: "Values-led. Trauma-informed. Built for complexity.",
        body: [
          "We go beyond the theoretical. Our programmes focus on the things that determine whether leadership actually works in practice: emotional intelligence, ethical decision-making, accountability, and the ability to lead diverse teams through uncertainty without losing sight of your values.",
        ],
      },
      {
        title: "What We Cover",
        lead: "Depending on the programme, your development will cover:",
        bullets: [
          "Self-leadership, emotional intelligence, and personal accountability",
          "Ethical decision-making and values-led leadership",
          "Leading diverse, cross-cultural, and multi-generational teams",
          "Reflective practice and structured supervision",
          "Communication, influence, and professional presence",
          "Leading change and complexity without losing the team",
          "Trauma-informed leadership in safeguarding-sensitive environments",
        ],
      },
      {
        title: "Who This Is For",
        body: [
          "Senior leaders and managers who want to lead with greater clarity and intention. Emerging leaders who want to build the right foundations early. Safeguarding professionals navigating complex environments. Faith and community leaders who carry significant responsibility. Organisations that want to build a leadership culture that actually holds.",
        ],
      },
      {
        title: "The Outcomes",
        body: [
          "Leaders who have been through Thrive programmes return to their organisations with sharper self-awareness, stronger decision-making, improved team relationships, and a clearer sense of what effective, ethical leadership looks like in their specific context.",
        ],
      },
    ],
    ctas: [
      { label: "Explore Our Leadership Programmes", href: "/contact" },
      { label: "Book a Consultation", href: "/book-consultation" },
    ],
  },
  {
    slug: "mentoring-and-coaching",
    title: "Thrive Mentoring & Coaching",
    navTitle: "Mentoring & Coaching",
    heroTitle: "The Clarity You Are Looking for Is Closer Than You Think.",
    subtitle: "Supporting Growth, Clarity, and Purpose at Every Stage",
    seo: {
      title: "Professional Coaching & Mentoring | Clarity, Confidence & Growth – Thrive",
      description:
        "1:1 coaching and mentoring for professionals, leaders, and individuals navigating growth or change. Build clarity, confidence, and direction with Thrive.",
    },
    summary:
      "Tailored 1:1 support for professionals and individuals seeking clarity, confidence, and genuine forward movement at any stage of life or career.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    sections: [
      {
        title: "Overview",
        body: [
          "There is a version of you that operates with genuine clarity — about where you are going, what you are capable of, and how to get there. Sometimes all that stands between you and that version is the right conversation, with the right person, at the right time.",
          "That is what Thrive Mentoring and Coaching is here for. Not to hand you a plan, but to walk alongside you as you build one — and to challenge you when you need it, not just affirm you.",
        ],
      },
      {
        title: "What We Offer",
        lead: "Tailored support. Real accountability. Measurable progress.",
        body: [
          "Our coaching and mentoring is 1:1, structured, and shaped entirely around where you are and where you want to go. Whether you are navigating a career transition, building your leadership, trying to find your professional footing, or seeking a stronger sense of identity and purpose — we work with what is real, not what looks good on a programme outline.",
          "We offer personal and professional coaching, executive and leadership coaching, career progression and transition support, confidence and identity-based coaching, and mentoring across professional and life stages.",
        ],
      },
      {
        title: "Our Approach",
        body: [
          "Person-centred. Strengths-based. Reflective. Solution-focused. Grounded in real-world leadership and practice experience — not theory borrowed from a textbook. You will be challenged and supported in equal measure, because both are necessary for genuine growth.",
        ],
      },
      {
        title: "Who This Is For",
        body: [
          "Professionals in social care, health, education, business, or corporate settings. Leaders and managers. Entrepreneurs and founders. Faith and community leaders. Individuals at a crossroads. Men who are searching for identity, purpose, and direction. If you are serious about moving forward, Thrive is ready to move with you.",
        ],
      },
      {
        title: "The Outcomes",
        body: [
          "Clients leave with greater clarity and focus, stronger confidence and resilience, improved decision-making, and a tangible sense of personal and professional momentum. Growth that you can feel.",
        ],
      },
    ],
    ctas: [
      { label: "Start Your Mentoring or Coaching Journey", href: "/contact" },
      { label: "Book a Consultation", href: "/book-consultation" },
    ],
  },
  {
    slug: "bespoke-training-and-research",
    title: "Thrive Bespoke Training & Research",
    navTitle: "Bespoke Training & Research",
    heroTitle: "Your Organisation Has Specific Challenges. Your Training Should Too.",
    subtitle: "Customised Learning. Practice Insight. Research-Led Impact.",
    seo: {
      title: "Bespoke Training & Research | Organisational Learning Solutions – Thrive",
      description:
        "Thrive designs and delivers tailored training and research-informed programmes for organisations, local authorities, and faith bodies. Built around your challenges. Delivered for impact.",
    },
    summary:
      "Customised training programmes and research-informed solutions designed around what your organisation actually needs — not a generic off-the-shelf package.",
    icon: Microscope,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    sections: [
      {
        title: "Overview",
        body: [
          "Off-the-shelf training rarely solves real problems. It covers topics. It ticks boxes. But it does not tend to address the specific dynamics, gaps, and challenges that are actually slowing your organisation down or leaving your people underprepared.",
          "Thrive Bespoke Training and Research does things differently. We start with your challenges — not a pre-built syllabus — and design learning solutions that are relevant, evidence-informed, and built to create measurable change in how your people practice.",
        ],
      },
      {
        title: "What We Design and Deliver",
        lead: "Practice-informed. Evidence-led. Built around real organisational need.",
        body: [
          "Our bespoke offer covers customised training programmes, organisational development workshops, specialist sessions on safeguarding, domestic abuse, leadership, bias, and cultural competency, and reflective practice development for teams and services.",
          "We also conduct surveys and practice-based research, explore emerging trends in safeguarding and domestic abuse, and translate that research into practical tools and training content — ensuring that what you receive is not just relevant today, but built to hold up as the sector evolves.",
        ],
      },
      {
        title: "What Makes This Different",
        body: [
          "Most training providers bring a product. We bring a process. We invest time in understanding your context, your team, and the outcomes you actually need. Then we design and deliver something that fits. Not just once — but with the flexibility to evolve it with you.",
        ],
      },
      {
        title: "Who This Is For",
        body: [
          "Local authorities and statutory services. Charities and voluntary sector organisations. Faith-based organisations. Corporate teams seeking to strengthen practice or culture. If your organisation has a training need that a standard course cannot meet, this is for you.",
        ],
      },
      {
        title: "The Outcomes",
        body: [
          "Targeted skill development, improved organisational capability, stronger reflective and evidence-informed practice, and measurable impact on how your people show up for the people they serve.",
        ],
      },
    ],
    ctas: [
      { label: "Discuss a Bespoke Training Solution", href: "/contact" },
      { label: "Get in Touch", href: "/contact" },
    ],
  },
  {
    slug: "thrive-creatives",
    title: "Thrive Creatives",
    navTitle: "Thrive Creatives",
    heroTitle: "Words That Move the Conversation Forward.",
    subtitle: "Creating Resources That Inform, Inspire, and Influence",
    seo: {
      title: "Books, Resources & Thought Leadership | Thrive Creatives",
      description:
        "Thrive Creatives produces books, toolkits, and public education content that challenges narratives and shapes practice. Content built to inform, inspire, and influence.",
    },
    summary:
      "Books, toolkits, and public education content built to amplify underrepresented voices, challenge dominant narratives, and shape the conversations that matter.",
    icon: PenTool,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    sections: [
      {
        title: "Overview",
        body: [
          "Ideas matter. But ideas locked in a training room, a lecture hall, or an expert's head do not change anything. Thrive Creatives exists to get the right knowledge and narratives into the right hands — through books, toolkits, and public education content that is built to be used, shared, and acted on.",
          "Our creative work is grounded in the same lived experience and professional expertise that powers everything else Thrive does. It is not just content. It is content with a purpose.",
        ],
      },
      {
        title: "What We Produce",
        lead: "Insight-driven. Purpose-led. Designed for impact across multiple audiences.",
        body: [
          "We publish books and specialist publications, develop training resources and practical toolkits, produce awareness campaign and public education materials, and create media and storytelling content that amplifies voices that are too often unheard.",
          "Our published work reaches professionals, organisations, communities, and the general public — including international audiences. One of our latest titles, published with Routledge, is already making waves in China and Canada.",
        ],
      },
      {
        title: "Why This Work Matters",
        body: [
          "Some narratives dominate the conversation in safeguarding, domestic abuse, and social policy. Others do not. Thrive Creatives deliberately seeks out the perspectives, populations, and practice insights that get overlooked — and builds content around them that has the quality and reach to shift thinking.",
          "That is how practice changes. That is how policy shifts. And that is how people in communities across the world begin to understand their experiences differently.",
        ],
      },
      {
        title: "Who This Is For",
        body: [
          "Professionals and organisations seeking high-quality practice resources. Training providers looking for specialist toolkits. Communities and the general public who deserve accessible, accurate, and humanising content on the issues that affect them.",
        ],
      },
    ],
    ctas: [
      { label: "Explore Thrive Creatives", href: "/thrive-creatives#resources" },
      { label: "View Published Books", href: "/thrive-creatives#resources" },
    ],
    resourceNote:
      "Book cover images and purchase links will be added once supplied by the client.",
  },
];

export const serviceBySlug = new Map(services.map((service) => [service.slug, service]));

export const whatWeDoSeo: Seo = {
  title: "What We Do | Thrive Network",
  description:
    "Six specialist Thrive Network services spanning men empowerment, safeguarding training, leadership development, coaching, bespoke training, research, and creative resources.",
};

export const teamMembers: TeamMember[] = [
  {
    slug: "oyeyinka-olaniran",
    name: "Oyeyinka Moses Olaniran",
    role: "Founder",
    division: "Men's Empowerment Division",
    divisionSlug: "mens-empowerment",
    image: "/team/oyeyinka-olaniran.jpg",
    summary:
      "Founder of Thrive Network and specialist advocate for male victims and survivors of domestic abuse.",
    bio: [
      "Oyeyinka Moses Olaniran, the founder of Thrive Network, has dedicated his career to supporting male victims of domestic abuse.",
      "With extensive experience in social services, Yinka recognised the critical need for specialised support for men and established Thrive Network as a safe haven.",
      "Under his leadership, Thrive Network has grown into a trusted organisation focused on creating compassionate, inclusive environments where men can heal and thrive.",
    ],
  },
  {
    slug: "rosie-bedi",
    name: "Rosie Bedi",
    role: "Thrive Trainer Facilitator",
    division: "Men's Empowerment Division",
    divisionSlug: "mens-empowerment",
    image: "/team/rosie-bedi.jpg",
    summary:
      "Trainer and facilitator supporting Thrive's work with men on recovery, confidence, and informed next steps.",
    bio: [
      "Rosie Bedi works within Thrive Network's Men's Empowerment Division as a Thrive Trainer Facilitator.",
      "Her work contributes to the safe, practical learning spaces that help men understand abuse, rebuild confidence, and access support.",
    ],
  },
  {
    slug: "anne-marie-reid",
    name: "Anne-Marie Reid",
    role: "Thrive Family and Systemic Psychotherapist",
    division: "Men's Empowerment Division",
    divisionSlug: "mens-empowerment",
    image: "/team/anne-marie-reid.jpg",
    summary:
      "Family and systemic psychotherapist bringing therapeutic insight to Thrive's specialist men's support.",
    bio: [
      "Anne-Marie Reid works within Thrive Network's Men's Empowerment Division as a Thrive Family and Systemic Psychotherapist.",
      "Her role strengthens the therapeutic and relational lens behind Thrive's support for men and families affected by domestic abuse.",
    ],
  },
  {
    slug: "katrina-dey",
    name: "Katrina Dey",
    role: "Thrive Assessor and Facilitator",
    division: "Men's Empowerment Division",
    divisionSlug: "mens-empowerment",
    image: "/team/katrina-dey.jpg",
    summary:
      "Assessor and facilitator helping shape safe, structured pathways into support for men.",
    bio: [
      "Katrina Dey works within Thrive Network's Men's Empowerment Division as a Thrive Assessor and Facilitator.",
      "Her work supports the assessment and facilitation process that helps men feel heard, understood, and appropriately signposted.",
    ],
  },
  {
    slug: "jennifer-achan",
    name: "Jennifer Achan",
    role: "Thrive Family and Systemic Psychotherapist",
    division: "Men's Empowerment Division",
    divisionSlug: "mens-empowerment",
    image: "/team/jennifer-achan.jpg",
    summary:
      "Family and systemic psychotherapist supporting men through a relational and trauma-informed lens.",
    bio: [
      "Jennifer Achan works within Thrive Network's Men's Empowerment Division as a Thrive Family and Systemic Psychotherapist.",
      "Her role supports Thrive's commitment to specialist, relational, and trauma-informed support for male victims and survivors.",
    ],
  },
  {
    slug: "garry-craske",
    name: "Garry Craske",
    role: "Thrive Assessor and Facilitator",
    division: "Men's Empowerment Division",
    divisionSlug: "mens-empowerment",
    image: "/team/garry-craske.jpg",
    summary:
      "Assessor and facilitator supporting Thrive's assessment-led pathway for male survivors.",
    bio: [
      "Garry Craske works within Thrive Network's Men's Empowerment Division as a Thrive Assessor and Facilitator.",
      "His work contributes to safe assessment, practical support, and clear next steps for men accessing Thrive's services.",
    ],
  },
  {
    slug: "maria-takaendisa",
    name: "Maria Takaendisa",
    role: "Thrive Family and Systemic Psychotherapist",
    division: "Men's Empowerment Division",
    divisionSlug: "mens-empowerment",
    image: "/team/maria-takaendisa.jpg",
    summary:
      "Family and systemic psychotherapist helping Thrive hold recovery work with care and clinical depth.",
    bio: [
      "Maria Takaendisa works within Thrive Network's Men's Empowerment Division as a Thrive Family and Systemic Psychotherapist.",
      "Her work supports Thrive's therapeutic approach to helping men and families process harm, rebuild safety, and move forward.",
    ],
  },
];

export const blogCategories: BlogCategory[] = [
  {
    title: "Safeguarding",
    slug: "safeguarding",
    description: "Faith-sensitive safeguarding practice, training, and response.",
  },
  {
    title: "Men Empowerment",
    slug: "men-empowerment",
    description: "Support, recovery, stigma, and practice around male survivors.",
  },
  {
    title: "Leadership",
    slug: "leadership",
    description: "Reflective, ethical, and trauma-informed leadership.",
  },
  {
    title: "Coaching",
    slug: "coaching",
    description: "Clarity, confidence, transition, and professional growth.",
  },
  {
    title: "Research",
    slug: "research",
    description: "Practice-informed research and evidence-led learning.",
  },
  {
    title: "Thrive Creatives",
    slug: "thrive-creatives",
    description: "Books, toolkits, campaigns, and public education content.",
  },
  {
    title: "Faith Communities",
    slug: "faith-communities",
    description: "Culture, care, disclosure, and safeguarding in faith settings.",
  },
];

export const blogPosts: BlogPost[] = [];

export const cmsContentTypes = [
  "Page",
  "Service",
  "Team Member",
  "Blog Post",
  "Blog Category",
  "Author",
  "Testimonial",
  "Book / Resource",
  "Partner",
  "Form Submission metadata",
  "SEO fields",
];

export const impactPoints = [
  {
    title: "Individuals",
    text: "Individuals walk away with the clarity and confidence to navigate what is ahead of them.",
    icon: UsersRound,
  },
  {
    title: "Professionals",
    text: "Professionals leave better equipped to do their jobs in ways that protect and serve the people depending on them.",
    icon: BookOpen,
  },
  {
    title: "Organisations",
    text: "Organisations become safer, more informed, and more capable of delivering on their mission.",
    icon: ShieldCheck,
  },
];
