const Gallery = () => {
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <p className="mt-2 text-gray-600">Kenangan indah bersama</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
