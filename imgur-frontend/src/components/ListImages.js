import React from 'react'
import Image from './Image'

const ListImages = ({ state }) => {
  return (
    <div>
      <table>
        <tbody>
          {state.imagelinks.map((entry) => (
            <Image key={entry._id} img={entry} />
          ))}
        </tbody>
      </table>
    </div>
  )
}



export default ListImages
