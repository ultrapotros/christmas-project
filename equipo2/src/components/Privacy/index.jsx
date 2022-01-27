import React from "react";
import {
  styled,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography
  } from '@mui/material'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import "./component.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="privacy-container" >
      <h2>Privacy Policy</h2>
      <h3>This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from
        (Store URL).</h3>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
          <Typography>WHAT PERSONAL INFORMATION WE COLLECT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          When you visit the Site, we automatically collect certain information
        about your device, including information about your web browser, IP
        address, time zone, and some of the cookies that are installed on your
        device. Additionally, as you browse the Site, we collect information
        about the individual web pages or products that you view, what websites
        or search terms referred you to the Site, and information about how you
        interact with the Site. We refer to this automatically collected
        information as Device Information. We collect Device Information using
        the following technologies: Cookies are data files that are placed on
        your device or computer and often include an anonymous unique
        identifier. Log files track actions occurring on the Site, and collect
        data including your IP address, browser type, Internet service provider,
        referring/exit pages, and date/time stamps. Mention all other tracking
        tools and/or technologies being used by your website. Also, when you
        make a purchase or attempt to make a purchase through the Site, we
        collect certain information from you, including your name, billing
        address, shipping address, payment information (including credit card
        numbers Mention all types of accepted payments, email address, and phone
        number. This is called Order Information. Make sure you mention all
        other information that you collect. By Personal Information in this
        Privacy Policy, we are talking both about Device Information and Order
        Information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>HOW DO WE USE YOUR PERSONAL INFORMATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We use the Order Information that we collect generally to fulfil any
        orders placed through the Site (including processing your payment
        information, arranging for shipping, and providing you with invoices
        and/or order confirmations). Additionally, we use this Order Information
        to: Communicate with you. Screen our orders for potential risk or fraud.
        When in line with the preferences you have shared with us, provide you
        with information or advertising relating to our products or services. We
        use the Device Information that we collect to help us screen for
        potential risk and fraud (in particular, your IP address), and more
        generally to improve and optimize our Site.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>SHARING YOUR PERSONAL INFORMATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We share your Personal Information with third parties to help us use
        your Personal Information, as described above. We also use Google
        Analytics to help us understand how our customers use (Store Name). How
        Google uses your Personal Information. Finally, we may also share your
        Personal Information to comply with applicable laws and regulations, to
        respond to a subpoena, search warrant or other lawful requests for
        information we receive, or to otherwise protect our rights.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>BEHAVIOURAL ADVERTISING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We use your Personal Information to provide you with targeted
        advertisements or marketing communications we believe may be of interest
        to you. Mention opt-out links from external services such as: Facebook
        Google You can opt out of targeted advertising…
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>YOUR RIGHTS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you are a European resident, you have the right to access the
        personal information we hold about you and to ask that your personal
        information is corrected, updated, or deleted. If you would like to
        exercise this right, please contact us. Additionally, if you are a
        European resident we note that we are processing your information in
        order to fulfil contracts we might have with you (for example if you
        make an order through the Site), or otherwise to pursue our legitimate
        business interests listed above. Please note that your information will
        be transferred outside of Europe, including to Canada and the United
        States.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>DATA RETENTION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          When you place an order through the Site, we will maintain your Order
        Information for our records unless and until you ask us to delete this
        information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>MINORS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The Site is not intended for individuals under the age of (CLEARLY
        MENTION AGE).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>CHANGES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We may update this privacy policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal or
        regulatory reasons. If you have questions and/or require more
        information, do not hesitate to contact us (Add Relevant contact
        information).
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
