
import { TabPane, Tab, Table, TableHeader, TableBody, TableCell, TableFooter, TableHeaderCell, TableRow } from 'semantic-ui-react'
import { colorChoicesArray, hardwareChoicesArray, largeItemsArray, smallItemsArray } from '../assets/storeItems/Items'

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
                        <TableRow>
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
                    <TableRow>
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
                    <TableRow>
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
                    <TableRow>
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

const TabComponent = () => <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

export default TabComponent