import { Link } from "react-router-dom"
import { useSuperHeroesData, useAddSuperHeroData } from "../hooks/useSuperHeroesData"
import { useState } from "react"
export const RQSuperHeroesPage = () => {
  const [name,setName] = useState('')
  const [alterEgo,setAlterEgo] = useState('')
  const {mutate:addHero} = useAddSuperHeroData()
  const addHandler = ()=>{
    const hero = {name,alterEgo}
    addHero(hero)
  }
  // const onSuccess = (data)=> console.log('success',data);
  // const onError = (error)=> console.log('error',error.message);
  const {isLoading,data,isError,error, isFetching,refetch} = useSuperHeroesData()
  
  if (isLoading || isFetching) return <h2>Loading...</h2>
  if (isError) return <h2>{error.message}</h2>
  console.log(data);
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <div>
        <input 
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input 
          type="text"
          value={alterEgo}
          onChange={(e)=>setAlterEgo(e.target.value)}
        />
        <button onClick={addHandler}>Add Hero</button>
      </div>
      <button onClick={refetch}>Fetch Users</button>
      {data?.data.map(hero => {
        return <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      })}
    </>
  )
}
