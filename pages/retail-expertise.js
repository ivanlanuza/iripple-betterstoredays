export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/why-iripple",
      permanent: true,
    },
  };
}

export default function RetailExpertiseRedirect() {
  return null;
}
