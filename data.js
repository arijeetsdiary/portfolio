// =============================================================
//  data.js — Single source of truth for Arijeet Roy's website
//  Edit this file only when adding projects, roles, or skills.
//  Both portfolio.html and resume.html read from here.
// =============================================================

const SITE_DATA = {

  // ----------------------------------------------------------------
  // PORTFOLIO — each object = one project card
  // Fields: id, badge, date, title, image, bullets[], tags[]
  // image paths are relative to repo root: assets/images/filename.jpg
  // ----------------------------------------------------------------
  projects: [
    {
      id: "cement",
      badge: "Macquarie University · Honours Thesis",
      date: "Feb 2023 – Dec 2023",
      title: "Efficient Low-Carbon Cementitious Systems",
      image: "assets/images/cement-lab.jpg",
      bullets: [
        "Designed and tested 150+ concrete mix variations to reduce embodied carbon while holding structural performance steady",
        "Cut research turnaround time by 40% through a streamlined testing protocol",
        "Nominated for Greatest Commercial Development Potential — one of the university's top honours engineering awards",
        "Applied materials science and concrete technology principles relevant to sustainable infrastructure specification"
      ],
      tags: ["AS 3600", "Concrete Technology", "Sustainable Design", "Mix Design", "Laboratory Testing", "Data Analysis"]
    },
    {
      id: "telecom",
      badge: "DDC Australia · Civil Design Engineer",
      date: "Aug 2023 – Aug 2024",
      title: "Telecommunications Infrastructure — Structural Design",
      image: "assets/images/telecom-tower.jpg",
      bullets: [
        "Delivered DFC and FC structural assessments across 15+ site upgrades from 4G to 5G — Telstra, Optus and Vodafone in NSW, VIC and QLD",
        "Modelled structural framing, antenna mounts, RF dishes and 5G equipment in AutoCAD and Civil 3D",
        "Verified structural capacity against AS4100, AS3600 and AS5100 through on-site measurements",
        "Identified recurring datum error, built validation checklist, and cut design turnaround by 20%"
      ],
      tags: ["AutoCAD", "Civil 3D", "AS 4100", "AS 3995", "Structural Assessment", "SAED"]
    },
    {
      id: "bridge",
      badge: "Macquarie University · Industry Project",
      date: "Feb 2023 – Jun 2023",
      title: "Bridge Upgrade — Transport for NSW / City of Ryde",
      image: "assets/images/bridge.jpg",
      bullets: [
        "Conducted structural analysis of 4 bridge design alternatives in compliance with AS5100, AS4100 and AS4600, evaluating feasibility against TfNSW requirements",
        "Led selection of final bridge design option based on structural performance, compliance, and site suitability",
        "Built detailed CAD models for the selected design and produced comprehensive structural assessment report",
        "Conducted geotechnical analysis of existing foundations, site conditions, and retaining walls"
      ],
      tags: ["AS5100", "AS4100", "AS4600", "Revit", "Infraworks", "SPACE GASS", "Bridge Design"]
    },
    {
      id: "mtgilead",
      badge: "Macquarie University · CIVL3401",
      date: "2023",
      title: "Project Manager — Mt Gilead Estate, Campbelltown NSW",
      image: "assets/images/mtgilead.jpg",
      bullets: [
        "Spearheaded preparation of project documentation including scope, schedules and risk assessments, ensuring full compliance with safety and regulatory standards",
        "Crafted and submitted detailed project proposals and tender bids with accurate budgeting and timelines",
        "Engineered traffic management plans and conducted environmental assessments, proactively mitigating construction risks",
        "Optimised road design for safer delivery across a live residential estate development"
      ],
      tags: ["Construction Management", "Project Documentation", "Tender Bids", "Traffic Management", "Environmental Assessment"]
    },
    {
      id: "robot",
      badge: "Macquarie University · ENGG 3000",
      date: "Jul 2021 – Dec 2021",
      title: "Ball Collecting Robot — Autonomous Collection & Disposal System",
      image: "assets/images/robot.jpg",
      bullets: [
        "Decomposed a complex engineering system into functional subsystems across a multidisciplinary team, coordinating between mechanical, electrical and software disciplines",
        "Designed the robot's body structure, internal compartments for ball collection, and the collection and disposal mechanism",
        "Applied creative problem-solving and structural thinking to meet system constraints and deliver an integrated solution"
      ],
      tags: ["Structural Design", "Systems Engineering", "Traceability Documentation", "Prototype Development"]
    }
  ],

  // ----------------------------------------------------------------
  // EXPERIENCE — each object = one timeline node
  // Fields: title, org, period, location, bullets[]
  // ----------------------------------------------------------------
  experience: [
    {
      title: "Civil Design Engineer",
      org: "Design Development Consultant Australia (DDCA)",
      period: "Aug 2023 – Aug 2024",
      location: "Sydney, NSW",
      bullets: [
        "Delivered DFC and FC structural assessments across 15+ site upgrades from 4G to 5G — Telstra, Optus and Vodafone in NSW, VIC and QLD",
        "Modelled structural framing, antenna mounts, RF dishes and 5G equipment in AutoCAD and Civil 3D, producing FC drawings specifying exact installation sequencing",
        "Verified structural capacity against AS4100, AS3600 and AS5100 through on-site measurements",
        "Identified recurring datum error, built validation checklist, and cut design turnaround time by 20%",
        "Coordinated SAED across the portfolio, resolving landowner access constraints and design conflicts"
      ]
    },
    {
      title: "Product Specialist (CTP)",
      org: "Suncorp Group",
      period: "Sept 2024 – Present",
      location: "Melbourne, VIC",
      bullets: [
        "Top 10% performer nationally — awarded Suncorp Elevate Award FY26 H1",
        "Manage 50+ daily customer interactions within CTP insurance regulation",
        "Use Tableau and Salesforce data to identify process bottlenecks, redesigning workflows to cut handling time by 25%"
      ]
    },
    {
      title: "Team Leader (Secondment)",
      org: "Suncorp Group",
      period: "May 2025 – Nov 2025",
      location: "Melbourne, VIC",
      bullets: [
        "Led a 14-member operational team through a workflow change program, managing daily resourcing and mitigating operational risk",
        "Lifted SLA performance by 10% and reached 100% compliance remediation",
        "Delivered capability uplift program achieving 100% process adoption within two weeks — Elevate Award, top 10% nationwide"
      ]
    },
    {
      title: "Specialist",
      org: "Apple",
      period: "Aug 2022 – Feb 2024",
      location: "Chatswood, NSW",
      bullets: [
        "Trained in Apple's structured client engagement methodology — needs discovery, solution presentation, active listening, and resolution",
        "Delivered exceptional product knowledge and customer service, working directly with local council clients on technology solutions"
      ]
    },
    {
      title: "Undergraduate Researcher",
      org: "Macquarie University",
      period: "Feb 2023 – Dec 2023",
      location: "Sydney, NSW",
      bullets: [
        "Honours thesis nominated for Greatest Commercial Development Potential",
        "Designed and tested 150+ concrete mix variations; cut research turnaround time by 40%"
      ]
    }
  ],

  // ----------------------------------------------------------------
  // EDUCATION
  // Fields: title, org, period, extras[] (plain strings)
  // ----------------------------------------------------------------
  education: [
    {
      title: "Bachelor of Engineering (Honours), Civil Engineering",
      org: "Macquarie University · Sydney",
      period: "Jul 2021 – Jan 2024",
      extras: [
        "Thesis: \"Efficient Low-Carbon Cementitious Systems\" — Nominated for Greatest Commercial Development Potential",
        "Coursework: Structural engineering · Geomechanics · Concrete technology · Transport engineering · Construction management"
      ]
    },
    {
      title: "Engineering Professional Year",
      org: "NIT Australia in partnership with Engineers Australia",
      period: "In Progress — until Jan 2027",
      extras: [
        "Structured program covering Australian engineering practice, workplace compliance, and professional standards aligned with Engineers Australia requirements."
      ]
    }
  ],

  // ----------------------------------------------------------------
  // CERTIFICATIONS — Section 03 on resume
  // Fields: icon, name, issuer
  // ----------------------------------------------------------------
  certifications: [
    { icon: "🏛️", name: "Engineers Australia", issuer: "GradIEAust · Member since 2019" },
    { icon: "🦺", name: "NSW White Card", issuer: "General Construction Induction" },
    { icon: "📐", name: "Revit Structure", issuer: "Creating Concrete Buildings — LinkedIn Learning" },
    { icon: "🎓", name: "Engineering Professional Year", issuer: "Engineers Education Australia · In Progress" },
    { icon: "🥇", name: "Duke of Edinburgh's International Award", issuer: "Gold Level" },
    { icon: "💡", name: "Product Management: Customer Development", issuer: "Professional Certification" },
    { icon: "🤝", name: "Crowdfund Raiser — Youth's Voice Foundation", issuer: "Chattogram, Bangladesh · Volunteer" },
    { icon: "📚", name: "Teacher & Volunteer Educator", issuer: "Duke of Edinburgh's Award Foundation · Chattogram" },
    { icon: "🚗", name: "Unrestricted Driver's Licence", issuer: "Australia" }
  ],

  // ----------------------------------------------------------------
  // CORE SKILLS — Section 04 on resume
  // Fields: icon, title, tags[]
  // ----------------------------------------------------------------
  skills: [
    {
      icon: "🏗️",
      title: "Civil & Structural Engineering",
      tags: ["Structural analysis", "AS4100", "AS3600", "AS5100", "AS/NZS 5131", "AS4600", "Geomechanics", "Concrete technology"]
    },
    {
      icon: "✏️",
      title: "Design & Drafting",
      tags: ["AutoCAD", "Civil 3D", "Revit", "12D", "SolidWorks", "Red-Line Markups", "DFC Documentation"]
    },
    {
      icon: "🦺",
      title: "Site & HSEQ Compliance",
      tags: ["WHS compliance", "Site inspections", "HSEQ management plans", "PPE protocols", "Quality monitoring", "Environmental compliance"]
    },
    {
      icon: "📋",
      title: "Project Delivery",
      tags: ["Construction programming", "Procurement support", "Progress claims", "Subcontractor coordination", "QA/QC", "MS Project", "Scheduling"]
    },
    {
      icon: "📊",
      title: "Reporting & Documentation",
      tags: ["Daily site diaries", "Technical reporting", "Risk assessment", "SharePoint", "Jira", "Confluence", "Excel (advanced)"]
    },
    {
      icon: "💻",
      title: "Tech & Data",
      tags: ["Salesforce", "Tableau", "ServiceNow", "Citrix", "SPACE GASS", "RS2", "Slide2"]
    }
  ]

};
