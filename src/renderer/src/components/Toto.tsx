import { useState, useEffect } from 'react'

function Toto(): JSX.Element {
  const [photos, setPhoto] = useState([])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function getALlPhoto() {
    try {
      const response = await electronAPI.getAllPhotos()
      setPhoto(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    console.log(photos)
    setPhoto([])
  }, [])

  return (
    <div className="flex justify-center p-2">
      <div className="w-1/3 bg-Blue-200 ">
        <button className="bg-red-200 p-2">Create photo</button>
        <button onClick={() => getALlPhoto()}>all photos</button>
        <div>
          <div className="list photo">
            {photos.map((photo) => (
              <div key={photo.id}>{photo.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toto
