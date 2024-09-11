import { Heart } from "@phosphor-icons/react"
import React, { useState } from "react"

export const Favorite: React.FC = function () {
  const [favorite, setFavorite] = useState<boolean>(false)

  function handleToFavorite() {
    setFavorite(!favorite)
  }

  console.log(favorite)

  return (
    <div
      data-check={favorite}
      className="border-2 p-2 px-3 hover:cursor-pointer border-zinc-950 rounded-lg flex items-center justify-center data-[check=true]:bg-zinc-950 data-[check=false]:bg-zinc-100"
    >
      <Heart
        data-check={favorite}
        size={24}
        weight="fill"
        className="data-[check=true]:text-zinc-100 data-[check=false]:text-zinc-950"
        onClick={() => handleToFavorite()}
      />
      <h1>{favorite}</h1>
    </div>
  )
}
