import { useForm } from 'react-hook-form'
import { Table, TableHeader, TableBody, TableCell, TableFooter, TableHeaderCell, TableRow } from 'semantic-ui-react'
import { colorChoicesArray, hardwareChoicesArray, largeItemsArray, smallItemsArray } from '../assets/storeItems/Items'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const SubmitForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm()

    // displays success message when submission is successful
    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'top-right',
            autoClose: 10000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    const onSubmit = async (data: any) => {

        let grandTotal = 0

        const { largeItems, smallItems, hardware, color, message, name, email } = data;

        try {
            const largeItemChoices = (): string => {
                let result = "Large items ordered:\n"
                for (let i = 0; i < largeItemsArray.length; i++) {
                    const largeItem = largeItems[largeItemsArray[i].id]
                    const baseItem = largeItemsArray[i]
                    if (largeItem.quantity > 0) {
                        const totalprice = baseItem.price * largeItem.quantity;
                        grandTotal += totalprice
                        result += `\nDescription: ${baseItem.description}\nUnit Price: $${baseItem.price}\nQuantity: ${largeItem.quantity}\nItem Total Price: $${totalprice}. \n\n`
                    }
                }
                return result.trim() || "No large items ordered"
            }

            const smallItemChoices = (): string => {
                let result = "Small items ordered:\n"
                for (let i = 0; i < smallItemsArray.length; i++) {
                    const smallItem = smallItems[smallItemsArray[i].id]
                    const baseItem = smallItemsArray[i]
                    if (smallItem.quantity > 0) {
                        const totalprice = baseItem.price * smallItem.quantity
                        grandTotal += totalprice
                        result += `\nDescription: ${baseItem.description}\nUnit Price: $${baseItem.price}\nQuantity: ${smallItem.quantity}\nItem Total Price: $${totalprice}. \n\n`
                    }
                }
                return result.trim() || "No small items ordered";
            };

            const hardwareChoices = (): string => {
                const selectedHardware = Object.entries(hardware)
                    .filter(([key, value]) => value === true)
                    .map(([key, value]) => key);

                if (selectedHardware.length > 0) {
                    return `Hardware choices: ${selectedHardware.join(', ')}`;
                } else {
                    return 'No hardware selected.';
                }
            };

            const colorChoices = (): string => {
                const selectedColor = Object.entries(color)
                    .filter(([key, value]) => value === true)
                    .map(([key, value]) => key);

                if (selectedColor.length > 0) {
                    return `Color choices: ${selectedColor.join(', ')}`;
                } else {
                    return 'No color selected.';
                }
            };

            const printGrandTotal = (grandTotal: number): string => {
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });
                return formatter.format(grandTotal)
            }

            const largeMementos = largeItemChoices() 
            const smallMementos = smallItemChoices()
            const hardwareTypes = hardwareChoices()
            const colors = colorChoices()

            const total = printGrandTotal(grandTotal)


                const templateParams = {
                    largeMementos,
                    smallMementos,
                    hardwareTypes,
                    colors,
                    total,
                    message,
                    name,
                    email
                }
                await emailjs.send(
                    process.env.REACT_APP_SERVICE_ID ?? 'default_service_id',
                    process.env.REACT_APP_TEMPLATE_ID ?? 'default_template_id',
                    templateParams,
                    process.env.REACT_APP_PUBLIC_KEY ?? 'default_public_key'
                )
                toastifySuccess()
        } catch (e) {
            console.error(e)
        }
        reset()
    }

    return (
        <section className='page container'>
            <h1 className="page-header page-header-text">Bundle Form</h1>
            <h4 className='page-header'>Let's make your special moments last forever</h4>
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <Table padded>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>LARGE ITEMS</TableHeaderCell>
                        </TableRow>
                        <TableRow>
                            <TableHeaderCell>Items</TableHeaderCell>
                            <TableHeaderCell>Price</TableHeaderCell>
                            <TableHeaderCell>Quantity</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody id="largeItems">
                        {largeItemsArray.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>$ {item.price}</TableCell>
                                <TableCell>
                                    <input
                                        type='number'
                                        min={0}
                                        {...register(`largeItems[${item.id}].quantity`)}
                                        onChange={(e) => {
                                            const quantity = parseInt(e.target.value)
                                            setValue(`largeItems[${item.id}].quantity`, quantity)
                                        }}
                                        className='form-control formInput'
                                        placeholder='0'
                                    ></input>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>


                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>SMALL ITEMS</TableHeaderCell>
                        </TableRow>
                        <TableRow>
                            <TableHeaderCell>Items</TableHeaderCell>
                            <TableHeaderCell>Price</TableHeaderCell>
                            <TableHeaderCell>Quantity</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody id="small-items">
                        {smallItemsArray.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>$ {item.price}</TableCell>
                                <TableCell>
                                    <input
                                        type='number'
                                        min={0}
                                        {...register(`smallItems[${item.id}].quantity`)}
                                        onChange={(e) => {
                                            const quantity = parseInt(e.target.value)
                                            setValue(`smallItems[${item.id}].quantity`, quantity)
                                        }}
                                        className='form-control formInput'
                                        placeholder='0'
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>HARDWARE</TableHeaderCell>
                        </TableRow>
                        <TableRow>
                            <TableHeaderCell>Items</TableHeaderCell>
                            <TableHeaderCell>Selection</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody id='hardware'>
                        {hardwareChoicesArray.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                    <input
                                        type='checkbox'
                                        // name='name'
                                        {...register(`hardware[${item.name}]`)}
                                        className='form-control formInput'
                                    ></input>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Items</TableHeaderCell>
                            <TableHeaderCell>Selection</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody id='colors'>
                        {colorChoicesArray.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                    <input
                                        type='checkbox'
                                        {...register(`color[${item.name}]`)}
                                        className='form-control formInput'
                                    ></input>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableHeaderCell>Items selected:</TableHeaderCell>
                            <TableHeaderCell>Total Price: $</TableHeaderCell>
                        </TableRow>
                    </TableFooter>
                </Table>
                <div className='row formRow'>
                    <div className='col'>
                        <textarea
                            rows={3}
                            // name='message'
                            {...register('message', {
                                required: false
                            })}
                            className='form-control formInput'
                            placeholder='Please enter any special requests or comments here'
                            autoComplete='off'
                        ></textarea>
                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                </div>
                <div className='col-6'>
                    <input
                        type='text'
                        // name='name'
                        {...register('name', {
                            required: { value: false, message: 'Please enter your name' },
                            maxLength: {
                                value: 30,
                                message: 'Please use 30 characters or less'
                            }
                        })}
                        className='form-control formInput'
                        placeholder='Name'
                        autoComplete='name'
                    ></input>
                    {errors.name && <span className='errorMessage'>Please enter your name{errors?.text?.message?.toString()}</span>}
                </div>
                <div className='col-6'>
                    <input
                        type='email'
                        // name='email'
                        {...register('email', {
                            required: false,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className='form-control formInput'
                        placeholder='Email address'
                        autoComplete='email'
                    ></input>
                    {errors.email && (
                        <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                </div>
                <button className='submit-btn near-footer' type='submit'>
                    Submit
                </button>
            </form>
            <ToastContainer />
        </section >
    )
}

export default SubmitForm