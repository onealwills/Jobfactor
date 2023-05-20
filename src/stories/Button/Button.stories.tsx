import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Jobfactor/Button',
    component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
    args: {
        label: 'Click me!'
    }
};

export const Variants: Story = {
    render: () => (
        <Stack spacing={2} maxWidth={300}>
            <Button variant="text" label="Text Button" />
            <Button variant="contained" label="Contained Button" />
            <Button variant="outlined" label="Outlined Button" />
        </Stack>
    )
};

export const Colors: Story = {
    render: () => (
        <Stack spacing={2} maxWidth={300}>
            <Button variant="contained" label="Primary" />
            <Button variant="contained" color="secondary" label="Secondary" />
            <Button variant="contained" color="success" label="Success" />
            <Button variant="contained" color="error" label="Error" />
        </Stack>
    )
};

export const Sizes: Story = {
    render: () => (
        <Stack spacing={2} maxWidth={300}>
            <Button variant="contained" size="small" label="Small" />
            <Button variant="contained" size="medium" label="Medium" />
            <Button variant="contained" size="large" label="Large" />
        </Stack>
    )
};
