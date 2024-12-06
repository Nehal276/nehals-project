import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { likeBlog, dislikeBlog } from '../Store/blogSlice';
import './Blog.css';
import '../index.css';

type BlogCategory = 'photography-1' | 'photography-2' | 'photography-3'; 
// / redux elements/
interface BlogCardData {
  id: BlogCategory;
  title: string;
  description: string;
  imageUrl: string;
  path: string;
}

const BlogCard: React.FC<{ blog: BlogCardData }> = ({ blog }) => {
  const dispatch = useAppDispatch();
  const { likes, dislikes } = useAppSelector(state => state.blog[blog.id]);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(likeBlog(blog.id as BlogCategory));
  };

  const handleDislike = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(dislikeBlog(blog.id as BlogCategory));
  };

  return (
    <Col xs={12} md={4} className="mb-4">
      {/* bootstrap columns and cards */}
      <Card>
        <Card.Img variant="top" src={blog.imageUrl} />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <p style={{color:'#A35A324A',fontSize:'14px'}}>Author : Nehal Parab</p>
          <Card.Text>{blog.description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={blog.path}>
              <Button className='button'>Read More</Button>
            </Link>
            <div className="d-flex">
              <Button 
                variant="outline-success" 
                className="me-2 d-flex align-items-center reaction"
                onClick={handleLike}
              >
                <ThumbsUp className="me-1" size={20} /> 
                {likes}
              </Button>
              <Button 
                variant="outline-danger" 
                className="d-flex align-items-center reaction"
                onClick={handleDislike}
              >
                <ThumbsDown className="me-1" size={20} /> 
                {dislikes}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default function Blog() {
  const blogs: BlogCardData[] = [
    { 
      id: 'photography-1', 
      title: "Photography Assignment 1", 
      description: "A fun activity where we had to capture three well-composed images on a given topic.", 
      imageUrl: './image1.png',
      path: "/business-headshot"
    },
    { 
      id: 'photography-2', 
      title: "Photography Assignment 2", 
      description: "A fun activity where we had to capture three well-composed images on a different topic.", 
      imageUrl: './image2.png',
      path: "/dramatic-shot"
    },
    { 
      id: 'photography-3', 
      title: "Videography Assignment", 
      description: "A fun activity where we had to conceptualize and produce a small product video as a team.", 
      imageUrl: './image3.png',
      path: "/passion-image"
    }
  ];

  return (
    <Container fluid className="tabs-container">
      <Container>
        <h1 className="my-3">Blog</h1>
        <Row>
          <div className="videography-series">
            <h5 className="vidpost-text1">Video Production</h5>
            <Link to="/videography-post">
              <img 
                className="video-cover" 
                src="https://nehal276.github.io/nehals-project/videography-cover.png" 
                alt="Video Production" 
              />
            </Link>
          </div>
        </Row>
        <br/>
        <br/>
        <h5 className="vidpost-text2">Photography Series</h5> 
        <br/>
        <Row>
          {blogs.map((blog) => (
            <BlogCard 
              key={blog.id}
              blog={blog}
            />
          ))}
        </Row>
      </Container>
    </Container>
  );  
}
