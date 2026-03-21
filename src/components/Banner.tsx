import bannerImage from "@/assets/banner-ot.png";

const Banner = () => {
  return (
    <section className="w-full pt-20">
      <img
        src={bannerImage}
        alt="Modular Operation Theater - Manufacturer, Supplier, Exporter and Service Provider"
        className="w-full h-auto block"
      />
    </section>
  );
};

export default Banner;
