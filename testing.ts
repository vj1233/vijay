import React from 'react';
import { FieldExtensionComponentProps } from '@backstage/plugin-scaffolder-react';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';

const ServicePicker = ({ formData = '' }: FieldExtensionComponentProps<string>) => {
    const detailsList = formData.split(',');

    return (
        <div>
            <Typography variant="body2">Service Plan Details</Typography>
            <List>
                {detailsList.map((detail) => (
                    <ListItem key={detail}>
                        <ListItemIcon>
                            <LabelIcon />
                        </ListItemIcon>
                        <ListItemText primary={detail} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default ServicePicker;
