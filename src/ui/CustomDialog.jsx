import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useAddOrderMutation } from "../features/order/orderApi";
import { toast } from "react-toastify"
import { useDispatch } from "react-redux";
import { removecarts } from "../features/cart/cartSlice";

const CustomDialog = ({ open, handleOpen, user, carts, totalAmount }) => {

  const [addOrder, { isLoading }] = useAddOrderMutation();

  const updateCart = carts.map((cart) => {
    return { qty: cart.qty, product: cart._id };
  })

  const dispatch = useDispatch();

  const handleOrder = async () => {

    try {
      await addOrder({
        body: {
          totalAmount,
          products: updateCart
        },
        token: user.token
      }).unwrap();

      dispatch(removecarts());
      toast.success("Order Placed Successfully");
      handleOpen();

    } catch (err) {
      toast.error(err.data?.message);

    }

  }

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Its a simple dialog.</DialogHeader>
      <DialogBody>
        The key to more success is to have a lot of pillows. Put it this way,
        it took me twenty five years to get these plants, twenty five years of
        blood sweat and tears, and I&apos;m never giving up, I&apos;m just
        getting started. I&apos;m up to something. Fan luv.
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button loading={isLoading} variant="gradient" color="green" onClick={handleOrder}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog >
  )
}

export default CustomDialog