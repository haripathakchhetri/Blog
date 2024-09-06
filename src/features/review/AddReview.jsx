import { useFormik } from "formik";
import { useAddReviewMutation } from "../product/productApi"
import * as Yup from 'yup';
import { Button, Rating, Textarea } from "@material-tailwind/react";
import { toast } from "react-toastify";

const AddReview = ({ user, id }) => {

  const [addReview, { isLoading }] = useAddReviewMutation();

  const commentSchema = Yup.object({
    rating: Yup.number().required('required'),
    comment: Yup.string().min(5).required(),
  });

  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      rating: 0,
      comment: ''
    },
    onSubmit: async (val, { resetForm }) => {
      try {
        const response = await addReview({
          body: {
            rating: val.rating,
            comment: val.comment
          },
          id,
          token: user.token
        }).unwrap();

        resetForm();

        toast.success('review added');
      } catch (err) {
        toast.error(`${err.data?.message}`)
      }

    },
    validationSchema: commentSchema
  });


  return (
    <div>

      {!user?.isAdmin && user && <div>
        <h1 className="mb-2">Add Review here</h1>
        <form onSubmit={handleSubmit}>
          <div className="w-96 space-y-2" >
            <Rating onChange={(e) => setFieldValue('rating', e)} name="rating" value={values.rating} />
            <Textarea label="Message" name='comment' onChange={handleChange} value={values.comment} />
          </div>
          <Button loading={isLoading} type='submit' className="mt-6 w-[15%] " size='sm' fullWidth>
            Submit
          </Button>
        </form>
      </div>
      }

    </div>
  )
}
export default AddReview