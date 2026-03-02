import './sidebar.css';

export function Sidebar() {
  return (
    <aside className="blog-sidebar">
      <div className="sidebar-widget author-widget">
        <h3 className="widget-title">About the Author</h3>
        <div className="author-info">
          <div className="author-avatar">
            <img src='portrait.jpg'>
            </img>
          </div>
          <h4 className="author-name">Pulkit Mohata</h4>
          <p className="author-bio">
            Pulkit, 3rd Marquess Mohata, is the Royal Advisor on Science to the King of Erusea. He previously served as the Erusean representative for the design committee of the International Space Elevator.
          </p>
          <a href="#" className="author-link">View all posts →</a>
        </div>
      </div>

      <div className="sidebar-widget categories-widget">
        <h3 className="widget-title">Categories</h3>
        <ul className="categories-list">
          <li>
            <a href="#">Physics</a>
            <span className="category-count">12</span>
          </li>
          <li>
            <a href="#">Biology</a>
            <span className="category-count">9</span>
          </li>
          <li>
            <a href="#">Politics</a>
            <span className="category-count">3</span>
          </li>
          <li>
            <a href="#">Society</a>
            <span className="category-count">2</span>
          </li>
        </ul>
      </div>

      <div className="sidebar-widget newsletter-widget">
        <h3 className="widget-title">Newsletter</h3>
        <p className="newsletter-text">
          Get the latest articles delivered to your inbox.
        </p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}
