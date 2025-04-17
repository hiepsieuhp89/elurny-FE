import { IconBook, IconBrain, IconChartBar, IconDeviceTv, IconPencil } from "@tabler/icons-react"

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
            icon: <IconBrain size={ 24} className = "text-mainActiveV1" />,
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
        image: "/images/sample-img.png",
    },
    {
        id: "microlessons",
        title: "Create microlessons in just seconds from webpages, YouTube videos, PDFs, images, docs, files",
        description: "Transform any content into bite-sized learning modules quickly",
        image: "/images/sample-img.png",
    },
    {
        id: "knowledge",
        title: "Instant just-in-time knowledge transfer using Micro LLM trained on your content",
        description: "AI-powered knowledge delivery when and where it's needed",
        image: "/images/sample-img.png",
    },
    {
        id: "collections",
        title: "Organize your learning in collections and share with your colleagues",
        description: "Structured learning paths that can be easily shared across teams",
        image: "/images/sample-img.png",
    },
    {
        id: "videos",
        title: "Create instructional videos, PPTs and podcasts in two-hop a minute and share with your team",
        description: "Quick content creation tools for various learning formats",
        image: "/images/sample-img.png",
    },
    {
        id: "courses",
        title: "Create and upload courses in minutes",
        description: "Streamlined course creation and deployment process",
        image: "/images/sample-img.png",
    },
    {
        id: "simulation",
        title:
            "Simulation - a gamified skill advantage builder to practice and learn with hands-on product skills in an engaging, interactive journey",
        description: "Learn by doing in a risk-free environment",
        image: "/images/sample-img.png",
    },
    {
        id: "api",
        title: "The Lurny API Toolkit tool for developers to build applications of custom learning experiences they are",
        description: "Extend and customize the platform to meet your specific needs",
        image: "/images/sample-img.png",
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
            color: "bg-mainActiveV1",
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