import * as React from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import { useState, useEffect } from 'react'

export default function FreeSolo() {
  const [list, setList] = useState(['null'])

  const getList = async () => {
    const data = await fetch('https://api.jikan.moe/v3/top/anime')
      .then((res) => res.json())
      .catch((err) => console.log(err))

    const titleList = data.top.map((x) => x.title)
    setList(titleList)
    console.log(titleList)
  }

  useEffect(() => getList(), [])

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={list.map((option) => option)}
        renderInput={(params) => (
          <TextField {...params} label="Search anime by name" />
        )}
      />
    </Stack>
  )
}
