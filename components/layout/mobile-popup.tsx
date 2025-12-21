export const MobilePopup = () => {
  return (
    <div className="search-popup">
      <button className="close-search">
        <span className="far fa-times" />
      </button>
      <form action="#">
        <div className="form-group">
          <input
            type="search"
            name="search-field"
            className="form-control"
            placeholder="Search Here..."
            required
          />
          <button type="submit">
            <i className="far fa-search" />
          </button>
        </div>
      </form>
    </div>
  );
};
