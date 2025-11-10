export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-space">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Story
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Mars Bites was founded in 2157 by Chef Zara Chen, the first certified culinary expert to establish a restaurant on the Red Planet. Our mission is to bring Earth's rich culinary traditions to Mars while embracing the unique opportunities of extraterrestrial dining.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Every dish is crafted using cutting-edge food technology and the freshest ingredients from our hydroponic gardens, creating a dining experience that's truly out of this world.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold">Farm to Table</h3>
                </div>
                <p className="text-muted-foreground">Grown in our Mars greenhouse</p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold">Innovation First</h3>
                </div>
                <p className="text-muted-foreground">Pioneering space-age cuisine</p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h3 className="text-xl font-semibold">Stellar Experience</h3>
                </div>
                <p className="text-muted-foreground">5-star Martian dining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
