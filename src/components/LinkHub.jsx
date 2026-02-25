import { ExternalLink, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import links from '../data/affiliateLinks.json';

const LinkHub = () => {
    // Sort so highlighted items appear first; show up to 6 to keep the grid rich.
    const sortedLinks = [...links].sort((a, b) => (b.isHighlighted ? 1 : 0) - (a.isHighlighted ? 1 : 0));
    const displayLinks = sortedLinks.slice(0, 6);

    return (
        <section className="py-12 container mx-auto px-6 relative z-10">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-amber-500/20 rounded-lg">
                    <Zap size={20} className="text-amber-400" />
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight uppercase">Featured Wisdom</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayLinks.map((link, idx) => (
                    <motion.a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -4, scale: 1.02 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`group relative overflow-hidden p-6 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.08] border transition-all flex items-center justify-between ${link.isHighlighted
                                ? 'border-amber-500/50 shadow-lg shadow-amber-500/10'
                                : 'border-white/10 hover:border-amber-500/40'
                            }`}
                    >
                        <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                        {link.isHighlighted && (
                            <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-amber-500 text-[10px] font-black text-slate-950 uppercase tracking-widest z-10">
                                NEW
                            </div>
                        )}

                        <div className="flex items-center gap-5 relative z-10 min-w-0">
                            <div className="text-3xl flex-shrink-0 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110">
                                {link.icon}
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-1">
                                    {link.category}
                                </span>
                                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                                    {link.title}
                                </h3>
                                <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                                    {link.subtitle}
                                </p>
                            </div>
                        </div>

                        <div className="ml-3 flex-shrink-0 p-3 bg-white/5 rounded-2xl group-hover:bg-amber-500 text-slate-400 group-hover:text-white transition-all">
                            <ExternalLink size={18} />
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default LinkHub;
