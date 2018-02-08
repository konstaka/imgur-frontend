import React from 'react'

const Image = ({ img }) => {
  console.log(img)
  const addr = `http://i.imgur.com/a/${img.id}`
  return (
    <tr>
      <td>
        <img src={addr} alt=" " ></img>
      </td>
    </tr>
  )
}



export default Image
