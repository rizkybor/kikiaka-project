import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import CollectionsIcon from '@mui/icons-material/Collections';
import Link from 'next/link'


export const mainListItems = (
  <React.Fragment>
    <Link href="/dashboard"> 
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>

    <Link href="/website"> 
      <ListItemButton>
        <ListItemIcon>
          <BrandingWatermarkIcon />
        </ListItemIcon>
        <ListItemText primary="Website" />
      </ListItemButton>
    </Link> 

    <Link href="/graphics"> 
      <ListItemButton>
        <ListItemIcon>
          <CollectionsIcon />
        </ListItemIcon>
        <ListItemText primary="Graphics" />
      </ListItemButton>
    </Link>
   
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      {/* Saved reports */}
    </ListSubheader>
      <Link href="/"> 
          <ListItemButton>
            <ListItemIcon>
              <ArrowBackIosIcon />
            </ListItemIcon>
              <ListItemText primary="Back to Home" />
          </ListItemButton>
      </Link>
  
  </React.Fragment>
);