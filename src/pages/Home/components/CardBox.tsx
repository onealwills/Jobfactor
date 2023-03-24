import { InfoOutlined } from '@mui/icons-material';
import { Avatar, Button, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

type Props = {
  tooltipText?: string,
  infoText?: string,
  title?: string,
  list?: Array<any>,
  btnText?: string,
  icon?: React.ReactNode
};

const CardBox = ({ tooltipText, title, list = [], btnText, icon }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: '#FCFBF8',
        padding: '16px 20px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "32px",
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: '8px 16px',
          background: "#FFFFFF",
          borderRadius: "8px",
          width: '100%'
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: '100%',
            gap: '10px',
            borderBottom: '1px solid #ccc',
            padding: '10px',
            marginBottom: '16px'
          }}
        >
          {icon}
          <Typography sx={{ color: '#23282B', fontSize: '16px', fontWeight: '600' }}>{title}</Typography>
          {tooltipText &&
            <Tooltip
              title={tooltipText}
              placement="top"
              classes={{ tooltip: 'info-box' }}
            >
              <InfoOutlined sx={{ color: '#808080' }} />
            </Tooltip>
          }
        </Box>
        {list?.length > 0 && list?.map(item => (
          <Box
            sx={{
              width: '100%',
              background: "#FCFBF8",
              borderBottom: '1px solid #EDEDED',
              padding: '10px',
              gap: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item?.img && <Avatar sx={{ width: 24, height: 24 }} alt="" src={item?.img} />}
            <Typography sx={{ color: '#23282B', fontSize: '14px', textAlign: 'center' }}>{item?.name}</Typography>
          </Box>
        ))}
        <Button
          variant='outlined'
          sx={{
            width: '100%',
            marginTop: '16px',
            height: "44px",
            borderColor: '#05668D',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#05668D',
            textTransform: 'capitalize'

          }}
        >
          {btnText}
        </Button>

      </Box>
    </Box >
  )
}

export default CardBox