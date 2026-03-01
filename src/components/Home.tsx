import './home.css';

type ArticleCard = {
  id: string;
  author: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

const featuredArticle: ArticleCard = {
  id: '1',
  author: 'Pulkit Mohata',
  title: 'On Hydrodynamic Circuits, or Why Everything is Ohm\'s Law',
  excerpt: 'If electricity is just moving particles, can we scale that up and build circuits out of other things?',
  category: 'Physics',
  date: 'March 1, 2026',
  readTime: '5 min read',
};

const recentArticles: ArticleCard[] = [
  {
    id: '2',
    author: 'Homer Simpson',
    title: 'Molten Salt Reactors: Safe, Clean, Nuclear Energy',
    excerpt: 'Can using Sodium Fluoride be the key to making cheap and safe nuclear reactors?',
    category: 'Physics',
    date: 'February 28, 2026',
    readTime: '8 min read',
  },
  {
    id: '3',
    author: 'Adamska Ocelot',
    title: 'A United National Army',
    excerpt: 'Does the recent increase in global conflict necessitate a permanent UN Standing Army for peacekeeping?',
    category: 'Politics',
    date: 'January 19, 2026',
    readTime: '6 min read',
  },
  {
    id: '4',
    author: 'Ellie Sattler',
    title: 'Evidence of Velociraptor Hyperintelligence',
    excerpt: 'Are the Velociraptors on Isla Nublar more intelligent than humans?',
    category: 'Biology',
    date: 'December 10, 2026',
    readTime: '4 min read',
  },
  {
    id: '5',
    author: 'Walter White & Gale Boetticher',
    title: 'The Quest for the Perfect Cup of Joe',
    excerpt: 'Can chemistry help us bring out all the flavours in coffee consistently?',
    category: 'Chemistry',
    date: 'November 20, 2025',
    readTime: '9 min read',
  },
  {
    id: '6',
    author: 'John Brown',
    title: 'Modern slavery in Osea: A Biblical Analysis',
    excerpt: 'Is the modern-day practice of slavery in Osea compatible with the word of god?',
    category: 'Theology',
    date: 'September 12, 2025',
    readTime: '7 min read',
  },
  {
    id: '7',
    author: 'David Levinson',
    title: '30 Years Later: A retrospective on the Harvester War',
    excerpt: 'What lessons can we learn from the attempted alien invasion of 1995?',
    category: 'Society',
    date: 'July 4, 2025',
    readTime: '12 min read',
  },
];

type HomeProps = {
  onReadArticle: (id: string) => void;
};

export function Home({ onReadArticle }: HomeProps) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Public Interest
          </h1>
          <p className="hero-description">
            Educational Dispatches Issued by the Royal Institution for the Arts and Sciences under the Authority of King Constantine XIV of Erusea
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-section">
        <h2 className="section-title">Featured Article</h2>
        <article 
          className="featured-card" 
          onClick={() => onReadArticle(featuredArticle.id)}
        >
          <div className="featured-content">
            <span className="card-category">{featuredArticle.category}</span>
            <h3 className="featured-title">{featuredArticle.title}</h3>
            <p className="featured-excerpt">{featuredArticle.excerpt}</p>
            <div className="card-meta">
              <span>{featuredArticle.author}</span>
              <span>•</span>
              <span>{featuredArticle.date}</span>
              <span>•</span>
              <span>{featuredArticle.readTime}</span>
            </div>
          </div>
        </article>
      </section>

      {/* Recent Articles */}
      <section className="recent-section">
        <h2 className="section-title">Recent Articles</h2>
        <div className="articles-grid">
          {recentArticles.map((article) => (
            <article 
              key={article.id} 
              className="article-card"
              onClick={() => onReadArticle(article.id)}
            >
              <span className="card-category">{article.category}</span>
              <h3 className="card-title">{article.title}</h3>
              <p className="card-excerpt">{article.excerpt}</p>
              <div className="card-meta">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export { featuredArticle, recentArticles };
