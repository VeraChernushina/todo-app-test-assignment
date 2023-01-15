import { Grid } from "@mui/material";
import { TodayTasksCard } from "./TodayTasksCard";

import { TaskCard } from "./ui/TaskCard";

import { tasks } from "../utils/data";

export const TodosList = () => {
  return (
    <Grid container sx={{
      flexDirection: 'column',
      boxSizing: 'border-box',
      gap: 4,
    }}>
      {tasks.map((card, index) => {
        return index === 0 ?
        <TodayTasksCard key={index} card={card} /> :
        <TaskCard card={card} key={index} />
      }
      )}
    </Grid>
  )
}