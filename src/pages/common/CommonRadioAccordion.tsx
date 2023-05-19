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
  value: string;
  label: string;
}

interface CommonRadioDropdownProps {
  options: Option[];
  label?: string;
  placeholder?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const CommonRadioDropdown: React.FC<CommonRadioDropdownProps> = ({
  options,
  label,
  placeholder,
  startAdornment,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find((option) => option.value === selectedValue);
    setSelectedOption(selectedOption || null);
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <FormControl style={{ width: '100%' }}>
      <Accordion
        expanded={isDropdownOpen}
        onChange={handleToggleDropdown}
        TransitionProps={{ unmountOnExit: true }}
        style={{
            backgroundColor: '#FAFAFA',
            borderRadius: 0,
            boxShadow: 'none'
        }}
      >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >
          <Box display="flex" alignItems="center" width="100%">
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
                        color={selectedOption ? '#23282B' : '#808080'}
                    >
                        { selectedOption?.label || placeholder }
                    </Typography>
                </Grid>
            </Grid>
          </Box>
        </AccordionSummary>
        <AccordionDetails
            style={{
                borderTop: '1px solid #D9D9D9',
                padding: 0,
            }}
        >
          <Box width="100%">
            <RadioGroup
              value={selectedOption}
              onChange={handleOptionChange}
              sx={{
                padding: 0,
              }}
            >
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={
                    <Radio
                      checked={selectedOption?.value === option.value}
                      style={{
                        color: selectedOption?.value === option.value ? '#1976d2' : '#AAAAAA',
                      }}
                    />
                  }
                  label={
                    <Typography
                        fontSize={16}
                        color="#808080"
                    >
                        { option.label }
                    </Typography>
                  }
                  sx={{
                    borderBottom: '1px solid #D9D9D9',
                    mx: 0,
                    px: 2,
                    py: .375,
                  }}
                />
              ))}
            </RadioGroup>
          </Box>
        </AccordionDetails>
      </Accordion>
    </FormControl>
  );
};

export default CommonRadioDropdown;