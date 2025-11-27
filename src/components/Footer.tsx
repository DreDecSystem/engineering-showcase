import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-engineering-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <img src={logo} alt="Optima Impact Consulting" className="h-20 w-auto opacity-90" />
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Optima Impact Consulting (Pty) Ltd</h3>
            <p className="text-primary-foreground/80">
              Driving Innovation in Renewable Energy & Mechanical Engineering
            </p>
          </div>

          <div className="border-t border-primary-foreground/20 w-full max-w-md pt-6">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Optima Impact Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
