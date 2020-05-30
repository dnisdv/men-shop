import React from 'react';
import {  Create, 
    TextInput, SelectInput,ReferenceInput,
    ArrayInput , SimpleFormIterator , NumberInput, TabbedForm, FormTab, ImageInput, ImageField, required } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';


export default(props) => {

    const isRequired = false
    return(
    
    <Create title="Create a Product" {...props}>
        <TabbedForm>
        <FormTab label="Images">
            <ImageInput multiple source="images" label="Related pictures" accept="image/*">
                <ImageField source="url" title="title" />
            </ImageInput>

        </FormTab>   
        <FormTab label="Details">
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
            <NumberInput className='PriceNumber' source='price'  />
            <NumberInput source='shipping_price'  />

        </FormTab>
        <FormTab label="Descriptions" >
            <RichTextInput multiline toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} source="description" />
        </FormTab>
        </TabbedForm>
    </Create>
)
            }