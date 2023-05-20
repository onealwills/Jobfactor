import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Option {
  label: string;
  value: any;
}

interface CommonRadioDropdownProps {
  options: Option[];
  label?: React.ReactNode;
  placeholder?: string;
  startAdornment?: React.ReactNode;
  onSelect?: (value: any) => void;
}

const CommonRadioDropdown: React.FC<CommonRadioDropdownProps> = ({
  options,
  label,
  placeholder,
  startAdornment,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionChange = (event: SelectChangeEvent<any>) => {
    const selectedValue = event.target.value as string;
    const selectedOption = options.find((option) => option.value === selectedValue);
    setSelectedOption(selectedOption || null);
    onSelect && onSelect(selectedValue);
  };

  return (
    <FormControl style={{ width: '100%' }}>
      <Select
        value={selectedOption?.value || ''}
        onChange={handleOptionChange}
        variant="standard"
        style={{
          fontSize: 16,
          color: '#808080',
          width: '100%',
          backgroundColor: '#FCFBF8',
          borderRadius: 0,
          boxShadow: 'none',
        }}
        sx={{
          mb: 2.5,
          '&  .MuiSelect-select': {
            px: 2,
            py: 1,
          }
        }}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
        }}
        IconComponent={KeyboardArrowDownIcon}
        displayEmpty
        renderValue={(value: any) => {
          return <Box>
            {label && (
              <Typography fontSize={14} color="#747474">
                {label}
              </Typography>
            )}

          <Typography fontSize={16} color={selectedOption ? '#23282B' : '#808080'}>
                {selectedOption?.label || placeholder}
          </Typography>
          </Box>
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <FormControlLabel
              value={option.value}
              control={
                <Radio
                  checked={selectedOption?.value === option.value}
                  style={{
                    color:
                      selectedOption?.value === option.value
                        ? '#1976d2'
                        : '#AAAAAA',
                  }}
                  size="small"
                />
              }
              label={
                <Typography
                  fontSize={16}
                  color={
                    selectedOption?.value === option.value
                      ? '#23282B'
                      : '#808080'
                  }
                  fontWeight={
                    selectedOption?.value === option.value ? 600 : 400
                  }
                >
                  {option.label}
                </Typography>
              }
              sx={{
                py: 0.5,
              }}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CommonRadioDropdown;