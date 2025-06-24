import React from 'react'

function Filters () {
  return (
    <div>
      <div className="bg-purple-100 px-8 ">
            <form action="" className="flex gap-x-5 text-sm">
                 <div className="form-element">
                    <label htmlFor="category" className="mr-3">Category:</label>
                
                    <select name="category" id="category" className="border border-gray-400 rounded-sm">
                        <option value="jewelery">Jewelery</option>
                        <option value="man">Man's Clothes</option>
                        <option value="woman">Woman's Clothes</option>
                        <option value="kids">Kids Clothes</option>
                    </select>
                
                 </div>
                 <div>
                    <label htmlFor="min-price">Min price:</label>
                    <input type="number" name="min-price" id="min-price" />
                 </div>
            </form>

        </div>
    </div>
  )
}

export default Filters
