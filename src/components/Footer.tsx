export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-mars bg-clip-text text-transparent">
              Mars Bites
            </h3>
            <p className="text-muted-foreground">
              Dining beyond Earth since 2157
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Mon-Fri: 11:00 - 22:00 MST</p>
              <p>Sat-Sun: 10:00 - 23:00 MST</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Mars Colony, Sector 7</p>
              <p>Olympus Mons Terrace</p>
              <p>+1-MARS-BITES</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2157 Mars Bites. All rights reserved across the solar system.</p>
        </div>
      </div>
    </footer>
  );
};
