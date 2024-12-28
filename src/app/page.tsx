import Link from "next/link";

export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await url.json();
  console.log(res)
  return (
    <div>
      <Link href={'/posts'}>
        <h1>Posts</h1>
      </Link>
      <Link href={'/comments'}>
        <h1>comments</h1>
      </Link>
      <Link href={'/albums'}>
        <h1>albums</h1>
      </Link>
      <Link href={'/photos'}>
        <h1>photos</h1>
      </Link>
      <Link href={'/todos'}>
        <h1>todos</h1>
      </Link>
      <Link href={'/users'}>
        <h1>users</h1>
      </Link>
      
    </div>
  );
}
