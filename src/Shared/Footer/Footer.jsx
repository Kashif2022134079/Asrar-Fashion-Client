

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4">
      <div className="text-center">
          <p className="text-base font-medium">Copyright © {new Date().getFullYear()} - All right reserved</p>
          <p className="text-sm md:text-lg font-medium">Developed By : Kashifur Rahman Reza(krreza200@gmail.com)</p>
      </div>
    </footer>
  );
};

export default Footer;