import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';
import { Grommet, Heading, Box } from 'grommet';
import {Paint} from 'grommet-icons';
import {base} from '@airtable/blocks';

const table = base.getTableByName("Color Gallery");
const colorName = table.getFieldByName("Color Name");
const hexValue = table.getFieldByName("Hex");


const theme = {
    global: {
      font: {
        family: 'Roboto', 
        size: '18px',
        height: '20px',
      },
      colors: {accent: '#6CE00D', darko: '#E08D03', brand: '#E00D7C', secondary: '#D119E0'}
    },
  };

  const Appbar = (props) => (
    <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
     />
  )
function ColorGalleryBlock() {

    return (
    <Grommet theme={theme}>
    <Appbar>
        <Heading color="white">Color Gallery</Heading> <Paint size="large" color="accent"/>
    </Appbar>
    <Box background="white" style={{marginTop: '14px'}}>
    {[
        "accent", "secondary", "darko", "brand",
    ].map(color =>
        <Box pad="small" width="50%" round={{corner: 'right' , size: '15px'}} key={{color}} background={{color}} >{color}</Box>
    )
    }
    </Box>
    </Grommet>
    )
}

initializeBlock(() => <ColorGalleryBlock />);
