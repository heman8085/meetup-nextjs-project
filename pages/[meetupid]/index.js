import MeetupDetails from "../../components/meetups/MeetupDetails";

function Details() {
  return (
    <MeetupDetails
      image="https://t3.ftcdn.net/jpg/00/37/59/54/360_F_37595432_eiYo7ms0vXleIMYlFLywjdwfPqWypQbK.jpg"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
      {
        params: {
          meetupid: "m3",
        },
      },
    ],
  };
}
export function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupid = context.params.meetupid;
  console.log(meetupid);
  return {
    props: {
      meetupData: {
        image:
          "https://t3.ftcdn.net/jpg/00/37/59/54/360_F_37595432_eiYo7ms0vXleIMYlFLywjdwfPqWypQbK.jpg",
        id: meetupid,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}
export default Details;
