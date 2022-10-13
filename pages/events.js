import Events from "../components/Events/Events";


export default function EVents() {
  return (
    <>
        <Events />
    </>
  )
}

// get server side props;
export async function getServerSideProps(context) {
    return { props: { data : {} } };
}
