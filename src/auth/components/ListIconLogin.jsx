export default function ListIconLogin({items}) {
    
    
  return (
    <>
        <ul className="list-none p-0 m-0">
            {
                items?.map(item=>(
                    <li key={item.icon} className="flex align-items-start mb-4">
                        <div>
                            <span className="flex align-items-center justify-content-center bg-purple-400" style={{width:"38px",height:"38px",borderRadius:"10px"}}>
                                <i className={`text-xl text-white ${item.icon}`}/>
                            </span>
                        </div>
                        <div className="ml-3">
                            <span className="font-medium text-black-alpha-90">
                                {item?.title}
                            </span>
                            <p className="mt-2 mb-0 text-black-alpha-50 line-height-3">
                                {item?.description}
                            </p>
                        </div>
                    </li>
                ))
            }
            

        </ul>
    </>
  )
}
