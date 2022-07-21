import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabButtonStyle = {
   fontFamily: 'PT Sans', 
   color: '#323B3C', 
   fontWeight: 'bold', 
   textTransform: 'none',
   fontSize: '1.1em'
}

export default function Experience() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="experience" className="experience-tabs-container">
      <h2>Experience</h2>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Cadets" {...a11yProps(0)} sx={tabButtonStyle}/>
            <Tab label="AEC" {...a11yProps(1)} sx={tabButtonStyle}/>
            <Tab label="Math Contest Prep" {...a11yProps(2)} sx={tabButtonStyle}/>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="tab-info-container">
            <div>
              <div className="experience-heading">
                <h4>AIR CADET - 110 Blackhawk Squadron</h4>
                <p className="experience-dates">Nov 2016 - Jun 2022</p>
              </div>
              <ul className="experience-description">
                <li>Led the development of online Cadet training courses </li>
                <li>Discovered, built, and implemented asynchronous course content </li>
                <li>Supported, coached, and mentored a group of cadets as the Rifle Drill Team Commander </li>
                <li>Directed the Rifle Drill Team for the Annual Ceremonial Review </li>
                <li>Graduated as Warrant Officer Second Class</li>
              </ul>
            </div>
            <img className="picture" src={require('./images/sqn.png')} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className="tab-info-container">
            <div>
              <div className="experience-heading">
                <h4>VICE PRESIDENT - Agincourt Environmental Council</h4>
                <p className="experience-dates">Sep 2021 - Jun 2022</p>
              </div>
              <ul className="experience-description">
                <li>Worked together with a Co-Vice President and President to plan and run events as well as organize meetings </li>
                <li>Led the production of an Earth Day video</li>
                <li>Promoted the council’s booth on Expo day</li>
              </ul>
            </div>
            <img className="picture" src={require('./images/aec.jpg')} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className="tab-info-container">
            <div>
              <div className="experience-heading">
                <h4>FOUNDER - ACI Math Contest Prep</h4>
                <p className="experience-dates"> Oct 2021 – Jun 2022</p>
              </div>
              <ul className="experience-description">
                <li>Planned meetings, managed members, and organized a google classroom with over 40 students </li>
                <li>Created presentations and instructed weekly meetings through Google Meet on math contest material</li>
              </ul>
            </div>
            <img className="picture" src={require('./images/mathlogo.png')} />
          </div>
        </TabPanel>
    </Box>
    </div>
  );
}
