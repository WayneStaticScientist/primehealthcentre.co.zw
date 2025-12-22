export const BreadCrumb = ({ title }: { title: string }) => {
  return (
    <div className="site-breadcrumb">
      <div
        className="site-breadcrumb-bg"
        style={{ background: "url(/assets/img/breadcrumb/01.jpg)" }}
      />
      <div className="container">
        <div className="site-breadcrumb-wrap">
          <h4 className="breadcrumb-title">{title}</h4>
          <ul className="breadcrumb-menu">
            <li>
              <a href="index-2.html">
                <i className="far fa-home" /> Home
              </a>
            </li>
            <li className="active">{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
