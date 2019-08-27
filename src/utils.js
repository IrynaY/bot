const GIPHY_KEY = "b9rBJzaSGJvCDpNo1GrhVEOIev560Pn4"

export const getGifByTag = async (tag = 'panic') => await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_KEY}&tag=${tag}`)
  .then(async resp => {
    const { data: { image_url } } = await resp.json()
    return image_url
  })
