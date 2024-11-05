import axios from "axios"
import { useEffect } from "react"

function HomePage() {
  useEffect(() => {
     axios
      .get("https://blog-02.liara.run/api/v1/posts/3")
      .then(({data}) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log('error',err)
      })
  }, [])
  
  return (
    <div>HomePage</div>
  )
}

export default HomePage