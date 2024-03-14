import { useForm } from 'react-hook-form'
import { TabPane, Tab, Table, TableHeader, TableBody, TableCell, TableFooter, TableHeaderCell, TableRow } from 'semantic-ui-react'
import { colorChoicesArray, hardwareChoicesArray, largeItemsArray, smallItemsArray } from '../assets/storeItems/Items'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'


const panes = [
    {
        menuItem: 'Large ', render: () => <TabPane><TabPane>
            <Table padded>
                <TableHeader>
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
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableHeaderCell>Items selected:</TableHeaderCell>
                        <TableHeaderCell>Total Price:</TableHeaderCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TabPane></TabPane>
    },
    {
        menuItem: 'Small ', render: () => <TabPane><Table padded>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Items</TableHeaderCell>
                    <TableHeaderCell>Price</TableHeaderCell>
                    <TableHeaderCell>Quantity</TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody id="smallItems">
                {smallItemsArray.map(item => (
                    <TableRow key={item.id}>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>$ {item.price}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableHeaderCell>Items selected:</TableHeaderCell>
                    <TableHeaderCell>Total Price:</TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table></TabPane>
    },
    {
        menuItem: 'Hardware ', render: () => <TabPane><Table padded>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Items</TableHeaderCell>
                    <TableHeaderCell>Selection</TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody id="hardware">
                {hardwareChoicesArray.map(item => (
                    <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableHeaderCell>Items selected:</TableHeaderCell>
                    <TableHeaderCell>Total Price:</TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table></TabPane>
    },
    {
        menuItem: 'Colors ', render: () => <TabPane><Table padded>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Items</TableHeaderCell>
                    <TableHeaderCell>Selection</TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody id="colors">
                {colorChoicesArray.map(item => (
                    <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableHeaderCell>Items selected:</TableHeaderCell>
                    <TableHeaderCell>Total Price:</TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table></TabPane>
    },
]

const TabComponent = () => <Tab menu={{ secondary: true, pointing: true }} panes={panes} renderActiveOnly={true} />


const SubmitForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    // displays success message when submission is successful
    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    const onSubmit = async (data: any) => {
        const { name, email, subject, message } = data;

        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID ?? 'default_service_id',
                process.env.REACT_APP_TEMPLATE_ID ?? 'default_template_id',
                templateParams,
                process.env.REACT_APP_PUBLIC_KEY ?? 'default_public_key'
            );
            reset()
            toastifySuccess()
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <section className='page container'>
            <h1 className='page-header page-header-text'>Weeding Bundle Form</h1>
            <h4 className='page-header'>Let's make your special moments last forever</h4>
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='row formRow'>
                    <div className='col-6'>
                        <input
                            type='text'
                            // name='name'
                            {...register('name', {
                                required: { value: true, message: 'Please enter your name' },
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
                                required: true,
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
                </div>
                <div className='row formRow'>
                    <div className='col'>
                        <input
                            type='text'
                            // name='subject'
                            {...register('subject', {
                                required: { value: true, message: 'Please enter a subject' },
                                maxLength: {
                                    value: 75,
                                    message: 'Subject cannot exceed 75 characters'
                                }
                            })}
                            className='form-control formInput'
                            placeholder='Subject'
                            autoComplete='off'
                        ></input>
                        {errors.subject && (
                            <span className='errorMessage'>Please enter a subject{errors?.text?.message?.toString()}</span>
                        )}
                    </div>
                </div>
                <div className='row formRow'>
                    <div className='col'>
                        <textarea
                            rows={3}
                            // name='message'
                            {...register('message', {
                                required: true
                            })}
                            className='form-control formInput'
                            placeholder='Message'
                            autoComplete='off'
                        ></textarea>
                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                </div>
                <button className='submit-btn near-footer' type='submit'>
                    Submit
                </button>
            </form>
            <ToastContainer />
        </section>
    )
}

export default SubmitForm