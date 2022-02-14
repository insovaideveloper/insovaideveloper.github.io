import ArticalList from "../components/ArticalList"


export default function Home({artical}) {
  console.log(artical)
  return (
    <div>
      <head>
        <title>Home page</title>
        <meta name='keywords' content='Web dev'></meta>
      </head>
      <h2>Home</h2>
      <ArticalList artical={artical}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res =  await fetch(`https://jsonplaceholder.typicode.com/users`)
  const artical = await res.json()
  return {
    props: {
      artical
    }
  }
}