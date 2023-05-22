import "./table.css"

const Table = () => {
  return (
    <div className='table'>
          <table className="table">
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Clear and Descriptive Link/Button Text</td>
          <td>Links and buttons should have text that accurately describes their purpose or destination.</td>
        </tr>
        <tr>
          <td>Focus Indication</td>
          <td>Links and buttons should have a visible focus indicator when they receive keyboard focus.</td>
        </tr>
        <tr>
          <td>Color Contrast</td>
          <td>Links and buttons should have sufficient color contrast between the text or icon and the background to ensure between the text or icon and the background to ensure</td>
        </tr>
        <tr>
          <td>Unique and Distinguishable Link/Button Styling</td>
          <td>Links and buttons should be visually distinct from other content to allow users to easily identify and interact with them.</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Table 

