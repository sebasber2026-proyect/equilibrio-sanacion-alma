import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostBySlug, blogPosts } from '@/data/blogPosts';
import { Calendar, Clock, ArrowLeft, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cinzel text-2xl text-foreground mb-4">Artículo no encontrado</h1>
          <Link to="/blog" className="text-primary hover:underline">Volver al blog</Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = `Hola, leí tu artículo "${post.title}" y me gustaría una consulta.`;
  const whatsappUrl = `https://wa.me/573043295611?text=${encodeURIComponent(whatsappMessage)}`;

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | Equilibrio y Sanación</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://equilibrio-sanacion-alma.vercel.app/blog/${post.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="pt-24 pb-16">
          <article className="container mx-auto px-4 max-w-4xl">
            {/* Back Link */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-cormorant">
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>

            {/* Header */}
            <header className="mb-8">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {post.category}
              </span>
              <h1 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground font-cormorant">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min de lectura
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="aspect-video rounded-xl overflow-hidden mb-10">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-invert max-w-none font-cormorant
              prose-headings:font-cinzel prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
              prose-table:text-muted-foreground
              prose-th:text-foreground prose-th:bg-primary/10
              prose-td:border-border prose-th:border-border
            ">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-primary/10 rounded-xl text-center border border-primary/20">
              <h3 className="font-cinzel text-2xl text-foreground mb-4">¿Necesitas Ayuda Espiritual?</h3>
              <p className="font-cormorant text-muted-foreground mb-6">
                Agenda una consulta personalizada y trabajemos juntos en tu bienestar espiritual.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-cormorant text-lg hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Consultar por WhatsApp
              </a>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="font-cinzel text-2xl text-foreground mb-8">Artículos Relacionados</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/blog/${related.slug}`}
                      className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-cinzel text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
