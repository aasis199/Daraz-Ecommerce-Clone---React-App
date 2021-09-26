const Categories = [
    {
        title: 'Electronic Devices',
        URL : 'electronics',
        cName : 'nav-links',
    },
    {
        title: 'Electronic Accessories',
        URL : 'electronics',
        cName : 'nav-links',
    },
    {
        title: 'TV & Home Appliances',
        URL : 'home',
        cName : 'nav-links',
    },
    {
        title: 'Health & Beauty',
        URL : 'health',
        cName : 'nav-links',
    },
    {
        title: 'Babies & Toys',
        URL : 'baby-products',
        cName : 'nav-links',
    },
    {
        title: 'Groceries & Pets',
        URL : 'groceries',
        cName : 'nav-links',
    },
    {
        title: 'Home & Lifestyle',
        URL : 'home-lifestyle',
        cName : 'nav-links',
    },
    {
        title: 'Men`s Fashion',
        URL : 'menfashion',
        cName : 'nav-links',
    },
    {
        title: 'Women`s Fashion',
        URL : 'womenfashion',
        cName : 'nav-links',
    },
    {
        title: 'Watches & Accessories',
        URL : 'watches',
        cName : 'nav-links',
    },
    {
        title: 'Sports & Outdoors',
        URL : 'sports',
        cName : 'nav-links',
    },
    {
        title: 'Automotive & Motorbike',
        URL : 'automotive',
        cName : 'nav-links',
    },
  ];
  
  export default function Category() {
    return (
      <div className="categories d-none d-lg-block">
        {Categories.map(({ title,URL,cName, id }) => (
          <a href={URL}><p key={id}> {title}</p></a>
        ))}
        <div className="sub_categories">
            Hello
        </div>
      </div>
    );
  }