interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <a
      href="#"
      className="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-4"
    >
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      {children}
    </a>
  );
}
