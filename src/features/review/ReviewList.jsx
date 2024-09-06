import { Avatar, Rating } from "@material-tailwind/react"

const ReviewList = ({ reviews }) => {
  return (
    <div className='mt-5'>
      {reviews.map(({ _id, comment, rating, user }) => {
        return <div key={_id} className='mb-6'>
          <div className="flex items-center gap-5">
            <Avatar src="https://media.istockphoto.com/id/1746378669/photo/digital-metaverse-avatar-of-young-indian-man-walking-through-immersive-3d-world-internet.webp?a=1&b=1&s=612x612&w=0&k=20&c=XpFB8yNdJADX619rvoyiMhQr_TphV7KiTzj-HRCY3t4=" />

            <div className="space-y-2">
              <h1>{user.fullname}</h1>
              <Rating value={rating} readonly />
              <p>{comment}</p>
            </div>


          </div>




        </div>
      })}
    </div>
  )
}
export default ReviewList