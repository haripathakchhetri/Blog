import { useFormik } from "formik";
import * as Yup from 'yup';
import { Button, Card, Input, Typography } from "@material-tailwind/react";

import { useDispatch } from "react-redux";
import { addUser } from "../auth/userSlice";
import { toast } from "react-toastify";
import { useUpdateProfileMutation } from "../product/userApi";

export const updateSchema = Yup.object({
  email: Yup.string().email().required(),
  fullname: Yup.string().required()
})

const UserProfile = ({ user }) => {

  const [updateUser, { isLoading }] = useUpdateProfileMutation();

  const dispatch = useDispatch();

  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      email: user?.email,
      fullname: user?.fullname
    },
    onSubmit: async (val) => {
      try {
        const newUser = { ...user, email: val.email, fullname: val.fullname }

        const response = await updateUser(newUser).unwrap();
        dispatch(addUser(newUser));
        toast.success('Successfully Updated')

      } catch (err) {

        toast.error(err.data?.message);
      }

    },
    validationSchema: updateSchema

  })



  return (
    <div className=" p-7">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Profile
        </Typography>

        <form className="mt-5 mb-2 " onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">


            <Input
              type="text"
              size="lg"
              name="fullname"
              onChange={handleChange}
              value={values.fullname}
              label="Full Name"

            />

            {errors.fullname && touched.fullname && <h1 className="text-red-600">{errors.fullname}</h1>}


            <Input
              size="lg"
              name="email"
              label="Email"
              onChange={handleChange}
              value={values.email}


            />

            {errors.email && touched.email && <h1 className="text-red-600">{errors.email}</h1>}

          </div>

          <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
            Update
          </Button>

        </form>
      </Card>
    </div>
  )
}
export default UserProfile