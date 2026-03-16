const SiteFooter = () => (
  <footer className="py-8 border-t border-border">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Impala Yoga — Forgó Lea</p>
      <div className="flex gap-6">
        <a
          href="https://www.instagram.com/impalayoga"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/lea.forgo/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Facebook
        </a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
