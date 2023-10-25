  return (
    <div className="flex fixed flex-row">
	{console.log("Step 2 : Return App :",Products.length,ProductsCategory.length)}
      <div className="h-screen  bg-slate-800 p-3 xl:basis-1/5" style={{ minWidth: '65%' }}>
        <img className="w-full" src={logo} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <h1 className="text-3xl mb-2 font-bold text-white"> Product Catalog App </h1>
          <p className="text-gray-700 text-white">
            by - <b style={{ color: 'orange' }}>Design Shubham, Development Abraham</b>
          </p>
          <div className="py-10">
            { (Categories) ? <p className='text-white'>Tags : </p> : ''}
            {
              Categories.map(tag => <button key={tag} className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2" >{tag}</button>)
            }
          </div>
        </div>
      </div>
      <div className="ml-5  p-10 xl:basis-4/5">
        {console.log("Before render :",Products.length,ProductsCategory.length)}
        {render_products(ProductsCategory)}
      </div>
    </div>
  );