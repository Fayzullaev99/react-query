import React from 'react'
import { useParams } from 'react-router-dom'
import useSuperHeroData from '../hooks/useSuperHeroData'
const RQSuperHero = () => {
    const { heroId } = useParams()
    const {isLoading,isFetching,isError,error,data} = useSuperHeroData(heroId)
    if (isLoading || isFetching) return <h2>Loading...</h2>
    if (isError) return <h2>{error.message}</h2>
    return (
        <>
            <h2>{data?.data.name} - {data?.data.alterEgo}</h2>
        </>
    )
}

export default RQSuperHero