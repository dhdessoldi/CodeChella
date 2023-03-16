import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({question, answer}) {
  return (
    <div>
      <Accordion sx={{marginBottom:'16px'}}>
        <AccordionSummary sx={{backgroundColor:'var(--azul-escuro)', color:'var(--branco)'}}
          expandIcon={<ExpandMoreIcon sx={{color:'var(--branco)'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontFamily:'var(--text-font)', fontSize:'1.25rem', fontWeight:'700'}}>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'var(--azul-claro)', color:'var(--cinza)'}}>
          <Typography sx={{fontFamily:'var(--text-font)', fontSize:'1.25rem', fontWeight:'500'}}>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
