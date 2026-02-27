import { motion } from 'framer-motion';
import { ArrowRight, Book, Sparkles, Sprout, Star, BookOpen } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import LinkHub from '../components/LinkHub';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
};

const Home = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-white font-sans antialiased overflow-hidden selection:bg-amber-500/30">
            {/* Background ambient blobs */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] bg-amber-500/[0.05] rounded-full blur-[130px] animate-pulse-slow" />
                <div className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[55%] bg-amber-600/[0.04] rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-[0.012]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* ── Hero ─────────────────────────────────────── */}
            <motion.section
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="relative pt-36 pb-28 px-6 section-container text-center flex flex-col items-center z-10"
            >
                <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-400 font-bold uppercase tracking-widest animate-glow">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Explorer la sagesse intemporelle
                </motion.div>

                <motion.h1
                    variants={fadeInUp}
                    className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[1.05]"
                    style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #fbbf24 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Héritage <br className="hidden md:block" /> & Sagesse
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                    Découvrez une collection de livres dédiés à la croissance personnelle, à la philosophie et à la transmission du savoir.
                </motion.p>

                <motion.div variants={fadeInUp} className="hero-actions">
                    <a href="#products" className="btn btn-primary text-base">
                        Explorer les Livres <Book size={18} />
                    </a>
                    <button className="btn btn-secondary text-base">
                        En Savoir Plus <ArrowRight size={18} />
                    </button>
                </motion.div>
            </motion.section>

            {/* ── Stats ──────────────────────────────────────── */}
            <section className="py-16 relative z-10 border-y border-white/[0.05] bg-white/[0.02]">
                <div className="section-container">
                    <div className="stats-grid text-center">
                        {[
                            { label: 'Lecteurs', value: '10k+', icon: Sparkles },
                            { label: 'Livres sélectionnés', value: '50+', icon: BookOpen },
                            { label: 'Langues', value: 'FR / EN', icon: Sprout },
                            { label: 'Satisfaction', value: '★★★★★', icon: Star },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center gap-2 group"
                            >
                                <div className="p-2.5 bg-amber-500/10 rounded-xl mb-1 group-hover:bg-amber-500/20 transition-colors">
                                    <stat.icon size={18} className="text-amber-500" />
                                </div>
                                <span className="text-3xl font-black text-white tracking-tighter">{stat.value}</span>
                                <span className="text-xs text-slate-500 font-semibold uppercase tracking-[0.15em]">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Featured Links ─────────────────────────────── */}
            <LinkHub />

            {/* ── Products Grid ─────────────────────────────── */}
            <section className="py-24 relative z-10" id="products">
                <div className="section-container">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter">Notre Bibliothèque</h2>
                            <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                                Une sélection rigoureuse d'ouvrages pour enrichir votre esprit. <span className="text-amber-400 font-medium">Cultivez votre héritage.</span>
                            </p>
                        </div>
                        <a href="#products" className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-2 transition-all uppercase tracking-widest text-xs group">
                            Voir tout <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="products-grid">
                        {products.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: Math.min(idx * 0.08, 0.3) }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────── */}
            <section className="py-32 relative z-10 overflow-hidden">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto rounded-[2.5rem] p-14 text-center relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(217,119,6,0.15) 0%, rgba(15,23,42,0.5) 60%)',
                            border: '1px solid rgba(245,158,11,0.2)',
                            boxShadow: '0 40px 120px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
                        }}
                    >
                        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter relative z-10 leading-tight">
                            Prenez votre <br /> destin en main.
                        </h2>
                        <p className="text-slate-300 text-lg mb-10 relative z-10 font-light max-w-xl mx-auto">
                            Rejoignez notre communauté de lecteurs passionnés et cultivez votre héritage dès aujourd'hui.
                        </p>
                        <button className="btn btn-primary relative z-10 text-base px-10">
                            Commencer <BookOpen size={18} />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
