import { Suspense, useRef } from "react"
import LoadingSpinner from "@/components/Common/LoadingSpinner"
import Footer from "@/components/Common/Footer"
import Header from "@/components/Common/Header"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { IconPlayerPlay } from "@tabler/icons-react"
import { benefits, features, subFeatures } from "@/mock/mockData"
export default function Home() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }
    return (
        <main className="min-h-screen bg-mainBackgroundV1">
            <Header />
            <Suspense fallback={<LoadingSpinner />}>
                {/* <Hero /> */}
                <section className="container py-16 md:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Turn any content into <span className="text-mainActiveV1">Lurnies</span>
                        </motion.h1>

                        <motion.h2
                            className="text-2xl md:text-3xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            (5-Minute Lessons and Quizzes)
                        </motion.h2>

                        <motion.p
                            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Lurni's AI-powered Microlearning Engine helps you create short, focused lessons your team can absorb and act
                            on anytime, anywhere.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Button>Get a Demo</Button>
                            <Button>How it Works</Button>
                        </motion.div>
                    </div>
                </section>
                {/* <MicrolearningSection /> */}
                <section ref={sectionRef} className="container py-16">
                    <motion.div
                        className="grid md:grid-cols-2 gap-8 items-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">
                                From Knowledge to <br />
                                Microlessons-Automatically
                            </h2>

                            <div className="space-y-4 text-gray-300">
                                <p>
                                    The Microlearning Engine is at the core of Lurni's AI. It lets you select any topic—be it a document, a
                                    product update, or a process—and get structured learning your sales team can use. Each Lurni is built to
                                    be consumed in under 5 minutes, in a mobile-first, card-based format.
                                </p>

                                <p>
                                    Whether it's a sales KPI or a 60-minute training session, the Microlearning Engine helps you distill it
                                    into digestible lessons your team can complete in under 5 minutes.
                                </p>

                                <p>No instructional design experience required. Just upload, describe, or paste—and Lurni does the rest.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative">
                            <div className="relative rounded-lg overflow-hidden border border-gray-800">
                                <img
                                    src="/images/sample-img.png"
                                    alt="Microlearning Demo"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.button
                                        className="w-16 h-16 rounded-full bg-mainActiveV1/90 flex items-center justify-center"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <IconPlayerPlay size={32} className="text-white ml-1" />
                                    </motion.button>
                                </div>
                            </div>

                            <div className="absolute -bottom-3 -right-3 bg-mainActiveV1/20 text-mainActiveV1 text-sm px-3 py-1 rounded-full">
                                Learning in action
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
                {/* <LearningMatchesSection /> */}
                <section ref={sectionRef} className="container py-16 space-y-12">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Learning That Matches How Work Happens</h2>
                        <p className="text-gray-300">
                            Traditional courses are long, time-consuming, and often ignored. In today's fast-paced environment, your team
                            doesn't have time for 30-minute modules. Lurni recognizes that the human attention span is short. Our
                            Microlearning Engine tackles this head-on.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 h-full"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                            >
                                <div className={`mb-4 p-3 rounded-lg bg-gradient-to-br ${feature.color} w-fit`}>{feature.icon}</div>
                                <h3 className="text-white text-lg font-medium mb-2">{feature.title}</h3>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <p className="text-white font-medium">
                            The result? Higher engagement, better recall, and real learning in real time.
                        </p>
                    </motion.div>
                </section>
                {/* <KeyBenefitsSection /> */}
                <section ref={sectionRef} className="container py-16">
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            className="md:col-span-1"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">Key Benefits Your Teams Will Actually Use</h2>
                            <p className="text-gray-300">
                                Empower your workforce with fast, focused learning that fits into their workflow...
                            </p>
                            <p className="text-gray-300 mt-4">
                                Boosting productivity, engagement, and retention—without overwhelming them or slowing them down.
                            </p>
                        </motion.div>

                        <motion.div
                            className="md:col-span-2 grid sm:grid-cols-2 gap-6"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-800/50 border border-gray-700 rounded-xl p-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-mainActiveV1/20 flex items-center justify-center text-xl font-bold text-mainActiveV1">
                                            {benefit.number}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                {benefit.icon}
                                                <h3 className="text-white text-lg font-medium">{benefit.title}</h3>
                                            </div>
                                            <p className="text-gray-300">{benefit.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
                {/* <PowerLearningSection /> */}
                <section ref={sectionRef} className="container py-16 space-y-12">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Everything You Need to Power Modern Learning</h2>
                        <p className="text-gray-300">
                            The Microlearning Engine is just the beginning. Explore powerful built-in tools designed to help deliver and
                            personalize knowledge—automatically and at scale.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {subFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col h-full"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                            >
                                <div className="mb-4 flex items-center gap-2">
                                    {feature.icon}
                                    <h3 className="text-mainActiveV1 text-sm font-bold uppercase tracking-wider">{feature.title}</h3>
                                </div>
                                <p className="text-gray-300 mb-6">{feature.description}</p>
                                <div className="mt-auto rounded-lg overflow-hidden border border-gray-700">
                                    <img
                                        src={feature.image || "/placeholder.svg"}
                                        alt={feature.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
                {/* <FutureSection /> */}
                <section ref={sectionRef} className="container py-16">
                    <div className="relative rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img src="/images/sample-img.png" alt="Future of Learning" className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-mainBackgroundV1/90 to-mainBackgroundV1/70"></div>
                        </div>

                        <motion.div
                            className="relative z-10 py-16 px-8 md:px-16 text-center max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Future of Learning is here</h2>
                            <p className="text-gray-200 mb-8">Experience how modern teams learn smarter, faster, together</p>
                            <div className="flex justify-center">
                                <Button>Get a Demo Today</Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {/* <ContactSection /> */}
                <section ref={sectionRef} className="container py-16 text-center">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold">
                            <span className="text-mainActiveV1">Ready to talk?</span>
                        </h2>
                        <h3 className="text-4xl font-bold text-[#e0c3a9]">Get in touch.</h3>
                        <div className="pt-4">
                            <Button>Request a Demo</Button>
                        </div>
                    </motion.div>
                </section>
                <Footer />
            </Suspense>
        </main>
    )
}
