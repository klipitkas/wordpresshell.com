import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="py-20">
      <h1 className="text-4xl dark:text-white text-center">
        <Link href="/" passHref>
          <a className="font-serif">{name}</a>
        </Link>
      </h1>
    </header>
  );
}
