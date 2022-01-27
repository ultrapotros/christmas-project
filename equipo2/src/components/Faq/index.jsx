import * as React from 'react';
import {
  styled,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography
  } from '@mui/material'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import './component.css';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
        ))(({ theme }) => ({
            border: `1px solid ${theme.palette.divider}`,
            '&:not(:last-child)': {borderBottom: 0,},
            '&:before': {display: 'none',},
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
      />
      ))(({ theme }) => ({
          backgroundColor:
          theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
          flexDirection: 'row-reverse',
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              transform: 'rotate(90deg)',},
          '& .MuiAccordionSummary-content': {marginLeft: theme.spacing(1),
          },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

/**
 * Component FAQ
 * @returns component react
 */
export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="faqContainer" >
      <h2>Frecuently Asked Questions</h2>
      <h3>Here you can find the more frecuently asked questions,
         if you can solve your doubts here don't hesitate to contact us.</h3>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
          <Typography> How to order </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can order easily using our online platform. When you find a product you need,
            you can add it to cart, login and go through the ordering process. 
            After the order is ready, you will receive order summary to your email. 
            Order summary will also be stored to your account. You can add several items and
             make changes when you access the cart. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography> Payment methods </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can use all the major credit cards. You can also use another payments 
            methods as PayPal o Bizum.
            We also accept bank transfers, but be aware that your order won't be shipped 
            until we receive the transfer,
            which can last even 5 labor days in same cases.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography> Shipping Costs </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              Orders over €100 have free shipping. For other orders, shipping costs 
              depend on your location and products on your order. 
              This costs will be calculated in the checkout process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography> Size changes </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Size changes are free of charges and shipping costs,
            but the return costs are on you. 
            We will proceed to send the new size once we receive the article. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography> VAT </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All our products are already charge with VAT. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Order Tracking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will receive an email with a tracking link once your order leave our facilites. Through this link you 
            will set a delivery hour.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Products Warranty</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Electronic category products have a 3 year warranty. 
            To activate this warranty you have to send us an email within 
            one month from the purchase, including order number and full name. 
            For rest of products you will have one month from delivery to return 
            the product for free in case of manufactoring failures.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>Devolutions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All non-justify devolutions are on client charge. The articles must be 
            returned in their original package and in perfect 
            conditions. Once we receive the article and check it, we will proceed 
            to return the money.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
