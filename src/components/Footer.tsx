import './footer.css';

export function Footer() {
  return (
    <footer className="blog-footer">
      <div className="footer-emblem">
        <img 
          src="/emblem-erusea.webp" 
          alt="Emblem" 
          className="emblem-image"
        />
        <span className="emblem-caption">Issued under the authority of<br />King Constantine XIV of Erusea</span>
      </div>
      <div className="footer-content">
        <p>© 2026 Royal Institution for the Arts and Sciences. All rights reserved.</p>
        <p className="footer-charity">The Royal Insitution for the Arts and Sciences is a registered charitable organisation under Royal Decree JA81.2009 with registration number AEH291P001</p>
        <p className="footer-links"><a href="/privacy">Privacy</a> | <a href="/terms">Terms</a></p>
      </div>
    </footer>
  );
}
