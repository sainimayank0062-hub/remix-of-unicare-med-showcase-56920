import { Shield, Award, Users, CheckCircle2, FileText, Building2 } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    subtitle: "Certified Company",
  },
  {
    icon: Award,
    title: "10+ Years",
    subtitle: "Industry Experience",
  },
  {
    icon: Users,
    title: "500+ Projects",
    subtitle: "Delivered Nationwide",
  },
  {
    icon: Building2,
    title: "GST Registered",
    subtitle: "09BSAPS7499N1ZL",
  },
  {
    icon: FileText,
    title: "UDYAM Registered",
    subtitle: "UDYAM-UP-29-0189404",
  },
  {
    icon: CheckCircle2,
    title: "100% Quality",
    subtitle: "Guaranteed Standards",
  },
];

const TrustBar = () => {
  return (
    <section className="py-12 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-8">
          Why Trust Unicare Medical Solutions?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <item.icon className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm font-bold text-foreground leading-tight">{item.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
