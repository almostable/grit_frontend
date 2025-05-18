'use client';

export function ProductOptions({ label, data, stateValue, setStateValue }) {
  return (
    <>
      <p className='text-base font-medium'>{label}</p>
      <div className='flex gap-1.5 flex-wrap'>
        <select
          value={stateValue}
          onChange={(e) => setStateValue(e.target.value)}
          className='w-full px-2.5 py-2 border border-neutral-300 rounded-md appearance-none outline-none'
        >
          <option value='' disabled hidden>
            выбор
          </option>
          {data?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
