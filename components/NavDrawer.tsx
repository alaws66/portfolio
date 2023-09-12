'use client'

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';

type TPages = {
  pages: {
    page: string;
    url: string;
  }[]
}

const NavDrawer = ({ pages }: TPages) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        className="sm:!hidden mt-3 mr-3"
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {pages.map(({ page, url }) => (
              <ListItem key={page} disablePadding>
                <Link
                  href={url}
                  onClick={() => setOpen(false)}
                  className="w-full no-underline text-primary-950"
                >
                  <ListItemButton>
                    {page}
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default NavDrawer;