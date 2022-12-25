import "./Style.css"
function Invoice(props) {

    return (
        <div>
                <div className="Div2">
                    <table>
                            <tr>
                                <th className="th">DISCRIPTION</th>
                                <th className="th">RATE</th>
                                <th className="th">AMOUNT</th>
                            </tr>
                        <tbody>
                            {props.obj.map((item) => {
                                return (
                                    <tr>
                                        <td className="td">{item.Discription}</td>
                                        <td className="td">Rs. {80}</td>
                                        <td className="td">{item.Price}</td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <table>
                        
                    </table>
                </div>

        </div>
    )

}
export default Invoice