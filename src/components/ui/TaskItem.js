import { Box, Grid, FormControlLabel, Divider} from "@mui/material"
import { useState } from "react";

import { CustomSwitch } from "./CustomSwitch";

export const TaskItem = ({ task }) => {
  const [checked, setChecked] = useState(task.checked);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <Box key={task.id} sx={{
      display: 'flex',
      alignItems: 'center',
      columnGap: '14px',
      height: '40px',
      justifyContent: 'space-between'
    }}>
        <Divider orientation="vertical" variant="middle" sx={{
          backgroundColor: `${task.dividerColor}`,
          borderRadius: '3px',
          py: '20px',
          width: '5px',
          borderRightWidth: 0,
          m: 0,
        }} />

      <Grid container direction='column' rowGap='5px'>
        <div
          className='task-title'
          style={checked ? {textDecoration: 'line-through'} : {}}
        >{task.title}</div>
        <div className='task-description'>{task.description}</div>
      </Grid>
      <FormControlLabel
        sx={{
          margin: 0,
        }}
        control={<CustomSwitch checked={checked} onChange={handleChange} />}
      />
    </Box>)
}