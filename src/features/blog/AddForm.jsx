import React, { useState } from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  Radio,
  Select,
  Option,
  Rating,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addToBlog } from './blogSlice';
import { useNavigate } from 'react-router';

//import * as Nei from '../../Sample';

// console.log(Nei.persons);

const radioData = [
  { value: 'news', color: 'red', label: 'News' },
  { value: 'travel', color: 'green', label: 'Travel' },
];
const checkBoxData = [
  { color: 'red', value: 'red', label: 'Red' },
  { color: 'blue', value: 'blue', label: 'Blue' },
  { color: 'green', value: 'green', label: 'Green' },
];




const AddForm = () => {


  // console.log(URL);
  const dispatch = useDispatch();

  const nav = useNavigate();
  // const [s, setS] = useState(false)

  const blogSchema = Yup.object({
    title: Yup.string().min(5).max(100).required(),
    author: Yup.string().required(),
    blogType: Yup.string().required(),
    someEx: Yup.array().min(1).required(),
    country: Yup.string().required(),
    rating: Yup.number().required(),
    description: Yup.string().min(10).max(200).required(),
    image: Yup.mixed().test('fileType', 'Invalid image', (e) => {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png']
      return e && validTypes.includes(e.type);

    })
  });
  const { handleChange, handleSubmit, values, errors, setFieldValue, touched } = useFormik({
    initialValues: {
      title: '',
      author: '',
      blogType: '',
      someEx: [],
      country: '',
      rating: null,
      description: '',
      image: null,
      baseImage: null
    },
    onSubmit: (val, { resetForm }) => {

      delete val.image;
      dispatch(addToBlog({ ...val, id: nanoid() }));
      nav(-1);

    },
    validationSchema: blogSchema
  });

  return (
    <div className='px-7 pt-3  max-w-lg'>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add Blog
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter Blog details
        </Typography>

        <form onSubmit={handleSubmit} className="mt-4 mb-2 ">
          <div className="mb-1 flex flex-col gap-6">

            <div>
              <Input
                name='title'
                onChange={handleChange}
                value={values.title}
                size="lg"
                label='Blog Title'
              />
              {errors.title && touched.title && <h1 className='text-red-600'>{errors.title}</h1>}
            </div>

            <div>
              <Input
                size="lg"
                name='author'
                onChange={handleChange}
                value={values.author}
                label='Author'
              />
              {errors.author && touched.author && <h1 className='text-red-600'>{errors.author}</h1>}
            </div>




            <div className="type">
              <Typography>Blog Type</Typography>

              <div className="flex gap-10">

                {radioData.map((rad, i) => {
                  return <Radio
                    key={i}
                    color={rad.color}
                    name='blogType'
                    onChange={handleChange}
                    value={rad.value}
                    label={rad.label}
                  />;
                })}


              </div>
              {errors.blogType && touched.blogType && <h1 className='text-red-600'>{errors.blogType}</h1>}
            </div>

            <div className="ch">
              <Typography>Some Example</Typography>
              <div className="flex w-max gap-4">
                {checkBoxData.map((check, i) => {
                  return <Checkbox
                    key={i}
                    name='someEx'
                    onChange={handleChange}
                    color={check.color}
                    value={check.value}
                    label={check.label} />
                })}

              </div>
              {errors.someEx && touched.someEx && <h1 className='text-red-600'>{errors.someEx}</h1>}
            </div>


            <div className="w-72">
              <Select onChange={(e) => setFieldValue('country', e)} label="Select Country">
                <Option value='nepal'>Nepal</Option>
                <Option value='india'>India</Option>
                <Option value='china'>China</Option>

              </Select>
              {errors.country && touched.country && <h1 className='text-red-600'>{errors.country}</h1>}
            </div>

            <div>
              <Typography>Rating</Typography>
              <Rating onChange={(e) => setFieldValue('rating', e)} />
              {errors.rating && touched.rating && <h1 className='text-red-600'>{errors.rating}</h1>}
            </div>



            {/* <Button type='button' onClick={() => setS(!s)}>render</Button> */}

            <div>
              <Input onChange={(e) => {
                const file = e.target.files[0];
                // const url = URL.createObjectURL(file);
                setFieldValue('image', file)
                // console.log(e.target.files[0]);

                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.addEventListener('load', (e) => {
                  setFieldValue('baseImage', e.target.result)

                  // const random = Math.floor(Math.random() * 100 + 1);
                  // console.log(`hello ${random}`);
                });

              }} type='file' name='image' label='select image' />
              {values.baseImage && !errors.image && <img src={values.baseImage} alt='' className='h-[300px] w-full mt-2 object-cover' />}
              {errors.image && touched.image && <h1 className='text-red-600'>{errors.image}</h1>}
            </div>

            <div>
              <Textarea
                name='description'
                value={values.description}
                onChange={handleChange}
                label="Description" />
              {errors.description && touched.description && <h1 className='text-red-600'>{errors.description}</h1>}
            </div>

            {/* <div>
              <Input type='file' label='select image' />
            </div> */}



          </div>

          <Button type='submit' className="mt-6" fullWidth>
            Submit
          </Button>

        </form>
      </Card>
    </div>
  )
}

export default AddForm