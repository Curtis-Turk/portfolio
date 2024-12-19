function Header() {
  const scrollToContact = () => {
    document.getElementById("contact-container")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div id="header">
      <div id="about">
        <div>About me</div>
        <div className="orange">🟠</div>
      </div>

      <div id="projects">
        <div className="orange">🟠</div>
        <div>Projects</div>
      </div>

      <div id="contact" onClick={scrollToContact}>
        <div>Contact</div>
        <div className="orange">🟠</div>
      </div>
    </div>
  );
}
export default Header;
