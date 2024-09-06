import { Button } from '@material-tailwind/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';

import { setToCarts } from './cartSlice';
import CustomDialog from '../../ui/CustomDialog';
import { imageUrl } from '../../app/constants/api_urls';
import { useNavigate } from 'react-router';


const CartPage = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const nav = useNavigate();

  const { carts } = useSelector((state) => state.cartSlice);
  const user = useAuth();
  const dispatch = useDispatch();
  const total = carts.reduce((a, b) => a + b.qty * b.price, 0);


  return (

    <div className='p-5'>
      {carts.length === 0 ? <h1>list is empty add some</h1> :
        <div>

          <div >
            {carts.map((cart) => {
              return <div className='grid grid-cols-4 gap-12' key={cart._id}>
                <img className='w-full h-36 object-cover' src={`${imageUrl}${cart.image}`} alt="" />
                <div>
                  <h1>{cart.title}</h1>
                  <select defaultValue={cart.qty} name="qty" id="" onChange={(e) => {

                    dispatch(setToCarts({ ...cart, qty: Number(e.target.value) }));
                  }}>
                    {[...Array(cart.stock).keys()].map((c) => {
                      return <option key={c + 1} value={c + 1}>{c + 1}</option>
                    })}
                  </select>
                </div>
                <h1>Rs.{cart.price}</h1>
              </div>
            })}

          </div>

          <div className='flex justify-between'>
            <h1>Total</h1>
            <p>{total}</p>
          </div>
          <Button disabled={user?.isAdmin} onClick={() => {
            if (user && !user?.isAdmin) {
              handleOpen();
            } else {
              nav('/login');
            }

          }} className='mt-10'>Place An Order</Button>

          <CustomDialog open={open} handleOpen={handleOpen} user={user} total={total} carts={carts} totalAmount={total} />



        </div>}

    </div>
  )
}

export default CartPage