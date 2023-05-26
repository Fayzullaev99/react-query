import React from 'react'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'

const fetchColors = (pageParam) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

const InfiniteQueries = () => {
    const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
        ['colors'],
        ({ pageParam = 1 }) => fetchColors(pageParam),
        {
            getNextPageParam: (_lastPage, pages) => {
                if (pages.length < 4) {
                    return pages.length + 1
                } else {
                    return undefined
                }
            }
        }
    )
    return (
        <div>
            <div>
                {data?.pages.map((group, i) => (
                    <React.Fragment key={i}>
                        {group.data.map((color) => (
                            <h2 key={color.id}>{color.id} {color.label}</h2>
                        ))}
                    </React.Fragment>
                ))}
            </div>
            <div><button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button></div>
        </div>
    )
}

export default InfiniteQueries