import Image from "next/image";

// export async function generateStaticParams() {
//     const races = await fetch('http://localhost:3000/api/schedule/season').then((res) => res.json())

//     return races.map((race) => ({
//       round: race.round,
//     }))
//   }

const ConstructorDetailPage = async ({ params }) => {

  const constructor = await fetch(`http://localhost:3000/api/constructors/${params.constructorId}`
  ).then((res) => res.json())

  return (
    <div className="">
      {constructor.color}
    </div>
  )
}

export default ConstructorDetailPage