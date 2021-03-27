const Tab1 = ({ data }) => {
  return (
      <table className="table table-bordered table-hover custom-table">
        <thead>
          <tr>
            <th scope="col">Department Name</th>
            <th scope="col">Sales</th>
            <th scope="col">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item["Department Name"]}</td>
              <td>{item["Sales"]}</td>
              <td>{item["Percentage"]}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{data.reduce((a, b) => a + b["Sales"], 0)}</td>
            <td>
              {data.reduce(
                (a, b) => a + Number(b["Percentage"].slice(0, -1)),
                0
              )}
              %
            </td>
          </tr>
        </tfoot>
      </table>
  );
};

export default Tab1;
