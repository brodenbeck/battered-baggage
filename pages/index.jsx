import { attributes, react as HomeContent } from '../content/home.md';

function home() {
  const { title } = attributes;

  return (
    <>
      <h1>{title}</h1>
      <HomeContent />
    </>
  );
}

export default home;
