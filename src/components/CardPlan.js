/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import IconFree from '../graphics/Free.svg';
import CheckSuccess from '../graphics/Vector (4).svg';

function CardPlan({
  title, price, features, isSelect,
}) {
  return (
    <div className={`bg-white rounded-md flex flex-col justify-between items-center pt-16 pb-8 border ${
      isSelect ? 'border-red-500' : 'border-gray-300'}`}
    >
      <div className="space-y-5 flex flex-col justify-center items-center">
        <img src={IconFree} alt="" className="w-24" />
        <h3>{title}</h3>
        <div className="space-y-2">
          {
           features.map((val, index) => (
             <div key={index} className="flex flex-row mr-2 items-center space-x-2">
               <img
                 src={CheckSuccess}
                 alt="check-sucess"
                 className="w-3 h-10"
               />
               <div>
                 {val}
               </div>
             </div>
           ))
         }
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mb-3">{price}</div>
        <button
          className={`border rounded-full py-1 px-10 border-red-500 ${
            isSelect ? 'bg-red-500 text-white' : 'bg-white text-red-500'}`}
          type="submit"
        >
          Select

        </button>
      </div>
    </div>
  );
}

export default CardPlan;
