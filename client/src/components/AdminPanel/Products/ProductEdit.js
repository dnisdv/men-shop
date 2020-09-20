import React from 'react';
import {Edit, 
     TextInput, SimpleFormIterator, ArrayInput, SelectInput,ReferenceInput, TabbedForm,
     FormTab,  NumberInput, ImageInput } from 'react-admin';

     import RichTextInput from 'ra-input-rich-text';
     import { InputAdornment } from '@material-ui/core';
    

     import get from 'lodash/get';
     import { makeStyles } from '@material-ui/core/styles';
     import Typography from '@material-ui/core/Typography';
     import classnames from 'classnames';
     
     
export default(props) => (
    <Edit title="Product Edit" {...props}>

<TabbedForm>
        <FormTab label="Images">

            <ImageInput multiple source="images" label="Related pictures" accept="image/*">
                <ImageField source="path" title="title" />
            </ImageInput>

        </FormTab>   
        <FormTab label="Details">
        <TextInput disabled source="id" />
        <ReferenceInput allowEmpty source="category" reference="api/category" >
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput fullWidth multiline source="title"  />
            <TextInput fullWidth multiline source="quick_description"  />
            <ArrayInput source="characteristics">
                <SimpleFormIterator >
                    <TextInput fullWidth multiline label="Title" source="title" />
                    <TextInput fullWidth multiline label="Value" source="value" />
                </SimpleFormIterator>
            </ArrayInput>
            <SelectInput label='Rate' emptyValue={0} defaultValue={0} source="rate" choices={[
                    { id: "0", name: "0", rate: 0 },
                    { id: "1", name: "1", rate: 1 },
                    { id: '2', name: '2', rate: 2 },
                    { id: '3', name: '3', rate: 3 },
                    { id: '4', name: '4', rate: 4 },
                    { id: '5', name: '5', rate: 5 },
                ]} optionValue="rate" />
            <ArrayInput source="stock">
                <SimpleFormIterator>
                    <TextInput label="Title" source="title" />
                    <ArrayInput source="data">
                    <SimpleFormIterator>
                        <TextInput label="Value" source="value" />
                        <NumberInput label="Quantity" source="qnt" />
                    </SimpleFormIterator>
                    </ArrayInput>
                </SimpleFormIterator>
            </ArrayInput>
            <NumberInput className='PriceNumber' source='price' InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                        ),
                    }} />

        </FormTab>
        <FormTab label="Descriptions" >
            <RichTextInput multiline toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} source="description" />
        </FormTab>
        </TabbedForm>

    </Edit>
);


const sanitizeRestProps = (props) =>({
    addLabel,
    allowEmpty,
    basePath,
    cellClassName,
    className,
    emptyText,
    formClassName,
    fullWidth,
    headerClassName,
    label,
    linkType,
    link,
    locale,
    record,
    resource,
    sortable,
    sortBy,
    sortByOrder,
    source,
    textAlign,
    translateChoice,
    ...props
}) => props;



const useStyles = makeStyles(
    {
        list: {
            display: 'flex',
            listStyleType: 'none',
        },
        image: {
            margin: '0.5rem',
            maxHeight: '10rem',
        },
    },
    { name: 'RaImageField' }
);

const ImageField = props => {
    const {
        className,
        classes: classesOverride,
        emptyText,
        record,
        source,
        src,
        title,
        ...rest
    } = props;
    const sourceValue = get(record, source);
    let isLocal = sourceValue ?  sourceValue.includes('blob:') : false;
    const classes = useStyles(props);
    if (!sourceValue) {
        return emptyText ? (
            <Typography
                component="span"
                variant="body2"
                className={className}
                {...sanitizeRestProps(rest)}
            >
                {emptyText}
            </Typography>
        ) : (
            <div className={className} {...sanitizeRestProps(rest)} />
        );
    }

    if (Array.isArray(sourceValue)) {
        return (
            <ul
                className={classnames(classes.list, className)}
                {...sanitizeRestProps(rest)}
            >
                {sourceValue.map((file, index) => {
                    const fileTitleValue = get(file, title) || title;
                    return (
                        <li key={index}>
                            <img
                                alt={fileTitleValue}
                                title={fileTitleValue}
                                src={isLocal ? sourceValue : `/` + sourceValue}
                                className={classes.image}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }

    const titleValue = get(record, title) || title;

    return (
        <div className={className} {...sanitizeRestProps(rest)}>
            <img
                title={titleValue}
                alt={titleValue}
                src={ isLocal ? sourceValue :"/" + sourceValue}
                className={classes.image}
            />
        </div>
    );
};

ImageField.displayName = 'ImageField';

ImageField.defaultProps = {
    addLabel: true,
};
