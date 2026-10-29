export default function AnimatedHomeRedirect() {
  return null;
}

export function getServerSideProps() {
  return { redirect: { destination: "/", permanent: true } };
}
