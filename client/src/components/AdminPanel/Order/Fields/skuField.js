import * as React from "react";
import './skuField.css'

const TextField = ({label, source, record = {} }) => {
    const isObject = typeof record[source] === "object"
    if(!isObject) {
        return record[source]
    }
    return(
        <span>               
            <span className='MuiFormLabel-root MuiInputLabel-root RaLabeled-label-32 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense'>{label || ''}</span>
            <table class="Stock">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Rate</th>
                    <th>Stock</th>
                    <th>Count</th>
                    <th>Shipp_price</th>
                    <th>Price</th>
                </tr>
                </thead>
                { record.fullPrice ?
                        <tfoot>
                            <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>FullPrice :</td>
                            <td>{record.fullPrice}$</td>
                            </tr>
                        </tfoot>
                : null}
                
                <tbody>
                    {isObject ? record[source].map( (i) => {
                        return (<tr>
                        <td>{i.productID._id}</td>
                        <td>{i.productID.title}</td>
                        <td>{i.productID.rate}</td>
                        <td>{i.sku ? Object.values(i.sku).join(" / ") : ""}</td>
                        <td>{i.count}</td>
                        <td>{i.productID.shipping_price}$</td>
                        <td>{i.productID.price}$</td>
                    </tr>)
                        }) : null}
                        

                    
                </tbody>
            </table>

        </span>
    )
};

export default TextField;
