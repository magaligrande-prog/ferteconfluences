import { useState, useEffect } from 'react'
import { client, isConfigured } from '../sanity/client.js'

export function useSanityQuery(query, fallbackData = []) {
  const [data, setData] = useState(fallbackData)
  const [loading, setLoading] = useState(isConfigured)

  useEffect(() => {
    if (!isConfigured) return

    client.fetch(query)
      .then(result => {
        if (result?.length) setData(result)
        setLoading(false)
      })
      .catch(err => {
        console.warn('Sanity fetch failed, using fallback data:', err.message)
        setLoading(false)
      })
  }, [query])

  return { data, loading }
}
