import { motion } from "framer-motion"
interface FeatureCardProps {
    title: string
    description: string
    image: string
}
export const FeatureCard = ({ title, description, image }: FeatureCardProps) => {
    return (
        <motion.div
            className="bg-mainDarkBackgroundV1 rounded-[20px] overflow-hidden border-[2px] border-mainBorderV1 transition-all duration-300 h-full w-full"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                },
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-secondaryText text-sm">{description}</p>
            </div>
            <div className="w-full h-48 overflow-hidden">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
        </motion.div>
    )
}