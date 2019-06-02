import React from 'react'


class PersonTable extends React.Component {

    render() {
        const { peopleList } = this.props;
        return (
            <table className="table table-bordered table-striped" >
                
                <tbody>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Age</th>

                    </tr> 
                    {peopleList.map((i, idx) => <tr key={idx} >
                        <td>{i.first}</td>
                        <td>{i.last}</td>
                        <td>{i.age}</td>
                    </tr>


               
                )}

                  
</tbody>
                 </table>
        )
    }
}
export default PersonTable;