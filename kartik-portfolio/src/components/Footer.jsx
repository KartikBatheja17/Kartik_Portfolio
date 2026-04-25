function Footer() {
  return (
    <footer className="py-12 border-t border-[#333333] text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <p className="font-mono text-[#A0A0A0] text-sm uppercase tracking-widest">
          Designed & Built by Kartik Batheja
        </p>
        <div className="flex gap-8 font-mono text-sm uppercase tracking-widest">
          <a href="https://github.com/KartikBatheja17" className="text-white hover:text-[#1AFF75] transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/kartik-batheja" className="text-white hover:text-[#1AFF75] transition-colors">LinkedIn</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bathejasam.17@gmail.com" className="text-white hover:text-[#1AFF75] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
