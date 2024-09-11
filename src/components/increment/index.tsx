import { Input } from "@/components/ui/input"
import { Minus, Plus } from "@phosphor-icons/react"
import React, { useState } from "react"

export const Increment: React.FC = function () {
  const [count, setCount] = useState(1)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  console.log(count)

  return (
    <div className="w-24 flex items-center rounded-lg border-zinc-950 border-2 px-2">
      <Plus
        size={20}
        weight="regular"
        onClick={() => increment()}
        className="hover:cursor-pointer"
      />
      <Input
        className="w-[30px] mx-[2px] border-none text-center h-[35px] p-0 text-lg"
        value={count}
        readOnly
      />
      <Minus
        size={20}
        weight="regular"
        onClick={() => decrement()}
        className="hover:cursor-pointer"
      />
    </div>
  )
}
