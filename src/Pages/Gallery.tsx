import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import './Gallery.css';
import video from '../assets/Product-Demo-Video.webm';

interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  likes: number;
  dislikes: number;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Stone Setinel", imageUrl: "./g1.jpg", description: "Majestic mountain peaks", likes: 0, dislikes: 0 },
  { id: 2, title: "Stone Steps of Heritage", imageUrl: "./g9.JPG", description: "Beautiful sunset view", likes: 0, dislikes: 0 },
  { id: 3, title: "Echoes of Time", imageUrl: "./g3.jpg", description: "Serene forest path", likes: 0, dislikes: 0 },
  { id: 4, title: "Tales on Wheel", imageUrl: "./g8.WEBP", description: "Rolling desert dunes", likes: 0, dislikes: 0 },
  { id: 5, title: "The Painted Walk", imageUrl: "./g4.jpg", description: "Aurora Borealis", likes: 0, dislikes: 0 },
  { id: 6, title: "Fields of Peace", imageUrl: "./g6.jpg", description: "Waterfall cascade", likes: 0, dislikes: 0 },
];
// like and dislike mouse event
const ImageActions: React.FC<{
  onLike: (e: React.MouseEvent) => void;
  onDislike: (e: React.MouseEvent) => void;
  likes: number;
  dislikes: number;
}> = ({ onLike, onDislike, likes, dislikes }) => {
  return (
    <div className="image-actions">
      <button onClick={onLike} className="action-button like-button">
        <ThumbsUp size={20} />
        <span>{likes}</span>
      </button>
      <button onClick={onDislike} className="action-button dislike-button">
        <ThumbsDown size={20} />
        <span>{dislikes}</span>
      </button>
    </div>
  );
};

function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>(galleryItems);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (item: GalleryItem) => {
    setSelectedImage(item);
    setShow(true);
  };

  const handleLike = (id: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  const handleDislike = (id: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, dislikes: item.dislikes + 1 } : item
      )
    );
  };

  useEffect(() => {
    if (selectedImage) {
      const updatedImage = items.find(item => item.id === selectedImage.id);
      setSelectedImage(updatedImage || null);
    }
  }, [items]);

  return (
    <Container>
      <div>
        <h2 className="gallery-heading">Gallery</h2>
        <h4>Pictures</h4>
        <p>Few clicks along the way</p>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <Card className="gallery-card h-100" onClick={() => handleShow(item)}>
              <div>
                <Card.Img
                  variant="top"
                  src={item.imageUrl}
                  className="gallery-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/300?text=Image+Unavailable";
                  }}
                />
                <div className="image-overlay">
                  <ImageActions
                    onLike={(e) => {
                      e.stopPropagation();
                      handleLike(item.id);
                    }}
                    onDislike={(e) => {
                      e.stopPropagation();
                      handleDislike(item.id);
                    }}
                    likes={item.likes}
                    dislikes={item.dislikes}
                  />
                </div>
              </div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div>
        <br/>
        <br/>
        <h4>Videos</h4>
        <p>Product Showcase</p>
      </div>
      <div className="video-container" style={{ maxWidth: '80%', margin: '0 auto' }}>
        <video
          controls
          className="img-fluid"
          style={{ width: '100%', height: 'auto' }}
          poster="./videography-cover.png"
        >
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        {selectedImage && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedImage.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="modal-image"
                style={{ width: '100%' }}
              />
              <div className="modal-actions">
                <ImageActions
                  onLike={(e) => {
                    e.stopPropagation();
                    handleLike(selectedImage.id);
                  }}
                  onDislike={(e) => {
                    e.stopPropagation();
                    handleDislike(selectedImage.id);
                  }}
                  likes={selectedImage.likes}
                  dislikes={selectedImage.dislikes}
                />
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </Container>
  );
}

export default Gallery;
