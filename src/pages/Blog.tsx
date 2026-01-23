import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogPosts, getAllCategories } from '@/data/blogPosts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const categories = getAllCategories();

  return (
    <>
      <Helmet>
        <title>Blog Espiritual | Tarot, Amarres, Limpieza Energética | Equilibrio y Sanación</title>
        <meta name="description" content="Artículos sobre tarot, amarres de amor, limpieza energética, protección espiritual, rituales y más. Guías completas para tu bienestar espiritual." />
        <meta name="keywords" content="blog espiritual, artículos tarot, amarres de amor, limpieza energética, protección, rituales, brujería, prosperidad" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero */}
            <div className="text-center mb-16">
              <h1 className="font-cinzel text-4xl md:text-5xl text-foreground mb-4">
                Blog <span className="text-primary">Espiritual</span>
              </h1>
              <p className="font-cormorant text-xl text-muted-foreground max-w-2xl mx-auto">
                Artículos, guías y conocimiento ancestral para tu camino de sanación y transformación espiritual.
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full font-cormorant text-sm"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h2 className="font-cinzel text-lg text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="font-cormorant text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishedAt).toLocaleDateString('es-CO')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime} min
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
