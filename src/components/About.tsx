const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About Our Company
          </h2>
          <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Unicare Medical Solutions is a leading <strong>Modular Operation Theater manufacturer in Delhi, Ghaziabad</strong> and across India. We are an ISO 9001:2015 certified company specializing in advanced Modular OT setups, Surgical Scrub Sink Stations, Medical Gas Pipeline Systems, Modular ICU, and Critical Care Equipment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With 10+ years of experience and 500+ successful project deliveries, we focus on hygiene, durability, infection control, and international healthcare standards with complete turnkey project execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
