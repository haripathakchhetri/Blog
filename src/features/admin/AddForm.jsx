import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Option,
  Select,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useAddProductMutation } from "../product/productApi";

const AddForm = () => {

  const [addProduct, { isLoading }] = useAddProductMutation();

  const { user } = useSelector((state) => state.userSlice);

  const nav = useNavigate();

  const productSchema = Yup.object({
    title: Yup.string().required(),
    detail: Yup.string().required(),
    price: Yup.number().required(),
    stock: Yup.number().required(),
    brand: Yup.string().required(),
    category: Yup.string().required(),
    image: Yup.mixed().required().test('fileType', 'invalid image', (e) => {
      return ['image/jpg', 'image/png', 'image/jpeg'].includes(e.type);
    })
  });

  const { values, handleChange,
    handleSubmit, errors, setFieldValue, touched } = useFormik({

      initialValues: {
        title: '',
        description: '',
        price: '',
        stock: '',
        image: '',
        category: '',
        image: null,
        imageReview: ''

      },

      onSubmit: async (val, { resetForm }) => {

        const formData = new FormData();
        formData.append('title', val.title);
        formData.append('description', val.description);
        formData.append('price', Number(val.price));
        formData.append('image', val.image);
        formData.append('category', val.category);
        formData.append('brand', val.brand);
        formData.append('stock', Number(val.stock));

        try {

          console.log(formData)

          await addProduct({
            body: formData,
            token: user.token
          }).unwrap();

          toast.success('product added successfully');
          nav(-1);


        } catch (err) {
          toast.error(`${err.data?.message}`);

        }



      },
      //validationSchema: productSchema

    });

  return (
    <Card color="transparent" shadow={false} className="max-w-sm  mx-auto mt-4 mb-4">
      <Typography variant="h4" color="blue-gray">
        Add Product
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">

          <Input
            size="lg"
            label="title"
            name="title"
            onChange={handleChange}
          />
          {errors.title && touched.title && <h1 className='text-pink-700'>{errors.title}</h1>}

          <Input
            size="lg"
            type="number"
            label="price"
            name="price"
            onChange={handleChange}
          />
          {errors.price && touched.price && <h1 className='text-pink-700'>{errors.price}</h1>}

          <Input
            size="lg"
            type="number"
            label="stock"
            onChange={handleChange}
            name="stock"
          />
          {errors.stock && touched.stock && <h1 className='text-pink-700'>{errors.stock}</h1>}

          <Select onChange={(e) => setFieldValue('brand', e)} label="select Brand">
            <Option value="samsung">Samsung</Option>
            <Option value="apple">Apple</Option>
            <Option value="dolce">Dolce</Option>

          </Select>
          <Select onChange={(e) => setFieldValue('category', e)} label="select category">
            <Option value="clothes">Clothes</Option>
            <Option value="tech">Tech</Option>

          </Select>

          <Textarea
            size="lg"
            label="description"
            name="description"
            onChange={handleChange}
          />


          <div className='space-y-2'>
            <h1>Select An Image</h1>

            <Input
              label="Image File"
              onChange={(e) => {
                const file = e.target.files[0];
                setFieldValue('imageReview', URL.createObjectURL(file))
                setFieldValue('image', file);
              }}
              type='file'
              name='image'
              multiple
              accept='image/*'
            />
            {errors.image && touched.image && <h1 className='text-pink-700'>{errors.image}</h1>}
            {values.imageReview && <img src={values.imageReview} alt="" />}
          </div>


        </div>

        <Button isLoading={isLoading} type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}
export default AddForm