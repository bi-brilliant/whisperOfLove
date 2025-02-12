const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("/your-background.jpg")' }}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold">Selamat Datang</h1>
        <p className="mt-4 text-lg">Di acara pernikahan kami</p>
        <p className="mt-2 text-3xl font-semibold">[Nama Pasangan]</p>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          RSVP Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
