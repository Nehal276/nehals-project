import Image from 'react-bootstrap/Image';

interface ExampleCarouselImage {
    src: string;
    altText: string;
}

function ExampleCarouselImage({ src, altText }: ExampleCarouselImage) {
  return (
    <div className="carousel-image-container">
      <Image src={src} alt={altText} fluid className="carousel-image" />
    </div>
  );
}

export default ExampleCarouselImage;
