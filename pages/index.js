
import { revalidatePath } from 'next/cache';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETSUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://t3.ftcdn.net/jpg/00/37/59/54/360_F_37595432_eiYo7ms0vXleIMYlFLywjdwfPqWypQbK.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2017/09/01/13/56/university-2704306_640.jpg",
    address: "Some address 25, 12345 Some City",
    description: "This is a Second meetup",
  },
];

function Home(props) {

  return <MeetupList meetups={props.meetups} /> ;
}
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from an api
//   return {
//     props: {
//       meetups: DUMMY_MEETSUPS
//     }
//   };
// }
export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
     meetups:DUMMY_MEETSUPS
    },
    revalidate: 1
  }
}
export default Home;