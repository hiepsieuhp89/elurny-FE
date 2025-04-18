import { IconAlertCircle, IconBook, IconBrain, IconBrandTelegram, IconCertificate, IconClock, IconDeviceAnalytics, IconInvoice, IconLanguage, IconLighter, IconLock, IconMessageCircle, IconRobot, IconShield, IconUser, IconUserShield, IconVideo } from "@tabler/icons-react";
import { IconChartBar, IconDeviceTv, IconPencil } from "@tabler/icons-react"

export const features = [
  {
    icon: <IconDeviceAnalytics size={40} className="text-mainVioletV1" />,
    title: "Breaking down complex topics into focused, single-concept lessons",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: <IconBrain size={40} className="text-mainVioletV1" />,
    title: "Boosting retention with short bursts of learning backed by neuroscience",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    icon: <IconInvoice size={40} className="text-mainVioletV1" />,
    title: "Fitting seamlessly into daily workflows, even on mobile or voice",
    color: "from-purple-500/20 to-blue-500/20",
  },
]

export const benefits = [
  {
    number: "1",
    title: "Faster content consumption",
    description: "Microlearning enables learners to digest information quickly and efficiently.",
    icon: <IconClock size={24} className="text-mainVioletV1" />,
  },
  {
    number: "2",
    title: "Higher retention rates",
    description: "Bite-sized learning improves memory retention and knowledge application.",
    icon: <IconBrain size={24} className="text-mainVioletV1" />,
  },
]

export const subFeatures = [
  {
    icon: <IconVideo size={32} className="text-mainVioletV1" />,
    title: "VIDEO-TO-PODCAST GENERATOR",
    description: "Convert videos into podcast-style audio, perfect for watching on mobile while commuting.",
    image: "/images/sample-img.png",
  },
  {
    icon: <IconLanguage size={32} className="text-mainVioletV1" />,
    title: "MULTILINGUAL VOICE LEARNING",
    description:
      "Learners talk to Lurni in their local language and receive voice responses perfect for mobile, desktop, or accessibility use cases.",
    image: "/images/sample-img.png",
  },
  {
    icon: <IconBrain size={32} className="text-mainVioletV1" />,
    title: "KNOWLEDGE BOT MICRO-QUIZ",
    description:
      "A no-code AI bot trained on your company's internal knowledge ready to answer FAQs, technical questions, and policy questions.",
    image: "/images/sample-img.png",
  },
]


// Mock Data
export const enterpriseFeatures = [
  "Multi-lingual support for global teams",
  "Auto-role mapping & learning paths",
  "Robust reporting for performance tracking",
  "Seamless integration with existing systems",
]

export const featureCards = [
  {
    icon: <IconShield size={24} />,
    title: "Role-Based Guardrail Protection",
    description: "Secure role-based access controls to ensure the right people have access to the right content.",
    color: "bg-blue-500/10",
  },
  {
    icon: <IconBook size={24} />,
    title: "Knowledge Bot (Micro LLM)",
    description: "AI-powered knowledge assistant that answers questions based on your company's content.",
    color: "bg-mainVioletV1/10",
  },
  {
    icon: <IconCertificate size={24} />,
    title: "Certificate & Badge Automation",
    description: "Automated certification and badge system to recognize and motivate learners.",
    color: "bg-orange-500/10",
  },
  {
    icon: <IconDeviceAnalytics size={24} />,
    title: "SCORM + LTI Integrations",
    description: "Seamlessly integrate with existing LMS platforms and content libraries to maximize your investment.",
    color: "bg-gray-500/10",
  },
  {
    icon: <IconRobot size={24} />,
    title: "Learning Analytics & Recommendations",
    description: "Smart suggestions, completions, and data insights to optimize learning experiences.",
    color: "bg-purple-500/10",
  },
  {
    icon: <IconBrandTelegram size={24} />,
    title: "Brand Communication & Content Delivery System",
    description: "Deliver a highly effective brand message with customized learning paths and content.",
    color: "bg-pink-500/10",
  },
]

export const securityFeatures = [
  {
    icon: <IconShield size={20} />,
    text: "Enterprise-grade security",
  },
  {
    icon: <IconLock size={20} />,
    text: "SOC 2 Type II & GDPR Compliant",
  },
  {
    icon: <IconUserShield size={20} />,
    text: "Data encryption at rest & in transit",
  },
  {
    icon: <IconDeviceAnalytics size={20} />,
    text: "Regular security audits",
  },
]

export const teamSections = [
  {
    title: "Training & Consulting Firms",
    description:
      "Deliver Branded Microlearning Experiences To Clients, Measure The Impact Of Your Training Programs, And Seamlessly Integrate With Existing Learning Tools.",
    learnMoreLink: "#",
    image: "/images/sample-img.png",
  },
  {
    title: "HR & L&D Teams",
    description:
      "Simplify Content Design With Templates, Automate Learning Paths Based On Roles, And Track Progress With Customized Reporting & KPIs.",
    learnMoreLink: "#",
    image: "/images/sample-img.png",
  },
  {
    title: "Frontline & Deskless Teams",
    description:
      "Deliver Just-In-Time Learning And The Right Level Of Information To Mobile-First Knowledge, Available In Any Language.",
    learnMoreLink: "#",
    image: "/images/sample-img.png",
  },
  {
    title: "Sales & Customer Success",
    description:
      "Improve Onboarding, Reinforce Playbooks, And Close More Deals Sooner Thanks To Product Knowledge That's Always Up To Date.",
    learnMoreLink: "#",
    image: "/images/sample-img.png",
  },
]

export const contactOptions = [
  {
    id: 1,
    title: "Access your elurny.com account by clicking here",
    buttonText: "Go to my account",
    buttonVariant: "filled" as const,
  },
  {
    id: 2,
    title: 'Click on "Contact us" at the bottom of the help center page',
    buttonText: "Contact us",
    buttonVariant: "filled" as const,
  },
  {
    id: 3,
    title: 'Click on "Live chat" on the top menu, which will open up the chat',
    buttonText: "Live chat",
    buttonVariant: "outline" as const,
    icon: <IconMessageCircle size={18} />,
  },
]

export const faqItems = [
  {
    question: "What Is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    question: "Why Do We Use It?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s and has survived through centuries of use in electronic typesetting and desktop publishing.",
  },
  {
    question: "Where Does It Come From?",
    answer:
      "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet...', comes from this text.",
  },
  {
    question: "What Is Our Pricing Model?",
    answer:
      "Our pricing model is based on a subscription system with different tiers to accommodate various needs and budgets. We offer monthly and annual billing options with discounts for annual commitments.",
  },
]

export const additionalOptions = [
  {
    id: 1,
    icon: <IconLighter size={32} className="text-accentColor" />,
    title: "Submit an Idea",
    description: "Post feature requests on the monday community",
    buttonText: "Visit Lurny Community",
  },
  {
    id: 2,
    icon: <IconAlertCircle size={32} className="text-accentColor" />,
    title: "Check our service status",
    description: "Get updated on operational disruptions in real time",
    buttonText: "Visit Lurny Community",
  },
  {
    id: 3,
    icon: <IconUser size={32} className="text-accentColor" />,
    title: "Contact the CEOs",
    description: "Feeling frustrated? Reach out to us",
    buttonText: "Visit Lurny Community",
  },
]

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

// Mock data for blog posts
export const blogPosts = Array(12)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    tag: "PRODUCT",
    title: "Charting a new path: How we're building the future of work management with Asana Partners",
    team: "Team eLurny",
    date: "March 20, 2023",
    readTime: "2 min Read",
    image: "/images/sample-img.png",
  }))

export const heroData = {
  title: "So how did lurny.com come to be?",
  description:
    "We're on a trajectory somewhere between revolutionizing the communication industry, and boldly redefining the world through digital transformation and building the tools we need.",
}

export const peopleData = {
  title: "It's all about the people",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content there', making it look like readable English. Many desktop publishing packages and web design.",
}

export const journeyData = {
  description:
    "As we integrated and automated both workflows, created connections between teams, and improved cross-team collaboration, our collaborative goals & strategies that journey that the monday.com family has built.",
}

export const innovationData = {
  description:
    "We've always wanted to be part of a new kind of company—one using the operating tool can actually become a company's most strategic advantage. That's why we built monday.com by spending time in actual product company, practicing patience, focus, and determination. We're proud of what we've built, and we're excited about what's just getting started.",
}

export const storyCards = [
  {
    id: 1,
    icon: "🚀",
    title: "Pioneering Scale: Our Beginnings",
    description:
      "Back in 2012, Roy Mann, then a team leader at Wix.com, was frustrated with the tools available for managing his team and keeping everyone in sync. He envisioned a tool that would solve these problems.",
    link: "Read more",
  },
  {
    id: 2,
    icon: "💡",
    title: "Overcoming Scale: Our Growth",
    description:
      "As the company grew, so did our platform. We expanded our features to accommodate more complex workflows and larger teams, all while maintaining our core principle of simplicity.",
    link: "Read more",
  },
  {
    id: 3,
    icon: "🌍",
    title: "Going Global",
    description:
      "With users in over 200 countries, we've embraced diversity and built a platform that works for teams across cultures, languages, and industries.",
    link: "Read more",
  },
]

export const numberData = [
  { number: "0", label: "Years in business" },
  { number: "00", label: "Employees worldwide" },
  { number: "0", label: "Countries" },
  { number: "0", label: "Enterprise customers" },
  { number: "000", label: "Teams using lurny.com" },
]

export const valuesData = [
  {
    id: 1,
    icon: "🌈",
    title: "Transparency and Trust",
    description:
      "We believe that the best way to build trust is through transparency. That's why we're committed to being open about our processes, decisions, and even our mistakes. This approach fosters a culture of trust and respect.",
  },
  {
    id: 2,
    icon: "📊",
    title: "Simplicity and Impact",
    description:
      "We strive to make our product as simple as possible while maximizing its impact. We believe that technology should make life easier, not more complicated, and we design with this principle in mind.",
  },
  {
    id: 3,
    icon: "🚀",
    title: "Speed and Innovation",
    description:
      "We're fast-paced and always looking for ways to innovate. We don't wait for the perfect moment to launch new features; we believe in shipping quickly, gathering feedback, and iterating.",
  },
  {
    id: 4,
    icon: "👥",
    title: "Product > Me",
    description:
      "We put the product first, always. Our decisions are guided by what's best for the product and, by extension, our users. Personal preferences take a back seat to the greater good of creating the best possible experience.",
  },
  {
    id: 5,
    icon: "🤝",
    title: "Inclusivity",
    description:
      "We believe in creating an inclusive environment where everyone feels welcome and valued. We celebrate diversity and recognize that our differences make us stronger as a team and as a company.",
  },
  {
    id: 6,
    icon: "👨‍👩‍👧‍👦",
    title: "Customer > Company",
    description:
      "Our customers are at the heart of everything we do. We prioritize their needs and feedback, knowing that their success is our success. We're committed to building lasting relationships based on trust and mutual benefit.",
  },
]

export const knowUsData = [
  {
    id: 1,
    icon: "🏢",
    title: "Team",
    subtitle: "Interested in Tiny Teams",
    description: "Learn about our team structure and how we work",
  },
  {
    id: 2,
    icon: "🎧",
    title: "Product",
    subtitle: "Startup for Startup podcast",
    description: "Bringing insights, inspiration, and knowledge",
  },
  {
    id: 3,
    icon: "🔍",
    title: "Career",
    subtitle: "Looking for a job? 👀",
    description: "Join the lurny.com family",
  },
]

export const socialImages = [
  "/images/sample-img.png",
  "/images/sample-img.png",
  "/images/sample-img.png",
  "/images/sample-img.png",
  "/images/sample-img.png",
]


export const capabilitiesData = {
    categories: [
        { id: "core", name: "Core Capabilities" },
        { id: "engagement", name: "Engagement & Analytics" },
        { id: "content", name: "Content Creation" },
        { id: "integrations", name: "Integrations" },
    ],
    features: [
        {
            id: "engineering",
            title: "Engineering Engine",
            description: "Create and publish interactive learning experiences for APIs, SDKs, and more.",
            icon: <IconBrain size={ 24} className = "text-mainVioletV1" />,
        category: "core",
        },
    {
        id: "multicloud",
        title: "Video & Multiplatform Learning",
        description: "Deliver engaging video-based learning experiences across all devices.",
        icon: <IconDeviceTv size={ 24 } className = "text-pink-500" />,
            category: "core",
        },
{
    id: "microlearn",
        title: "Microlearning",
            description: "Create bite-sized learning modules that can be consumed on-the-go.",
                icon: <IconBook size={ 24 } className = "text-blue-500" />,
                    category: "core",
        },
{
    id: "aiengine",
        title: "AI/ML Engine",
            description: "Personalized learning experiences powered by machine learning.",
                icon: <IconBrain size={ 24 } className = "text-purple-400" />,
                    category: "core",
        },
{
    id: "content",
        title: "AI Content Creation",
            description: "Quickly create high-quality learning content with AI assistance.",
                icon: <IconPencil size={ 24 } className = "text-yellow-400" />,
                    category: "content",
        },
{
    id: "knowledge",
        title: "Knowledge-first Product Use",
            description: "Focus on practical knowledge application in real-world scenarios.",
                icon: <IconChartBar size={ 24 } className = "text-pink-400" />,
                    category: "engagement",
        },
    ],
}

export const featureCardsData = [
    {
        id: "interface",
        title: "A user interface that is in tune with the times",
        description: "Modern, intuitive interface designed for optimal learning experience",
        image: "/images/home/feature1.png",
    },
    {
        id: "microlessons",
        title: "Create microlessons in just seconds from webpages, YouTube videos, PDFs, images, docs, files",
        description: "Transform any content into bite-sized learning modules quickly",
        image: "/images/home/feature2.png",
    },
    {
        id: "knowledge",
        title: "Instant just-in-time knowledge transfer using Micro LLM trained on your content",
        description: "AI-powered knowledge delivery when and where it's needed",
        image: "/images/home/feature3.png",
    },
    {
        id: "collections",
        title: "Organize your learning in collections and share with your colleagues",
        description: "Structured learning paths that can be easily shared across teams",
        image: "/images/home/feature4.png",
    },
    {
        id: "videos",
        title: "Create instructional videos, PPTs and podcasts in two-hop a minute and share with your team",
        description: "Quick content creation tools for various learning formats",
        image: "/images/home/feature5.png",
    },
    {
        id: "courses",
        title: "Create and upload courses in minutes",
        description: "Streamlined course creation and deployment process",
        image: "/images/home/feature6.png",
    },
    {
        id: "simulation",
        title:
            "Simulation - a gamified skill advantage builder to practice and learn with hands-on product skills in an engaging, interactive journey",
        description: "Learn by doing in a risk-free environment",
        image: "/images/home/feature7.png",
    },
    {
        id: "api",
        title: "The Lurny API Toolkit tool for developers to build applications of custom learning experiences they are",
        description: "Extend and customize the platform to meet your specific needs",
        image: "/images/home/feature8.png",
    },
]

// Mock data for enterprise section
export const enterpriseData = {
    title: "Why Enterprises Choose eLurny to Transform Workforce Learning",
    sections: [
        {
            id: "employee",
            title: "AI-Driven Employee Onboarding",
            description: "Transform onboarding with AI-powered personalized learning paths",
            items: [
                "Personalized learning paths for new hires",
                "Quick access to essential company knowledge",
                "Interactive product training modules",
                "Role-specific skill development tracks",
                "Progress tracking and certification",
            ],
            color: "bg-mainCardV1",
        },
        {
            id: "upskilling",
            title: "Continuous Upskilling & Leadership Development",
            description: "Empower your team with ongoing professional development",
            items: [
                "Adaptive skill gap analysis",
                "Curated learning paths for career growth",
                "Just-in-time learning resources",
                "Collaborative learning communities",
                "Leadership mentoring programs",
            ],
            color: "bg-mainVioletV1",
        },
        {
            id: "compliance",
            title: "Compliance & Regulatory Training",
            description: "Ensure regulatory compliance with targeted training",
            items: [
                "Industry-specific compliance modules",
                "Automated certification tracking",
                "Regular policy update notifications",
                "Interactive compliance scenarios",
                "Audit-ready reporting tools",
            ],
            color: "bg-mainCardV1",
        },
    ],
    images: ["/images/sample-img.png", "/images/sample-img.png", "/images/sample-img.png", "/images/sample-img.png"],
}

export const homeSlides = [
  {
    id: 1,
    title: "AI-Driven Employee Onboarding",
    image: "/images/sample-img.png",
    challenge: "Traditional onboarding is time-consuming inconsistent and passive",
    solution: "New stimmy Denutst",
    points: [
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
    ],
  },
  {
    id: 2,
    title: "Continuous Upskilling & Leadership Development",
    image: "/images/sample-img.png",
    challenge: "Traditional onboarding is time-consuming inconsistent and passive",
    solution: "New stimmy Denutst",
    points: [
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
    ],
  },
  {
    id: 3,
    title: "Compliance & Regulatory Training",
    image: "/images/sample-img.png",
    challenge: "Traditional onboarding is time-consuming inconsistent and passive",
    solution: "New stimmy Denutst",
    points: [
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
    ],
  },
  {
    id: 4,
    title: "Continuous Upskilling & Leadership Development",
    image: "/images/sample-img.png",
    challenge: "Traditional onboarding is time-consuming inconsistent and passive",
    solution: "New stimmy Denutst",
    points: [
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
    ],
  },
  {
    id: 5,
    title: "Compliance & Regulatory Training",
    image: "/images/sample-img.png",
    challenge: "Traditional onboarding is time-consuming inconsistent and passive",
    solution: "New stimmy Denutst",
    points: [
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
      "Auto-generate microlessons instructional videos and quizzes in minutes for new hires",
    ],
  },
]