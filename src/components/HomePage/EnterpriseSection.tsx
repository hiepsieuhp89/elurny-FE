import { motion } from "framer-motion"
import { IconCheck } from "@tabler/icons-react"
import { Skeleton } from "@/components/ui/skeleton"

interface EnterpriseSectionItem {
    id: string
    title: string
    description: string
    items: string[]
    color: string
}

interface EnterpriseSectionProps {
    data: {
        title: string
        sections: EnterpriseSectionItem[]
        images: string[]
    }
    isLoading: boolean
}
export const EnterpriseSection = ({ data, isLoading }: EnterpriseSectionProps) => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <section className="py-16 bg-mainDarkBackgroundV1">
            <div className="container mx-auto px-4">
                {isLoading ? (
                    <div className="space-y-8">
                        <Skeleton className="h-12 w-3/4 mx-auto bg-mainCardV1" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {Array(3)
                                .fill(0)
                                .map((index) => (
                                    <Skeleton key={index} className="h-80 w-full rounded-xl bg-mainCardV1" />
                                ))}
                        </div>
                    </div>
                ) : (
                    <>
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-12 text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            {data.title}
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {data.sections.map((section, index) => (
                                <motion.div
                                    key={section.id}
                                    className={`${section.color} rounded-xl p-6 h-full`}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.5, delay: index * 0.1 },
                                        },
                                    }}
                                >
                                    <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                                    <p className="text-secondaryText mb-6 text-sm">{section.description}</p>
                                    <ul className="space-y-3">
                                        {section.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <IconCheck size={18} className="text-accentColor mr-2 mt-1 flex-shrink-0" />
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {data.images.map((image, index) => (
                                <motion.div key={index} className="overflow-hidden rounded-lg" variants={fadeIn}>
                                    <img
                                        src={image || "/placeholder.svg"}
                                        alt={`Enterprise use case ${index + 1}`}
                                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </>
                )}
            </div>
        </section>
    )
}