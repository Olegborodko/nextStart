import { useRouter } from "next/router"

export default function () {
  const {query} = useRouter();

  return (
    <>
      user {query.id}
    </>
  )
}