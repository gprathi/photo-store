import React , {useContext } from "react"
import { Context } from "../Context"
import Image from "../components/Image.js"


function Photos(){
  
  const {allPhotos} = useContext(Context)

  const imgCollection = allPhotos.map( photo => <Image key={photo.id} photo={photo} />  )
  // console.log(imgCollection)
  
    return (
      <main className="photos">
      {imgCollection}
  </main>
    );
}

export default Photos