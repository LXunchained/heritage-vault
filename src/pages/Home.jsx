import { motion } from 'framer-motion';
import { ArrowRight, Book, Scroll, Sparkles, Sprout, Star } from 'lucide-react';
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
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/5 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-600/5 rounded-full blur-[120px] animate-pulse-slow delay-700" />
            </div>

            {/* Hero Section */}
            <motion.section
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="relative pt-32 pb-24 px-6 container mx-auto text-center flex flex-col items-center z-10"
            >
                <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-400 font-bold uppercase tracking-widest animate-glow">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    Explorer la sagesse intemporelle
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-amber-500 leading-[1.1]">
                    Héritage <br className="hidden md:block" /> & Sagesse
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                    Découvrez une collection de livres et de ressources dédiées à la croissance personnelle, à la philosophie et à la transmission du savoir.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="btn btn-primary bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 text-lg">
                        Explorer les Livres <Book size={22} />
                    </button>
                    <button className="btn btn-secondary bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold border border-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 text-lg backdrop-blur-md">
                        En Savoir Plus <ArrowRight size={22} />
                    </button>
                </motion.div>
            </motion.section>

            {/* Stats / Value Props Section */}
            <section className="py-20 relative z-10 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: 'Lecteurs', value: '10k+', icon: Sparkles },
                        { label: 'Livres', value: '50+', icon: Book },
                        { label: 'Impact', value: 'Global', icon: Sprout },
                        { label: 'Soutien', value: 'Dédié', icon: Star },
                    ].map((stat, i) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            key={i}
                            className="flex flex-col items-center gap-2 group"
                        >
                            <stat.icon size={20} className="text-amber-500 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-4xl font-black text-white tracking-tighter">{stat.value}</span>
                            <span className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Link Hub / Affiliate Deals */}
            <LinkHub />


            {/* Products Grid */}
            <section className="py-32 container mx-auto px-6 relative z-10" id="products">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Notre Bibliothèque</h2>
                        <p className="text-slate-400 max-w-xl text-lg font-light">
                            Une sélection rigoureuse d'ouvrages pour enrichir votre esprit et votre quotidien. <span className="text-amber-400 font-medium">Cultivez votre esprit.</span>
                        </p>
                    </div>
                    <button className="group text-amber-400 hover:text-amber-300 font-bold flex items-center gap-2 transition-all uppercase tracking-widest text-sm">
                        Tout Voir <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            key={product.id}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40 relative z-10 overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto bg-gradient-to-br from-amber-600/20 via-slate-900/40 to-slate-900/60 border border-amber-500/20 rounded-[3rem] p-16 text-center relative overflow-hidden group hover:border-amber-500/40 transition-all duration-500 shadow-3xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/20 transition-all" />

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight relative z-10">
                            Prenez votre <br /> destin en main.
                        </h2>
                        <p className="text-slate-300 text-xl mb-12 relative z-10 font-light max-w-2xl mx-auto">
                            Rejoignez notre communauté de lecteurs passionnés et cultivez votre héritage dès aujourd'hui.
                        </p>
                        <button className="relative z-10 btn btn-primary bg-amber-500 hover:bg-amber-400 text-slate-950 px-12 py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/20 text-lg uppercase tracking-tight">
                            S'inscrire <Scroll size={20} className="ml-2 inline-block" />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
