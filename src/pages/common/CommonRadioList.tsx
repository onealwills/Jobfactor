import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';

interface Option {
  label: string;
  value: any;
}

interface CommonRadioDropdownProps {
  options: Option[];
  label?: string;
  description?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onSelect?: (value: any) => void;
}

const CommonRadioDropdown: React.FC<CommonRadioDropdownProps> = ({
  options,
  label,
  description,
  startAdornment,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find((option) => option.value === selectedValue);
    setSelectedOption(selectedOption || null);
    onSelect && onSelect(selectedValue);
  };

  return (
    <FormControl style={{ width: '100%' }}>
      <Box
        style={{
            backgroundColor: '#FAFAFA',
            borderRadius: 0,
            boxShadow: 'none',
        }}
      >
          <Box display="flex" alignItems="center" width="100%" px={2} py={1}>
            <Box
              display="flex"
              alignItems="center"
              marginRight={1.5}
              flexGrow={0}
            >
              {startAdornment}
            </Box>
            <Grid container direction="column" alignItems="flex-start">
                {label && (
                    <Grid item>
                        <Typography
                            fontSize={14}
                            color="#23282B"
                        >
                            { label }
                        </Typography>
                    </Grid>
                )}
                <Grid item>
                    <Typography
                        fontSize={16}
                        color="#808080"
                    >
                        { description }
                    </Typography>
                </Grid>
            </Grid>
          </Box>
          <Box width="100%" style={{
                borderTop: '1px solid #D9D9D9',
                padding: 0,
            }}>
            <RadioGroup
              value={selectedOption}
              onChange={handleOptionChange}
              sx={{
                padding: 0,
              }}
            >
              {options.map((option) => {
                const isSelected = selectedOption?.value === option.value;
                return (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={
                      <Radio
                        checked={isSelected}
                        style={{
                          color: isSelected ? '#1976d2' : '#AAAAAA',
                        }}
                        size="small"
                      />
                    }
                    label={
                      <Typography
                          fontSize={16}
                          color={isSelected ? '#23282B' : '#808080'}
                          fontWeight={isSelected ? 600 : 400}
                      >
                          { option.label }
                      </Typography>
                    }
                    sx={{
                      borderBottom: '1px solid #D9D9D9',
                      backgroundColor: isSelected ? '#ededed' : '#fafafa',
                      transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
                      mx: 0,
                      px: 2,
                      py: .5,
                    }}
                  />
                )
              })}
            </RadioGroup>
          </Box> 
      </Box>
    </FormControl>
  );
};

export default CommonRadioDropdown;