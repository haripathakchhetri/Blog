import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Card, Typography, Rating,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

const SingleBlog = () => {
  const { id } = useParams();
  const { blogs } = useSelector((state) => state.blogSlice);

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className='p-7'>

      <Card className="mt-6 w-96 flex mx-auto">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {blog.title}
          </Typography>

          <Rating value={blog.rating} />
          <Typography variant="body1" color="blue-gray" className="mt-4">
            <strong>Author:</strong>
            {blog.author}
          </Typography>
          <Typography variant="body1" color="blue-gray" className="mt-2">
            <strong>Type:</strong> {blog.blogType}
          </Typography>
          <Typography variant="body1" color="blue-gray" className="mt-2">
            <strong>Country:</strong> {blog.country}
          </Typography>
          <Typography variant="body1" color="blue-gray" className="mt-2">
            <strong>Description:</strong> {blog.description}
          </Typography>

        </CardBody>

      </Card>
    </div>
  );
};

export default SingleBlog;
