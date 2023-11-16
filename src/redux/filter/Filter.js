import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export  function Filter() {
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  return (
    <div>Filter</div>
  )
}
