import React from 'react'
import { useSelector } from 'react-redux'
import { Card, IconButton, Rating, Typography } from "@material-tailwind/react";
import AlertDialog from '../../ui/AlertDialog';
import { useNavigate } from 'react-router';

const TABLE_HEAD = ["Title", "Image", "Description", "Rating", "Author",
  "BlogType", "Country", "Update", "Delete"];


const Blogs = () => {
  const nav = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [ind, setInd] = React.useState(0);
  const handleOpen = () => setOpen(!open);

  const { blogs } = useSelector((state) => state.blogSlice);


  // const persons = [
  //   {id: 1, name: 'john'},
  //   {id: 2, name: 'riya'},
  //   {id: 3, name: 'shawn'},
  // ]
  // const idToFind = 1; // The id you want to find
  // const person = persons.find(person => person.id === idToFind);

  // console.log(person);

  // const people = [
  //   { id: 1, name: 'john', genre: "male" },
  //   { id: 2, name: 'riya' },
  //   { id: 3, name: 'shawn', genre: "male" },
  // ]
  // const males = people.filter(people => people.genre === "male")
  // console.log(males);

  // const m = people.map((g) => {
  //   return g;
  // })

  //People

  // const people = [
  //   { name: 'John', age: 15 },
  //   { name: 'Jane', age: 22 },
  //   { name: 'Mike', age: 32 },
  //   { name: 'Sara', age: 17 }
  // ];

  // const adults = people.filter(people => people.age > 18)
  // console.log(adults);


  //Numbers

  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const even = numbers.filter(numbers => numbers % 2 == 0)
  // console.log(even);

  //Book 

  // const books = [
  //   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  //   { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  //   { title: '1984', author: 'George Orwell' }
  // ];

  // const booktoFind = "To Kill a Mockingbird"

  // const bookswithTitle = books.find(book => book.title === booktoFind)
  // console.log(bookswithTitle);

  //NumGeaterthan10
  // const numbers = [1, 3, 5, 11, 8, 20, 7];

  // const numGeaterthan10 = numbers.find(number => number > 10)
  // console.log(numGeaterthan10);


  //Map

  //numbers map

  // const numbers = [1, 2, 3, 4, 5];

  // const multiply = numbers.map((number) => {
  //   return number * 2
  // })
  // console.log(multiply);


  //name of people

  // const people = [
  //   { name: 'John', age: 15 },
  //   { name: 'Jane', age: 22 },
  //   { name: 'Mike', age: 32 },
  //   { name: 'Sara', age: 17 }
  // ];

  // const nameofPeople = people.map(person => person.name);

  // console.log(nameofPeople);

  //Reduce

  // const numbers = [1, 2, 3, 4, 5];

  // const sum = numbers.reduce((accu, curr) => {
  //   return accu + curr;
  // }, 0)

  // console.log(sum);

  //product of number



  // const updatedPeople = people.map(m =>
  //   m.id === 1 ? { id: 1, name: 'Kamal' } : m
  // );

  // console.log(updatedPeople);


  // const numbers = [1, 2, 3, 4, 5];

  // const product = numbers.reduce((accumulator, currentValue) => {
  //   return accumulator * currentValue;
  // }, 1);

  // console.log(product);


  // const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

  // names.forEach(name => {
  //   console.log(name);
  // });

  // const numbers = [1, 2, 3, 4, 5];

  // numbers.forEach((number, index) => {
  //   console.log(`Index: ${index}, Number: ${number}`);
  // });

  return (
    <div className='p-7'>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full  table-fixed text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {blogs.map(({ title, author, blogType, someEx, description, rating, baseImage, country, id }, index) => {
              const isLast = index === blogs.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={id}>
                  <td className={classes}>
                    <Typography
                      onClick={() => nav(`/single-blog/${id}`)}

                      variant="small"
                      color="blue-gray"
                      className="font-normal hover:cursor-pointer"
                    >
                      {title}
                    </Typography>
                  </td>

                  <td className={classes}>

                    <img src={baseImage} alt="img" />

                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {description}
                    </Typography>
                  </td>



                  <td className={classes}>
                    <Rating readonly value={rating} />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {author}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {blogType}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography

                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {country}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography

                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <IconButton onClick={() => nav(`/edit-blog/${id}`)} size='sm' color='green'>
                        <i className="fas fa-edit" />
                      </IconButton>
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <IconButton onClick={() => {
                        setInd((prev) => index);
                        handleOpen();
                      }} size='sm' color='pink'>
                        <i className="fas fa-trash" />
                      </IconButton>
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      <AlertDialog open={open} handleOpen={handleOpen} index={ind} />
    </div>
  )
}

export default Blogs