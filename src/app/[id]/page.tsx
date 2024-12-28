import Link from "next/link";

async function Dynamics(props: any) {
  const url = await fetch(
    `https://jsonplaceholder.typicode.com/${props.params.id}`
  );
  const res = await url.json();

  return (
    <div>
      <h1>All {props.params.id} Names/Titles</h1>
      {res.map((post: any, index: number) => {
        return (
          <>
            <Link href={`${props.params.id}`}>
              <h1 key={index} className="no-underline text-black">
                {post.title}
                {post.name}
              </h1>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default Dynamics;
