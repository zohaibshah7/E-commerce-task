import React from 'react'

function CategoryChip({category, isChosen, onClick}) {
  // console.log("isChosen==>", isChosen)
  const {name} = category

  return (
    <div
    onClick={onClick}
    className={`${isChosen ? "bg-orange-400 text-white" : "bg-white text-gray-700"}
                    p-2 px-4 rounded-md border border-orange-300 hover:bg-orange-400 hover:text-white cursor-pointer transition `}>
        <h1>{name}</h1>
    </div>
  )
}

export default CategoryChip
