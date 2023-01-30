interface PostProps {
  author: string;
  content: string;
}

export function Post(props: PostProps) {
  return(
    <>
      <strong>{props.author} </strong><br/>
      <p>{props.content}</p>
    </>
  )
}