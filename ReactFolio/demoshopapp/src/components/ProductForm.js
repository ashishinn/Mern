import {useState} from 'react';
import './ProductForm.css'


function ProductForm(props){


    const [newTitle , setTitle] = useState('');
    const [newDate , setDate] = useState('');

function dateChangeHandler(event){
        setDate(event.target.value)
        console.log(event.target.value);
}

function titleChangeHandler(event){


    setTitle(event.target.value);
    console.log("printing");
    console.log(newTitle);
    console.log(newDate);
}

function submitHandler(event){
    event.preventDefault();

    const productData = {
        title:newTitle,
        date:newDate
    }
    // console.log(productData);
    props.onSaveProduct(productData);
    setDate('');
    setTitle('');
}


    return (
        <form onSubmit={submitHandler}> 
            <div className='new-product_title'>
        <label>Title</label>
        <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
    </div>
        <div className='new-product_date'>
            <label>Date</label>
            <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>  

        <div className='new-product_button'>
            <button type='submit'>Add product</button>
        </div>
         </form>

    )

}
export default ProductForm;