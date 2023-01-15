import ExpandCircleDownRounded from "@mui/icons-material/ExpandCircleDownRounded"
import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from "@mui/material"

import { TaskItem } from "./TaskItem"

export const TaskCard = ({card}) => {
  return (
    <>
    <Accordion
      sx={{
      bgcolor: '#282828',
      boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
      borderRadius: '25px',
      py: '14px',
      pl: '15px',
      pr: '25px',
      fontFamily: "'Lato', sans-serif",
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '24px',
      lineHeight: '28px',
      color: '#F4F4F4',
      minHeight: '51px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      '&:before': {
        height: 0,
      },
      '&:last-of-type': {
        borderRadius: '25px',
      },
    }}
    >
      <AccordionSummary
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 0,
          width: '100%',
        }}
        expandIcon={<ExpandCircleDownRounded sx={{color: "#F4F4F4", width: '21px', height: '21px'}} />}>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <Divider orientation="vertical" variant="middle" sx={{
          backgroundColor: '#A9A9A9',
          borderRadius: '3px',
          py: '20px',
          width: '5px',
          borderRightWidth: 0,
          m: 0,
          mr: '13px',
        }} />
        <Typography
          sx={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '24px',
            lineHeight: '28px',
            color: '#F4F4F4',
          }}
        >{card.date} Tasks</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails
        sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        rowGap: '16px',
      }}
      >
        {card.todos.map(todo =>
          <TaskItem task={todo} key={todo.id} />
        )}
      </AccordionDetails>
    </Accordion>
    </>
  )
}