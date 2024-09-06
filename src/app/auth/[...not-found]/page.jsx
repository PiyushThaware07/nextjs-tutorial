import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-medium">Individual 404 Page</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}



// ! SSG 
export async function generateStaticParams() {
  // Define static params for the [...not-found] route
  return [
    { slug: 'not-found' },
    // Add more static routes if needed
  ];
}
