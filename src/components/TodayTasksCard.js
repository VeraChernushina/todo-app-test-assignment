import { Box, Grid, Checkbox } from "@mui/material"
import { TaskItem} from "./ui/TaskItem";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import '../styles/TodayTasksCard.css';

export const TodayTasksCard = ({ card }) => {
  return (
    <Box>
      <Grid container pb='15px' sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <Checkbox
          defaultChecked
          checkedIcon={<CheckBoxIcon sx={{ color: '#F4F4F4' }} />}
          sx={{
            color: '#F4F4F4'
          }}
        />
        <h2>{card.date}:</h2>
      </Grid>

      <Box sx={{
        bgcolor: '#282828',
        boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
        borderRadius: '25px',
        py: '21px',
        pl: '15px',
        pr: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        rowGap: '16px',
      }}>
        {card.todos.map(todo =>
          <TaskItem task={todo} key={todo.id} />
        )}
      </Box>
    </Box>
  )
}