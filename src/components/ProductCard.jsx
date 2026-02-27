import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

function ProductCard({ product }) {
    const [imgError, setImgError] = useState(false);

    return (
        <a
            href={product.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card"
        >
            {/* Book Cover */}
            {!imgError && product.isbn ? (
                <img
                    src={`https://covers.openlibrary.org/b/isbn/${product.isbn}-L.jpg`}
                    alt={product.title}
                    className="product-card-cover"
                    onError={() => setImgError(true)}
                    loading="lazy"
                />
            ) : (
                <div className="product-card-cover-placeholder">
                    <span className="text-5xl">📖</span>
                </div>
            )}

            {/* Arrow */}
            <div className="product-card-arrow">
                <ExternalLink size={14} />
            </div>

            {/* Body */}
            <div className="product-card-body">
                {product.badge && (
                    <span className="product-card-badge">{product.badge}</span>
                )}
                <h3 className="product-card-title">{product.title}</h3>
                <p className="product-card-sub">{product.shortDescription}</p>
                {product.category && (
                    <span style={{
                        display: 'inline-block',
                        marginTop: '0.5rem',
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#64748b',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                        {product.category}
                    </span>
                )}
            </div>
        </a>
    );
}

export default ProductCard;
