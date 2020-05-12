import React from 'react';
import {Edit, 
     TextInput, SimpleFormIterator, ArrayInput, SelectInput,ReferenceInput, TabbedForm,
     FormTab, ImageField, NumberInput, ImageInput, required } from 'react-admin';

     import RichTextInput from 'ra-input-rich-text';

export default(props) => (
    <Edit title="Product Edit" {...props}>
        <TabbedForm>
        <FormTab label="Images">
        <ImageInput multiple source="images" label="Related pictures" accept="image/*">
                <ImageField source="url" title="title" />
            </ImageInput>
        </FormTab>
        <FormTab label="Details">
            <TextInput disabled source="id" />
            <ReferenceInput source="category" reference="api/category" validate={required()}>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput fullWidth multiline source="title" validate={required()} />
            <TextInput fullWidth multiline source="quick_description" validate={required()} />
            <ArrayInput source="characteristics">
                <SimpleFormIterator>
                    <TextInput fullWidth multiline label="Title" source="title" />
                    <TextInput fullWidth multiline label="Value" source="value" />
                </SimpleFormIterator>
            </ArrayInput>
            <SelectInput label='Rate' emptyValue={0} source="rate" choices={[
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
            <NumberInput className='PriceNumber' source='price' validate={required()}/>
            <NumberInput source='shipping_price' validate={required()} />
        </FormTab>
        <FormTab label="Descriptions" >
            <RichTextInput multiline toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} source="description" />
        </FormTab>
        </TabbedForm>

    </Edit>
);
    