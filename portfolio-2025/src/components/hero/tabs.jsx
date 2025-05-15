
function tabs() {
    return (
    <>
    <div className="tabs" data-module="tabs">
  <h2 className="tabs__title">
    Contents
  </h2>
  <ul className="tabs__list">
    <li className="tabs__list-item tabs__list-item--selected">
      <a className="tabs__tab" href="#past-day">
        Past day
      </a>
    </li>
    <li className="tabs__list-item">
      <a className="tabs__tab" href="#past-week">
        Past week
      </a>
    </li>
    <li className="tabs__list-item">
      <a className="tabs__tab" href="#past-month">
        Past month
      </a>
    </li>
    <li className="tabs__list-item">
      <a className="tabs__tab" href="#past-year">
        Past year
      </a>
    </li>
  </ul>
  <div className="tabs__panel" id="past-day">
    <h2 className="heading-l">Past day</h2>
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <th scope="col" className="table__header">Case manager</th>
          <th scope="col" className="table__header">Cases opened</th>
          <th scope="col" className="table__header">Cases closed</th>
        </tr>
      </thead>
      <tbody className="table__body">
        <tr className="table__row">
          <td className="table__cell">David Francis</td>
          <td className="table__cell">3</td>
          <td className="table__cell">0</td>
        </tr>
        <tr className="table__row">
          <td className="table__cell">Paul Farmer</td>
          <td className="table__cell">1</td>
          <td className="table__cell">0</td>
        </tr>
        <tr className="table__row">
          <td className="table__cell">Rita Patel</td>
          <td className="table__cell">2</td>
          <td className="table__cell">0</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="tabs__panel tabs__panel--hidden" id="past-week">
    <h2 className="heading-l">Past week</h2>
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <th scope="col" className="table__header">Case manager</th>
          <th scope="col" className="table__header">Cases opened</th>
          <th scope="col" className="table__header">Cases closed</th>
        </tr>
      </thead>
      <tbody className="table__body">
        <tr className="table__row">
          <td className="table__cell">David Francis</td>
          <td className="table__cell">24</td>
          <td className="table__cell">18</td>
        </tr>
        <tr className="table__row">
          <td className="table__cell">Paul Farmer</td>
          <td className="table__cell">16</td>
          <td className="table__cell">20</td>
        </tr>
        <tr className="table__row">
          <td className="table__cell">Rita Patel</td>
          <td className="table__cell">24</td>
          <td className="table__cell">27</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="tabs__panel tabs__panel--hidden" id="past-month">
    <h2 className="heading-l">Past month</h2>
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <th scope="col" className="table__header">Case manager</th>
          <th scope="col" className="table__header">Cases opened</th>
          <th scope="col" className="table__header">Cases closed</th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tabs__panel tabs__panel--hidden" id="past-year">
    <h2 className="heading-l">Past year</h2>
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <th scope="col" className="table__header">Case manager</th>
          <th scope="col" className="table__header">Cases opened</th>
          <th scope="col" className="table__header">Cases closed</th>
        </tr>
      </thead>
      <tbody className="table__body">
        <tr className="table__row">
          <td className="table__cell">David Francis</td>
          <td className="table__cell">1380</td>
          <td className="table__cell">1472</td>
        </tr>
        <tr className="table__row">
          <td className="table__cell">Paul Farmer</td>
          <td className="table__cell">1129</td>
          <td className="table__cell">1083</td>
        </tr>
        <tr className="table__row">
          <td className="table__cell">Rita Patel</td>
          <td className="table__cell">1539</td>
          <td className="table__cell">1265</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    </>
    );
};